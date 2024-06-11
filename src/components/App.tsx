import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import './App.scss';
import { LangContext } from '@/context/context';
import { useState } from 'react';

const App = () => {
  const [lang, setLang] = useState<string>('ru');

  return (
    <>
      <LangContext.Provider value={{ lang, setLang }}>
        <Navbar />
        <Outlet />
      </LangContext.Provider>
    </>
  );
};

export default App;
