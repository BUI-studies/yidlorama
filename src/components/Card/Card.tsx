import { FC, ReactNode } from 'react';
import classes from './Card.module.scss';

 type CardProps = {
  title: string;
  data: {
    [k: string]: string;
  }[];
 }

const Card: FC<CardProps> = ({title, data}) => {
      const categoryItems = data.map((item) => 
        <div className={classes.cardListItem}>
          <p className={classes.cardListItemName}>{item.name}</p>
          <p className={classes.cardListItemValue}>{item.price}</p>
        </div>
      )
      return (
        <div className={classes.card}>
          <h2 className={classes.cardTitle}>{title}</h2>
          <div className={classes.cardList}>
            {categoryItems}
          </div>
        </div>
      )
}

export default Card;