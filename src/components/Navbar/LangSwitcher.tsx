import * as classes from './LangSwicther.module.scss';
import LangButton from './LangButton';

const LangSwitcher = () => {
  return (
    <div className={classes.switcher} title="Смена языка">
      <LangButton name={'ru'} />
      <div className={classes['vertical-line']}></div>
      <LangButton name={'en'} />
    </div>
  );
};

export default LangSwitcher;
