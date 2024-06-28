import * as classes from './Loader.module.scss';
import LogoIcon from '@/assets/logos/logo.svg';

const Loader = () => {
  return (
    <div className={classes.container}>
      <LogoIcon />
      <div className={classes.loader}></div>
    </div>
  );
};

export default Loader;
