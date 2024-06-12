import { Link } from 'react-router-dom';
import IconChevronDown from '@/assets/icons/chevron_down.svg';
import * as classes from './MenuItem.module.scss';
import { FC } from 'react';
import { IMenuItem } from '@/types/types';

const MenuItem: FC<IMenuItem> = (props) => {
  return (
    <li className={classes['menu-item']}>
      {props.name}
      <IconChevronDown className={classes.chevron} />
      <div className={classes['dropdown']}>
        {props.content.map((link) => (
          <Link
            key={link.id}
            className={classes['dropdown-item']}
            to={link.path}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </li>
  );
};

export default MenuItem;
