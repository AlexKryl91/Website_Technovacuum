import * as classes from './Menu.module.scss';
import { FC } from 'react';
import { IMenu } from '@/types/types';
import MenuItem from '@/components/Navbar/MenuItem';

const Menu: FC<IMenu> = ({ menu }) => {
  return (
    <nav className={classes.menu}>
      <ul>
        {menu.map((item) => (
          <MenuItem key={item.id} {...item} />
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
