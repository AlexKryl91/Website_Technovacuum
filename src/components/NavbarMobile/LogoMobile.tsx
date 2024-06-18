import { Link } from 'react-router-dom';
import LogoIcon from '@/assets/Logo_32x32.svg';
import * as classes from './LogoMobile.module.scss';
import { FC } from 'react';
import { ILogo } from '@/types/types';

const LogoMobile: FC<ILogo> = ({ title, subtitle }) => {
  return (
    <Link to={'/'}>
      <div className={classes.container}>
        <LogoIcon />
        <div className={classes['text-content']}>
          <h2 className={classes.title}>{title}</h2>
          <h3 className={classes.subtitle}>{subtitle}</h3>
        </div>
      </div>
    </Link>
  );
};

export default LogoMobile;
