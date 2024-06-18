import * as classes from './Navbar.module.scss';
import Logo from './Logo';
import LangSwitcher from './LangSwitcher';
import LoginButton from './LoginButton';
import ruTextContent from './ru.json';
import enTextContent from './en.json';
import { useContext } from 'react';
import { LangContext } from '@/context/context';
import Menu from './Menu';

const Navbar = () => {
  const { lang } = useContext(LangContext);

  const content = lang === 'en' ? enTextContent : ruTextContent;

  const { logo, menu, login } = content;

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Logo {...logo} />
        <Menu menu={menu} />
        <div className={classes.actions}>
          <LangSwitcher />
          <LoginButton {...login} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
