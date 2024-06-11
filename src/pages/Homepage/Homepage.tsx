import * as classes from './Homepage.module.scss';
import { FC, useContext } from 'react';
import { LangContext } from '@/context/context';

const Homepage = () => {
  const { lang } = useContext(LangContext);

  return (
    <div>
      <div className={classes.testblock}></div>
      <h1 className={classes.h1}>Научные исследования</h1>
      <h1 className={classes.h1}>Новые технологии</h1>
      <h1 className={classes.h1}>Внедрения</h1>
    </div>
  );
};

export default Homepage;
