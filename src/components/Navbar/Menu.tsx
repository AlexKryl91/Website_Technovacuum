import * as classes from './Menu.module.scss';
import { FC } from 'react';
import { IMenu } from '@/types/types';
import MenuItem from '@/components/Navbar/MenuItem';

const Menu: FC<IMenu> = ({ menu }) => {
  return (
    <ul className={classes['menu-list']}>
      {menu.map((item) => (
        <MenuItem
          key={item.id}
          id={item.id}
          name={item.name}
          content={item.content}
        />
      ))}
    </ul>
  );
};

export default Menu;
