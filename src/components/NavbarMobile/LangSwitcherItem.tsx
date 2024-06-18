import LangButtonMobile from './LangButtonMobile';
import * as classes from './LangSwitcherItem.module.scss';

const LangSwitcherItem = () => {
  return (
    <div className={classes.switcher}>
      <LangButtonMobile name={'ru'} />
      <LangButtonMobile name={'en'} />
    </div>
  );
};

export default LangSwitcherItem;
