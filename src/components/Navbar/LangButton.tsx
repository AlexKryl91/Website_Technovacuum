import { FC } from 'react';
import * as classes from './LangButton.module.scss';
import { useContext } from 'react';
import { LangContext } from '@/context/context';
import { TLangButton } from '@/types/types';

const LangButton: FC<TLangButton> = ({ name }) => {
  const { lang, setLang } = useContext(LangContext);

  const active = name === lang;

  const langSwitchHandler = () => {
    if (!active) {
      const newLang = lang === 'ru' ? 'en' : 'ru';
      setLang(newLang);
      document.querySelector('html').lang = newLang;
      sessionStorage.setItem('langData', JSON.stringify(newLang));
    }
  };

  const style = classes['lang-btn'].concat(active ? ` ${classes.active}` : '');

  return (
    <button onClick={langSwitchHandler} className={style} type="button">
      {name}
    </button>
  );
};

export default LangButton;
