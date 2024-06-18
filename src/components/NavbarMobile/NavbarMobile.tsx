import * as classes from './NavbarMobile.module.scss';
import ruTextContent from './ru.json';
import enTextContent from './en.json';
import { useContext, useState } from 'react';
import { LangContext } from '@/context/context';
import LogoMobile from './LogoMobile';
import BurgerMenu from './BurgerMenu';
import BurgerButton from './BurgerButton';

const NavbarMobile = () => {
  const { lang } = useContext(LangContext);
  const content = lang === 'en' ? enTextContent : ruTextContent;
  const { logo, menu, login } = content;

  const [menuActive, setMenuActive] = useState<boolean>(false);

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <LogoMobile {...logo} />
        <BurgerButton active={menuActive} setActive={setMenuActive} />
        <BurgerMenu
          active={menuActive}
          setActive={setMenuActive}
          menu={menu}
          login={login}
        />
      </div>
    </header>
  );
};

export default NavbarMobile;
