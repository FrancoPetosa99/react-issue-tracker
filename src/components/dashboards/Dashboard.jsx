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

function Dashboard({ children, data, columnsSchema, pageSchema, columnFilters }) {

  const table = useReactTable({
    columns: columnsSchema,
    data: data,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    columnResizeMode: 'onChange',
    initialState: { pagination: pageSchema },
    state: { columnFilters: columnFilters }
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