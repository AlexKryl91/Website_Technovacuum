import { FC } from 'react';
import * as classes from './LoginButton.module.scss';
import { ILoginButton } from '@/types/types';

const LoginButton: FC<ILoginButton> = ({ value }) => {
  return (
    <button
      className={classes['button-login']}
      type="button"
      title="Вход в личный кабинет"
    >
      {value}
    </button>
  );
};

export default LoginButton;
