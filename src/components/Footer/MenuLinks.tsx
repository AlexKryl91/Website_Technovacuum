import * as classes from './MenuLinks.module.scss';
import { Link } from 'react-router-dom';
import { IMenuLinks } from '@/types/types';
import { FC } from 'react';

const MenuLinks: FC<IMenuLinks> = ({ menu, login }) => {
  return (
    <div className={classes['link-wrapper']}>
      {menu.map((item) => (
        <ul key={item.id} className={classes['link-group']}>
          <h4>{item.value}</h4>
          {item.content.map((link) => (
            <li key={link.id}>
              <Link to={link.path}>{link.value}</Link>
            </li>
          ))}
        </ul>
      ))}
      <div className={classes['link-login']}>{login.value}</div>
    </div>
  );
};

export default MenuLinks;
