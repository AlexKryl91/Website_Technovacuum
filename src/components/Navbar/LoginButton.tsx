import { FC } from 'react';
import * as classes from './LoginButton.module.scss';
import { ILoginButton } from '@/types/types';

const LoginButton: FC<ILoginButton> = ({ name }) => {
  return (
    <button className={classes['button-login']} type="button">
      {name}
    </button>
  );
};

export default LoginButton;
