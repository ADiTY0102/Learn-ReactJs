import React, { useState, useMemo, useEffect } from 'react';
import {
  IconArrowsSort,
  IconSortAscending,
  IconSortDescending,
  IconFilter,
  IconColumns,
  IconDownload,
  IconLayoutRows,
  IconSearch,
  IconX,
  IconCheck
} from '@tabler/icons-react';

const ReusableTable = ({
  columns,
  data,
  striped = true,
  hover = true,
  bordered = true,
  pagination = true,
  search = false,
  rowsPerPageOptions = [5, 10, 25, 50],
  defaultRowsPerPage = 10,
  emptyMessage = 'No data available',
  enableSorting = true,
  enableColumnFilter = true,
  enableColumnResize = true,
  enableColumnVisibility = true,
  enableRowSelection = false,
  enableExport = true,
  enableDensity = true,
  loading = false,
  onRowSelect
}) => {
  /* ================= STATE (ORIGINAL – ALL USED) ================= */
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  const [columnFilters, setColumnFilters] = useState({});
  const [columnWidths, setColumnWidths] = useState({});
  const [visibleColumns, setVisibleColumns] = useState({});
  const [selectedRows, setSelectedRows] = useState(new Set());
  const [density, setDensity] = useState('standard');
  const [showFilters, setShowFilters] = useState(false);
  const [showColumns, setShowColumns] = useState(false);

  /* ================= INIT ================= */
  useEffect(() => {
    const w = {};
    const v = {};
    columns.forEach(c => {
      w[c.key] = c.width || '150px';
      v[c.key] = true;
    });
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setColumnWidths(w);
    setVisibleColumns(v);
  }, [columns]);

  /* ================= SORT ================= */
  const handleSort = key => {
    if (!enableSorting) return;
    let dir = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') dir = 'desc';
    else if (sortConfig.key === key && sortConfig.direction === 'desc') dir = null;
    setSortConfig({ key, direction: dir });
  };

  /* ================= DATA ================= */
  const activeColumns = useMemo(
    () => columns.filter(c => visibleColumns[c.key]),
    [columns, visibleColumns]
  );

  const processedData = useMemo(() => {
    let rows = [...data];

    if (search && searchTerm) {
      rows = rows.filter(r =>
        Object.values(r).some(v => v?.toString().toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    Object.entries(columnFilters).forEach(([k, v]) => {
      if (v) rows = rows.filter(r => r[k]?.toString().toLowerCase().includes(v.toLowerCase()));
    });

    if (sortConfig.direction) {
      rows.sort((a, b) => {
        if (a[sortConfig.key] === b[sortConfig.key]) return 0;
        return sortConfig.direction === 'asc'
          ? a[sortConfig.key] < b[sortConfig.key] ? -1 : 1
          : a[sortConfig.key] > b[sortConfig.key] ? -1 : 1;
      });
    }

    return rows;
  }, [data, searchTerm, columnFilters, sortConfig, search]);

  /* ================= PAGINATION ================= */
  const totalPages = Math.ceil(processedData.length / rowsPerPage);
  const pageRows = pagination
    ? processedData.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage)
    : processedData;

  /* ================= SELECTION ================= */
  const toggleRow = idx => {
    if (!enableRowSelection) return;
    const next = new Set(selectedRows);
    next.has(idx) ? next.delete(idx) : next.add(idx);
    setSelectedRows(next);
    onRowSelect && onRowSelect([...next]);
  };

  /* ================= EXPORT ================= */
  const exportToCSV = () => {
    const headers = activeColumns.map(c => c.label).join(',');
    const rows = processedData.map(r => activeColumns.map(c => r[c.key]).join(',')).join('\n');
    const blob = new Blob([headers + '\n' + rows], { type: 'text/csv' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'table.csv';
    a.click();
  };

  const densityClass = {
    compact: 'py-1',
    standard: 'py-2',
    comfortable: 'py-4'
  }[density];

  /* ================= RENDER ================= */
  return (
    <div className="w-full bg-white rounded-xl shadow p-4">

      {/* TOOLBAR */}
      <div className="flex flex-wrap justify-between gap-3 mb-3">
        {search && (
          <div className="flex items-center gap-2 border rounded px-2">
            <IconSearch size={16} />
            <input
              className="outline-none text-sm"
              placeholder="Search"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
            {searchTerm && <IconX size={14} onClick={() => setSearchTerm('')} />}
          </div>
        )}

        <div className="flex gap-2">
          {enableDensity && (
            <button onClick={() => setDensity(d => d === 'compact' ? 'standard' : d === 'standard' ? 'comfortable' : 'compact')}
              className="border px-2 rounded">
              <IconLayoutRows size={16} />
            </button>
          )}

          {enableColumnVisibility && (
            <button onClick={() => setShowColumns(!showColumns)} className="border px-2 rounded">
              <IconColumns size={16} />
            </button>
          )}

          {enableColumnFilter && (
            <button onClick={() => setShowFilters(!showFilters)} className="border px-2 rounded">
              <IconFilter size={16} />
            </button>
          )}

          {enableExport && (
            <button onClick={exportToCSV} className="border px-2 rounded">
              <IconDownload size={16} />
            </button>
          )}
        </div>
      </div>

      {/* COLUMN VISIBILITY */}
      {showColumns && (
        <div className="flex flex-wrap gap-3 mb-2">
          {columns.map(c => (
            <label key={c.key} className="flex items-center gap-1 text-sm">
              <input
                type="checkbox"
                checked={visibleColumns[c.key]}
                onChange={() => setVisibleColumns(v => ({ ...v, [c.key]: !v[c.key] }))}
              />
              {c.label}
            </label>
          ))}
        </div>
      )}

      {/* FILTERS */}
      {showFilters && (
        <div className="flex gap-2 mb-2">
          {activeColumns.map(c => (
            <input
              key={c.key}
              className="border px-2 text-sm rounded"
              placeholder={`Filter ${c.label}`}
              value={columnFilters[c.key] || ''}
              onChange={e => setColumnFilters(p => ({ ...p, [c.key]: e.target.value }))}
            />
          ))}
        </div>
      )}

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              {activeColumns.map(col => (
                <th
                  key={col.key}
                  style={{ width: columnWidths[col.key] }}
                  className="text-left px-2 py-2 cursor-pointer"
                  onClick={() => handleSort(col.key)}>
                  {col.label}
                  {sortConfig.key === col.key && (
                    sortConfig.direction === 'asc'
                      ? <IconSortAscending size={14} />
                      : <IconSortDescending size={14} />
                  )}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr><td colSpan={activeColumns.length} className="text-center py-6">Loading…</td></tr>
            ) : pageRows.length ? (
              pageRows.map((row, i) => (
                <tr
                  key={i}
                  onClick={() => toggleRow(i)}
                  className={`border-b ${hover && 'hover:bg-gray-50'} ${striped && i % 2 ? 'bg-gray-50' : ''}`}>
                  {activeColumns.map(c => (
                    <td key={c.key} className={`px-2 ${densityClass}`}>
                      {enableRowSelection && selectedRows.has(i) && <IconCheck size={12} />} {c.render ? c.render(row[c.key], row) : row[c.key]}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr><td colSpan={activeColumns.length} className="text-center py-6">{emptyMessage}</td></tr>
            )}
          </tbody>
        </table>
      </div>

      {/* PAGINATION */}
      {pagination && (
        <div className="flex justify-between items-center mt-3 text-sm">
          <select value={rowsPerPage} onChange={e => setRowsPerPage(+e.target.value)}>
            {rowsPerPageOptions.map(n => <option key={n}>{n}</option>)}
          </select>

          <div className="flex gap-2">
            <button disabled={currentPage === 1} onClick={() => setCurrentPage(p => p - 1)}>Prev</button>
            <span>{currentPage} / {totalPages}</span>
            <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(p => p + 1)}>Next</button>
          </div>
        </div>
      )}

    </div>
  );
};

export default ReusableTable;
