import { flexRender } from '@tanstack/react-table';
import React from 'react';

function Table({ useTable }) {
    return(
        <table className="table table-striped">
            <thead className="table-dark">
                {useTable.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id}>
                        {headerGroup.headers.map((column) => (
                            <th key={column.id}>{column.column.columnDef.header}</th>
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