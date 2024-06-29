import { Link } from 'react-router-dom';
import LogoIcon from '@/assets/logos/logo.svg';
import * as classes from './Logo.module.scss';
import { FC } from 'react';
import { ILogo } from '@/types/types';

const Logo: FC<ILogo> = ({ heading, subheading }) => {
  return (
    <Link to={'/'}>
      <div className={classes.container} title="На главную страницу">
        <LogoIcon />
        <div className={classes['text-content']}>
          <h2 className={classes.title}>{heading}</h2>
          <h3 className={classes.subtitle}>{subheading}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
