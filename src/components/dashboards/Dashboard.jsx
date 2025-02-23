import React, { useState } from "react";
import { 
  getCoreRowModel, 
  getFilteredRowModel, 
  getPaginationRowModel, 
  getSortedRowModel, 
  useReactTable 
} from "@tanstack/react-table";
import Filters from "./Filters";
import Table from "./Table";
import PageController from "./PageController";

function Dashboard({ children, data, columnsSchema, pageSchema, filters }) {

  const [ columnFilters, setColumnFilters ] = useState(
    filters.map(filter => { 
      return { id: filter.name, value: '' }
  }));  

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

  const onFilterChange = (id, value)=> {
    const filter = columnFilters.find(filter => filter.id === id);
    filter.value = value;
    setColumnFilters([ ...columnFilters ]);
  };
  
  return (
    <div className="container mt-2">
      
      { children }

      <Filters
        filters={filters}
        onFilterChange={onFilterChange}
      />

      <Table useTable={table} />

      <PageController useTable={table} />

    </div>
  );
}

export default Dashboard;