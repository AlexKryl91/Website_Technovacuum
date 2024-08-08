import * as classes from './Loader.module.scss';
import BackgroundSVG from '@/assets/img/service_page_bg.svg';
import LogoIcon from '@/assets/logos/logo.svg';

const Loader = () => {
  return (
    <div className={classes.container}>
      <BackgroundSVG className={classes.background} />
      <LogoIcon className={classes.logo} />
      <div className={classes.loader}></div>
    </div>
  );
};

export default Loader;
