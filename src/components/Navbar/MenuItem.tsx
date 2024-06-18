import { Link, useLocation } from 'react-router-dom';
import IconChevronDown from '@/assets/icons/chevron_down.svg';
import * as classes from './MenuItem.module.scss';
import { FC } from 'react';
import { IMenuItem } from '@/types/types';

const MenuItem: FC<IMenuItem> = (props) => {
  const currentPath = useLocation().pathname;
  const paths = props.content.map((link) => link.path);
  const isCurrent = paths.some((path) => path === currentPath);

  const style = classes.item.concat(isCurrent ? ` ${classes.current}` : '');

  return (
    <li className={style}>
      {props.value}
      <IconChevronDown className={classes.chevron} />
      <div className={classes.dropdown}>
        {props.content.map((link) => (
          <Link
            key={link.id}
            className={link.path === currentPath ? classes.current : undefined}
            to={link.path}
          >
            {link.value}
          </Link>
        ))}
      </div>
    </li>
  );
};

export default MenuItem;
