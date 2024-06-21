import { FC } from 'react';
import * as classes from './ButtonLink.module.scss';
import { Link } from 'react-router-dom';
import { IButtonLink } from '@/types/types';

const ButtonLink: FC<IButtonLink> = ({ size, theme, value, path }) => {
  const style = `${classes['btn-link']} ${classes[size]} ${classes[theme]}`;

  return (
    <Link to={path} className={style}>
      {value}
    </Link>
  );
};

export default ButtonLink;
