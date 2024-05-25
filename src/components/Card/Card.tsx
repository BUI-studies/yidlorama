import { FC, ReactNode } from 'react';
import { K } from './types';
import classes from './Card.module.scss';

const Card: FC<{data: K}> = ({data}) => {
  return (
    data.map((category)=> {
      const categoryTitle = Object.keys(category)[0];
      const items = category[categoryTitle];
      const categoryItems = items.map((item) => 
        <div className={classes.cardItem}>
          <p>{item.name}</p>
          <p>{item.price}</p>
        </div>
      )
      return (
        <div className={classes.card}>
          <h2 className={classes.cardTitle}>{categoryTitle}</h2>
          {categoryItems}
        </div>
      )
    })
  )
}

export default Card;