import { FC } from 'react';
import * as classes from './LoginItem.module.scss';
import { ILoginButton } from '@/types/types';

const LoginItem: FC<ILoginButton> = ({ value }) => {
  return (
    <button className={classes['item-login']} type="button">
      {value}
    </button>
  );
};

export default LoginItem;
