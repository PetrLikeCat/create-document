import React from 'react'
import { useTable } from 'react-table';
import { Table } from './Table';
import { PaginationDocument } from './PaginationDocument';
export const Documents = () => {
  return (
    <div className="table-container">
      <Table />
     <div className="pagination">
     <PaginationDocument />
      </div>
    </div>
  )
}
