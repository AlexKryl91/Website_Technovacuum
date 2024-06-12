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

  const { logo, menuMap, loginBtn } = content;

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Logo maintext={logo.maintext} subtext={logo.subtext} />
        <nav className={classes.menu}>
          <Menu menu={menuMap} />
          <LangSwitcher />
          <LoginButton name={loginBtn.name} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
