import { FC } from 'react';
import { IHorizontalBar } from '@/types/types';
import * as classes from './HorizontalBar.module.scss';
import useItersection from '@/hooks/useIntersection';

const HorizontalBar: FC<IHorizontalBar> = ({ spacer }) => {
  const [ref, isIntersecting] = useItersection('0px');

  const barStyle = classes.bar.concat(
    isIntersecting ? ` ${classes.intro}` : ''
  );

  return (
    <div ref={ref} className={classes['break-line']}>
      {spacer && <div className={classes.spacer}></div>}
      <div className={barStyle}>
        <div className={classes['stripe-s']}></div>
        <div className={classes['stripe-m']}></div>
        <div className={classes['stripe-l']}></div>
        <div className={classes['stripe-xl']}></div>
      </div>
    </div>
  );
};

export default HorizontalBar;
