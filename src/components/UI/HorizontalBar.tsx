import { FC } from 'react';
import { IHorizontalBar } from '@/types/types';
import * as classes from './HorizontalBar.module.scss';

const HorizontalBar: FC<IHorizontalBar> = ({ spacer }) => {
  return (
    <div className={classes['break-line']}>
      {spacer && <div className={classes.spacer}></div>}
      <div className={classes.bar}>
        <div className={classes['stripe-s']}></div>
        <div className={classes['stripe-m']}></div>
        <div className={classes['stripe-l']}></div>
        <div className={classes['stripe-xl']}></div>
      </div>
    </div>
  );
};

export default HorizontalBar;
