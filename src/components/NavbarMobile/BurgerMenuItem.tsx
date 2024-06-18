import { Link, useLocation } from 'react-router-dom';
import IconChevronDown from '@/assets/icons/chevron_down.svg';
import * as classes from './BurgerMenuItem.module.scss';
import { FC, useState } from 'react';
import { IMenuItem } from '@/types/types';

const BurgerMenuItem: FC<IMenuItem> = ({ value, content, setActive }) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const dropdownHandler = () => setIsOpened(!isOpened);

  const currentPath = useLocation().pathname;
  const paths = content.map((link) => link.path);
  const isCurrent = paths.some((path) => path === currentPath);

  const styleItem = classes.item.concat(isCurrent ? ` ${classes.current}` : '');
  const styleIcon = classes.chevron.concat(isOpened ? ` ${classes.open}` : '');
  const styleDropdown = classes.dropdown.concat(
    isOpened ? ` ${classes.open}` : ''
  );

  return (
    <li className={styleItem} onClick={dropdownHandler}>
      {value}
      <IconChevronDown className={styleIcon} />
      <div className={styleDropdown} onClick={(e) => e.stopPropagation()}>
        {content.map(({ id, path, value }) => (
          <Link
            key={id}
            className={path === currentPath ? classes.current : undefined}
            to={path}
            onClick={() => setActive(false)}
          >
            {value}
          </Link>
        ))}
      </div>
    </li>
  );
};

export default BurgerMenuItem;
