import { FC } from 'react';
import { useContext, useState } from 'react';
import { LangContext } from '@/context/context';
import * as classes from './BurgerButton.module.scss';
import { IBurgerButton } from '@/types/types';

const BurgerButton: FC<IBurgerButton> = ({ active, setActive }) => {
  const { lang } = useContext(LangContext);

  const style = classes['burger-btn'].concat(
    active ? ` ${classes.active}` : ''
  );

  return (
    <button className={style} onClick={() => setActive(!active)}>
      <span />
      <span />
      <span />
      <span className={classes['visually-hidden']}>
        {lang === 'en' ? 'Menu' : 'Меню'}
      </span>
    </button>
  );
};

export default BurgerButton;
