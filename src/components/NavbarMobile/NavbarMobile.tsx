import * as classes from './NavbarMobile.module.scss';
import ruTextContent from '@/components/locales/ru.json';
import enTextContent from '@/components/locales/en.json';
import { useContext, useState } from 'react';
import { LangContext } from '@/context/context';
import LogoMobile from '@/components/UI/LogoMobile';
import BurgerMenu from './BurgerMenu';
import BurgerButton from './BurgerButton';

const NavbarMobile = () => {
  const { lang } = useContext(LangContext);
  const content = lang === 'en' ? enTextContent : ruTextContent;
  const { logo, menu, login } = content;

  const [menuActive, setMenuActive] = useState<boolean>(false);

  return (
    <header className={classes.header}>
      <LogoMobile {...logo} />
      <BurgerMenu
        active={menuActive}
        setActive={setMenuActive}
        menu={menu}
        login={login}
      />
      <BurgerButton active={menuActive} setActive={setMenuActive} />
    </header>
  );
};

export default NavbarMobile;
