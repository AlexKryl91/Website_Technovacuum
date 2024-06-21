import { Link } from 'react-router-dom';
import LogoIcon from '@/assets/Logo_32x32.svg';
import * as classes from './LogoMobile.module.scss';
import { FC } from 'react';
import { ILogo } from '@/types/types';

const LogoMobile: FC<ILogo> = ({ heading, subheading }) => {
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

export default LogoMobile;
