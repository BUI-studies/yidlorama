import { ReactNode } from 'react';
import classes from './UniversalTable.module.scss';
import { UniversalTableProps, BaseData } from './types';

const UniversalTable = <T extends BaseData>({data, headers}:UniversalTableProps<T>):ReactNode => {
  return (
      <div className={classes.tableContainer}>
        <ul className={classes.tableHeader}>
          {headers.map((header)=> <li key={header.title} className={classes.tableCell}>{header.title}</li>)}
        </ul>
        {data.map((row) => (
          <ul key={row.id} className={classes.tableRow}>
            {headers.map((header)=> <li key={`${row.id}${header.property as string}`} className ={classes.tableCell}>{row[header.property] as string}</li>)}
          </ul>
        ))}
      </div>
  )
}

export default UniversalTable;