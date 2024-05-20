import { FC } from 'react';
import { DishGroup as DishGroupProps } from '../../types';
import classes from './DishGroup.module.scss';

const DishGroup: FC <DishGroupProps> = ({title, dishes}) => {
  return (
    <div className = {classes.dishGroup}>
      <h2 className = {classes.dishGroupTitle}>{title}</h2>
      <ul className = {classes.dishGroupList}>
        {dishes.map((dish) => (
          <li key={dish.id} className = {classes.dishGroupListItem}>
            <h3>{dish.name}</h3>
            <p>{dish.price}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DishGroup;