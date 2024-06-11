import { FC } from 'react';
import * as classes from './LangButton.module.scss';
import { useContext } from 'react';
import { LangContext } from '@/context/context';

type LangButton = {
  name: string;
};

const LangButton: FC<LangButton> = ({ name }) => {
  const { lang, setLang } = useContext(LangContext);

  const active = name === lang;

  const langSwitchHandler = () => {
    if (!active) {
      setLang(lang === 'ru' ? 'en' : 'ru');
    }
  };

  return (
    <button
      onClick={langSwitchHandler}
      className={`${classes['button-lang']} ${active && classes['active-lng']}`}
      type="button"
    >
      {name}
    </button>
  );
};

export default LangButton;
