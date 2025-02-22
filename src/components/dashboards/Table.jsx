import { flexRender } from '@tanstack/react-table';
import React from 'react';

function Table({ useTable }) {
    return(
        <table className="table table-striped">
            <thead className="table-dark">
                {useTable.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                            <th 
                                key={header.id}
                                onClick={header.column.getToggleSortingHandler()}
                            >
                                {header.column.columnDef.header}
                                {header.column.getIsSorted() === 'asc' && <i className="bi bi-arrow-up"></i>}
                                {header.column.getIsSorted() === 'desc' && <i className="bi bi-arrow-down"></i>}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody>
                {useTable.getRowModel().rows.map((row) => (
                    <tr key={row.id}>
                        {row.getVisibleCells().map((cell) => (
                            <td key={cell.id}>{
                                flexRender(
                                    cell.column.columnDef.cell,
                                    cell.getContext()
                                )
                            }</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;