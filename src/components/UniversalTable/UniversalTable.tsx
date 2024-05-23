import {  ReactNode } from 'react';
import classes from './UniversalTable.module.scss';
import { UniversalTableProps, BaseData } from './types';


const renderCell = (value: any): string => {
  if (typeof value === 'object') {
    return JSON.stringify(value);
  }
  return String(value);
}

const UniversalTable = <T extends BaseData>({data, headers}:UniversalTableProps<T>):ReactNode => {
  return (
      <div className={classes.tableContainer}>
        <ul className={classes.tableHeader}>
          {headers.map((header)=> <li key={header.title} className={classes.tableCell}>{header.title}</li>)}
        </ul>
        {data.map((row) => (
          <ul key={row.id} className={classes.tableRow}>
            {headers.map((header)=> <li key={`${row.id}${renderCell(header.property)}`} className ={classes.tableCell}>{renderCell(row[header.property])}</li>)}
          </ul>
        ))}
      </div>
  )
}

export default UniversalTable;