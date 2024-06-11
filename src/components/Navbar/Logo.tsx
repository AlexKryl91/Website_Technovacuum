import { Link } from 'react-router-dom';
import LogoIcon from '@/assets/Logo_32x32.svg';
import * as classes from './Logo.module.scss';
import { FC } from 'react';
import { ILogo } from '@/types/types';

const Logo: FC<ILogo> = ({ maintext, subtext }) => {
  return (
    <Link to={'/'}>
      <div className={classes['logo-container']}>
        <LogoIcon className={classes['logo-img']} />
        <div className={classes['logo-text']}>
          <h2 className={classes['logo-text__maintext']}>{maintext}</h2>
          <h3 className={classes['logo-text__subtext']}>{subtext}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
