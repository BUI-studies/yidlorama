import {  ReactNode } from 'react';
import classes from './UniversalTable.module.scss';

type UniversalTableProps<D> = {
  data: D[]

  headers: {
    title: string;
    property: keyof D;
  }[]
}

const UniversalTable = <T,>({data, headers}:UniversalTableProps<T>):ReactNode => {
  return (
    <>
      <div className={classes.TableContainer}>
        <ul className={classes.TableHeader}>
          {headers.map((header)=> <li key={header.title} className={classes.TableHeaderCell}>{header.title}</li>)}
        </ul>
        {data.map((row, rowIndex) => (
          <ul key={rowIndex} className={classes.TableRow}>
            {headers.map((header, cellIndex)=> <li key={cellIndex} className ={classes.TableRowCell}>{row[header.property]}</li>)}
          </ul>
        ))}
      </div>
    </>
  )
}

export default UniversalTable;