import * as classes from './UnderConstruction.module.scss';
import { useContext } from 'react';
import { LangContext } from '@/context/context';

import ImgUnderConstruction from '@/assets/img/under_construction.svg';
import ImgDangerStripe from '@/assets/img/danger_stripe.svg';
import ImgStripes from '@/assets/img/stripes_danger.png';

const UnderConstruction = () => {
  const { lang } = useContext(LangContext);

  return (
    <main className={classes.main}>
      <div className={classes.container}>
        <div className={classes['circle-bg']}></div>
        <ImgUnderConstruction className={classes['main-img']} />

        <img
          src={ImgStripes}
          alt={lang === 'en' ? 'Crossed stripes' : 'скрещенные полосы'}
          loading="lazy"
          className={classes['crossed-stripes']}
        />

        <h1 className={classes['main-text']}>
          {lang === 'en'
            ? 'Page is under construction'
            : 'Страница в разработке'}
        </h1>
        <h2 className={classes['sub-text']}>
          {lang === 'en'
            ? "We're making improvements. The page will be back soon!"
            : 'Мы вносим улучшения. Страница скоро вернется!'}
        </h2>

        <ImgDangerStripe className={classes['bottom-stripe']} />
      </div>
      <div className={classes['white-spacer']}></div>
    </main>
  );
};

export default UnderConstruction;
