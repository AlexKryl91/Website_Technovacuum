import * as classes from './LangSwicther.module.scss';
import { useContext } from 'react';
import { LangContext } from '@/context/context';
import LangButton from './LangButton';

const LangSwitcher = () => {
  const { lang } = useContext(LangContext);

  const activeRU = lang === 'ru';
  const activeEN = !activeRU;

  return (
    <div className={classes.switcher}>
      <LangButton name={'ru'} />
      <div className={classes['button-lang-vl']}></div>
      <LangButton name={'en'} />
    </div>
  );
};

export default LangSwitcher;
