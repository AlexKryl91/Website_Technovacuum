import { LangContext } from '@/context/context';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import useIsMobile from '@/hooks/useIsMobile';
import Navbar from '@/components/Navbar/Navbar';
import NavbarMobile from '@/components/NavbarMobile/NavbarMobile';
import './App.scss';

const App = () => {
  const [lang, setLang] = useState<string>('ru');
  const isMobile = useIsMobile(window.innerWidth);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {isMobile ? <NavbarMobile /> : <Navbar />}
      <Outlet />
      {isMobile ? 'MobileFooter' : 'DesktopFooter'}
    </LangContext.Provider>
  );
};

export default App;
