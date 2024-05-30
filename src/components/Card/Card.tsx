import { FC, ReactNode } from 'react';
import { K } from './types';
import classes from './Card.module.scss';

const Card: FC<{data: K}> = ({data}) => {
  return (
    data.map((category)=> {
      const categoryTitle = Object.keys(category)[0];
      const items = category[categoryTitle];
      const categoryItems = items.map((item) => 
        <div className={classes.cardListItem}>
          <p className={classes.cardListItemName}>{item.name}</p>
          <p className={classes.cardListItemValue}>{item.price}</p>
        </div>
      )
      return (
        <div className={classes.card}>
          <h2 className={classes.cardTitle}>{categoryTitle}</h2>
          <div className={classes.cardList}>
            {categoryItems}
          </div>
        </div>
      )
    })
  )
}

export default Card;