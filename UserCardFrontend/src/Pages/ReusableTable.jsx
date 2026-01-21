import React, { useState } from 'react';
import ReusableTable from '../Hooks/NewReusableTable';

const DummyTablePage = () => {
  const [selected, setSelected] = useState([]);

  const columns = [
    { key: 'id', label: 'ID', width: '80px' },
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Role' },
    { key: 'status', label: 'Status' }
  ];

  const data = [
    { id: 1, name: 'Aditya', email: 'aditya@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Rahul', email: 'rahul@example.com', role: 'User', status: 'Inactive' },
    { id: 3, name: 'Sneha', email: 'sneha@example.com', role: 'Manager', status: 'Active' },
    { id: 4, name: 'Priya', email: 'priya@example.com', role: 'User', status: 'Active' },
    { id: 5, name: 'Amit', email: 'amit@example.com', role: 'User', status: 'Inactive' }
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-xl font-semibold mb-4">Reusable Table – Dummy Data Demo</h1>

      <ReusableTable
        columns={columns}
        data={data}
        search
        pagination
        enableSorting
        enableColumnFilter
        enableColumnVisibility
        enableRowSelection
        enableExport
        onRowSelect={setSelected}
      />

      <div className="mt-4 text-sm text-gray-600">
        Selected Row Indexes: {JSON.stringify(selected)}
      </div>
    </div>
  );
};

export default DummyTablePage;