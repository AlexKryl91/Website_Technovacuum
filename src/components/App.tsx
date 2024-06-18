import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import './App.scss';
import { LangContext } from '@/context/context';
import { useState } from 'react';
import useIsMobile from '@/hooks/useIsMobile';
import NavbarMobile from './NavbarMobile/NavbarMobile';

const App = () => {
  const [lang, setLang] = useState<string>('ru');
  const isMobile = useIsMobile(window.innerWidth);

  return (
    <>
      <LangContext.Provider value={{ lang, setLang }}>
        {isMobile ? <NavbarMobile /> : <Navbar />}
        <Outlet />
      </LangContext.Provider>
    </>
  );
};

export default App;
