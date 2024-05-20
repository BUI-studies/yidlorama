import {  ReactNode } from 'react';
import classes from './UniversalTable.module.scss';
import { UniversalTableProps } from './types';

const UniversalTable = <T,>({data, headers}:UniversalTableProps<T>):ReactNode => {
  return (
      <div className={classes.tableContainer}>
        <ul className={classes.tableHeader}>
          {headers.map((header)=> <li key={header.title} className={classes.tableCell}>{header.title}</li>)}
        </ul>
        {data.map((row, rowIndex) => (
          <ul key={rowIndex} className={classes.tableRow}>
            {headers.map((header, cellIndex)=> <li key={cellIndex} className ={classes.tableCell}>{row[header.property]}</li>)}
          </ul>
        ))}
      </div>
  )
}

export default UniversalTable;