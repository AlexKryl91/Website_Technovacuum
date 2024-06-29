import * as classes from './Footer.module.scss';
import { useContext } from 'react';
import { LangContext } from '@/context/context';
import { Link } from 'react-router-dom';
import ruTextContent from './ru.json';
import enTextContent from './en.json';
import Logo from '@/components/UI/Logo';

import Creator from './Creator';
import Address from './Address';
import MenuLinks from './MenuLinks';

const Footer = () => {
  const { lang } = useContext(LangContext);

  const content = lang === 'en' ? enTextContent : ruTextContent;

  const { logo, menu, login, creator, info } = content;

  return (
    <footer className={classes.footer}>
      <div className={classes['footer-decoration-left']}>
        <div className={classes['stripe-s']}></div>
        <div className={classes['stripe-m']}></div>
        <div className={classes['stripe-l']}></div>
        <div className={classes['stripe-xl']}></div>
      </div>
      <div className={classes['footer-decoration-right']}>
        <div className={classes['stripe-s']}></div>
        <div className={classes['stripe-m']}></div>
        <div className={classes['stripe-xl']}></div>
        <div className={classes['stripe-l']}></div>
      </div>
      <div className={classes['footer-body']}>
        <div className={classes['info-container']}>
          <div className={classes['address-wrapper']}>
            <Logo {...logo} />
            <Address {...info} />
          </div>
          <MenuLinks menu={menu} login={login} />
        </div>
        <Creator creator={creator} />
      </div>
    </footer>
  );
};

export default Footer;
