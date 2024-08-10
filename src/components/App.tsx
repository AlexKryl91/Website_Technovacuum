import { LangContext } from '@/context/context';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import useIsMobile from '@/hooks/useIsMobile';
import Navbar from '@/components/Navbar/Navbar';
import NavbarMobile from '@/components/NavbarMobile/NavbarMobile';
import './App.scss';
import Footer from './Footer/Footer';

const App = () => {
  const countryRegex =
    /(ru|RU)|(az|AZ)|(am|AM)|(by|BY)|(kz|KZ)|(md|MD)|(tj|TJ)|(uz|UZ)|(tm|TM)|(ua|UA)/g;

  let initLang = countryRegex.test(window.navigator.language) ? 'ru' : 'en';

  if (sessionStorage.getItem('langData')) {
    initLang = JSON.parse(sessionStorage.getItem('langData'));
  }

  const [lang, setLang] = useState<string>(initLang);
  const isMobile = useIsMobile(window.innerWidth);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {isMobile ? <NavbarMobile /> : <Navbar />}
      <Outlet />
      <Footer />
    </LangContext.Provider>
  );
};

export default App;
