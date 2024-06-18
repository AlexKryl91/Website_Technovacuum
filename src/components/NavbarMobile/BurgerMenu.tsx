import { FC } from 'react';
import * as classes from './BurgerMenu.module.scss';
import { IBurgerMenu } from '@/types/types';
import BurgerMenuItem from './BurgerMenuItem';
import LoginItem from './LoginItem';
import LangSwitcherItem from './LangSwitcherItem';

const BurgerMenu: FC<IBurgerMenu> = ({ active, setActive, menu, login }) => {
  const style = classes.menu.concat(active ? ` ${classes.active}` : '');

  return (
    <div className={style} onClick={() => setActive(false)}>
      <div className={classes.content} onClick={(e) => e.stopPropagation()}>
        <ul>
          {menu.map((item) => (
            <BurgerMenuItem key={item.id} {...item} setActive={setActive} />
          ))}
          <li>
            <LangSwitcherItem />
          </li>
          <li>
            <LoginItem {...login} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;
