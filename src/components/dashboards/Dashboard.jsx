import React, { useState } from "react";
import { 
  getCoreRowModel, 
  getFilteredRowModel, 
  getPaginationRowModel, 
  getSortedRowModel, 
  useReactTable 
} from "@tanstack/react-table";
import Table from "./Table";
import PageController from "./PageController";

function Dashboard({ children, data, columnsSchema, pageSchema, columnFilters, updateData }) {

  const table = useReactTable({
    columns: columnsSchema,
    data: data,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    columnResizeMode: 'onChange',
    initialState: { pagination: pageSchema },
    state: { columnFilters: columnFilters },
    filterFns: {
      multiValueFilter: (row, columnId, filterValue) => {
        if (!filterValue || filterValue.length === 0) return true; 
        const rowValue = row.getValue(columnId);
        return filterValue.some(value => value === rowValue);
      }
    },
    meta: { updateData: updateData }
  });

  return (
    <div className="container mt-2">
      
      { children }

      <Table useTable={table} />

      <PageController useTable={table} />

    </div>
  );
}

export default Dashboard;