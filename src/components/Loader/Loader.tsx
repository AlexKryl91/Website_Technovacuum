import * as classes from './Loader.module.scss';
import LogoIcon from '@/assets/Logo_32x32.svg';

const Loader = () => {
  return (
    <div className={classes.container}>
      <LogoIcon />
      <div className={classes.loader}></div>
    </div>
  );
};

export default Loader;
