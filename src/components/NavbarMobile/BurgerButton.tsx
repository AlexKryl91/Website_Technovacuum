import { FC } from 'react';
import * as classes from './BurgerButton.module.scss';
import { IBurgerButton } from '@/types/types';

const BurgerButton: FC<IBurgerButton> = ({ active, setActive }) => {
  const style = classes['burger-btn'].concat(
    active ? ` ${classes.active}` : ''
  );

  return (
    <button className={style} onClick={() => setActive(!active)}>
      <span />
      <span />
      <span />
    </button>
  );
};

export default BurgerButton;
