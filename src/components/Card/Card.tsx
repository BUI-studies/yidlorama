import { FC } from 'react';
import classes from './Card.module.scss';

 type CardProps = {
  title: string;
  data: {
    [k: string]: string;
  }[];
 }

const Card: FC<CardProps> = ({title, data}) => {
  return (
    <div className={classes.card}>
      <h2 className={classes.cardTitle}>{title}</h2>
      <div className={classes.cardList}>
        {data.map((item, index) => 
          <div className={classes.cardListItem} key={`${index}+${item.name}`}>
            <p className={classes.cardListItemName}>{item.name}</p>
            <p className={classes.cardListItemValue}>{item.price}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Card;