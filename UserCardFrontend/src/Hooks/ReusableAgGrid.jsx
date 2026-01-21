// src/utils/ReusableAgGridTable.jsx
import { useMemo, useState, useCallback, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import { ModuleRegistry, AllCommunityModule } from "ag-grid-community";
import { FiMaximize, FiMinimize } from "react-icons/fi";

// AG Grid structural + base legacy theme CSS
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

// Our custom gradient theme overrides
import "../Hooks/ReusableAgGrid.css";


ModuleRegistry.registerModules([AllCommunityModule]);

const ReusableAgGrid = ({
  rowData = [],
  columnDefs = [],
  rowNumbers = false,

  gridHeight = "320px",
  gridWidth = "100%",

  enablePagination = true,
  paginationPageSize = 10,
  rowSelection = "single",
  animateRows = true,

  enableSidebar = false,
  enableFiltersPanel = false,
  enableColumnsPanel = false,
  enablePivotMode = false,

  frameworkComponents = {},
  onGridReady,
}) => {
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);
  const [fullscreen, setFullscreen] = useState(false);

  const gradient = "linear-gradient(135deg, #3B82F6, #6366F1)";

  const containerStyle = useMemo(
    () => ({
      width: gridWidth,
      height: gridHeight,
      minHeight: gridHeight,
      display: "flex",
      flexDirection: "column",
      borderRadius: 16,
      overflow: "hidden",
      fontFamily:
        'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      fontSize: 13,
      background: gradient,
      padding: 1,
      boxShadow: "0 10px 25px rgba(15, 23, 42, 0.25)",
    }),
    [gridWidth, gridHeight, gradient]
  );

  /* -------- row numbers -------- */
  const rowNumberColDef = useMemo(() => {
    if (!rowNumbers) return [];
    return [
      {
        headerName: "Sr. No.",
        colId: "__rowNum__",
        width: 60,
        pinned: "left",
        lockPosition: true,
        suppressMovable: true,
        sortable: false,
        filter: false,
        valueGetter: (params) =>
          params.node.rowIndex +
          1 +
          (params.api.paginationGetCurrentPage?.() || 0) *
            (params.api.paginationGetPageSize?.() || 0),
        cellStyle: {
          textAlign: "center",
          fontWeight: 600,
        },
      },
    ];
  }, [rowNumbers]);

  const resolvedColumnDefs = useMemo(
    () => [...rowNumberColDef, ...columnDefs],
    [columnDefs, rowNumberColDef]
  );

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      resizable: true,
      filter: true,
      editable: false,
      flex: 1,
      minWidth: 140,
    }),
    []
  );

  const handleGridReady = useCallback(
    (params) => {
      setGridApi(params.api);
      setGridColumnApi(params.columnApi);
      onGridReady?.(params);

      const cols = params.columnApi.getAllColumns();
      if (cols?.length) params.columnApi.autoSizeColumns(cols, false);
    },
    [onGridReady]
  );

  useEffect(() => {
    if (!gridColumnApi) return;
    const cols = gridColumnApi.getAllColumns();
    if (cols?.length) gridColumnApi.autoSizeColumns(cols, false);
  }, [rowData, gridColumnApi]);

  const sideBarConfig = useMemo(() => {
    if (!enableSidebar) return false;
    return {
      toolPanels: [
        enableFiltersPanel && {
          id: "filters",
          labelDefault: "Filters",
          toolPanel: "agFiltersToolPanel",
        },
        enableColumnsPanel && {
          id: "columns",
          labelDefault: "Columns",
          toolPanel: "agColumnsToolPanel",
          toolPanelParams: { suppressPivotMode: !enablePivotMode },
        },
      ].filter(Boolean),
    };
  }, [enableSidebar, enableFiltersPanel, enableColumnsPanel, enablePivotMode]);

  const toolbarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "8px 12px",
    color: "#F9FAFB",
  };

  const titleStyle = {
    fontSize: 25,
    fontWeight: 600,
  };

  const iconButtonStyle = {
    border: "1px solid rgba(249,250,251,0.6)",
    borderRadius: 999,
    background: "rgba(15,23,42,0.35)",
    padding: "4px 8px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    color: "#E5E7EB",
  };

  const innerCardStyle = {
    flex: 1,
    backgroundColor: "#ffffff",
    borderRadius: 14,
    overflow: "hidden",
    margin: "0 8px 8px 8px",
  };

  return (
    <>
      {/* Normal mode */}
      {!fullscreen && (
        <div style={containerStyle}>
          <div style={toolbarStyle}>
            <div style={titleStyle}>Table</div>
            <button
              style={iconButtonStyle}
              onClick={() => setFullscreen(true)}
              title="Fullscreen"
            >
              <FiMaximize size={14} />
            </button>
          </div>

          <div style={innerCardStyle}>
            <div style={{ width: "100%", height: "100%" }}>
              <div
                className="ag-theme-blue-gradient"
                style={{ width: "100%", height: "100%" }}
              >
                <AgGridReact
                  rowData={rowData}
                  columnDefs={resolvedColumnDefs}
                  defaultColDef={defaultColDef}
                  animateRows={animateRows}
                  rowSelection={rowSelection}
                  pagination={enablePagination}
                  paginationPageSize={paginationPageSize}
                  sideBar={sideBarConfig}
                  frameworkComponents={frameworkComponents}
                  onGridReady={handleGridReady}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Fullscreen mode */}
      {fullscreen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: gradient,
            padding: 16,
            display: "flex",
            flexDirection: "column",
            boxSizing: "border-box",
          }}
        >
          <div style={toolbarStyle}>
            <div style={titleStyle}>Table (Fullscreen)</div>
            <button
              style={iconButtonStyle}
              onClick={() => setFullscreen(false)}
              title="Exit Fullscreen"
            >
              <FiMinimize size={14} />
            </button>
          </div>

          <div
            style={{
              flex: 1,
              marginTop: 12,
              borderRadius: 18,
              backgroundColor: "#ffffff",
              padding: 8,
              boxShadow: "0 14px 35px rgba(15,23,42,0.35)",
            }}
          >
            <div
              className="ag-theme-blue-gradient"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 14,
                overflow: "hidden",
              }}
            >
              <AgGridReact
                rowData={rowData}
                columnDefs={resolvedColumnDefs}
                defaultColDef={defaultColDef}
                animateRows={animateRows}
                rowSelection={rowSelection}
                pagination={enablePagination}
                paginationPageSize={paginationPageSize}
                sideBar={sideBarConfig}
                frameworkComponents={frameworkComponents}
                onGridReady={handleGridReady}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReusableAgGrid;
