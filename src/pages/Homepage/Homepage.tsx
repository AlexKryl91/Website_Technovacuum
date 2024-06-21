import * as classes from './Homepage.module.scss';
import { useContext } from 'react';
import { LangContext } from '@/context/context';
import imgEjector from '@/assets/img/ejector_1.png';
import IconModern from '@/assets/icons/icon_modern.svg';
import IconScience from '@/assets/icons/icon_science.svg';
import IconExperience from '@/assets/icons/icon_experience.svg';
import ButtonLink from '@/components/UI/ButtonLink';
import HorizontalBar from '@/components/UI/HorizontalBar';

const Homepage = () => {
  const { lang } = useContext(LangContext);

  return (
    <main className={classes.main}>
      <section className={classes.banner}>
        <h1 className={classes['visually-hidden']}>
          Техновакуум. Струйная техника
        </h1>
        <div className={classes['banner-decoration']}>
          <div className={classes.stripes}>
            <div className={classes['stripes-s']}></div>
            <div className={classes['stripes-m']}></div>
            <div className={classes['stripes-xl']}></div>
            <div className={classes['stripes-l']}></div>
          </div>
          <img src={imgEjector} alt="Паровой эжектор" />
        </div>
        <div className={classes['banner-body']}>
          <div className={classes['banner-text']}>
            <h2 className={classes.tagline}>
              Научные исследования
              <br />
              Новые технологии
              <br />
              Внедрения
            </h2>
            <div className={classes['h-line']}></div>
            <p className={classes.description}>
              Разрабатываем и внедряем новые экологически чистые и
              ресурсосберегающие технологии на промышленные предприятия
              нефтяной, газовой и нефтехимической отраслей
            </p>
          </div>
        </div>
      </section>
      <section className={classes.advantage}>
        <h3 className={classes['section-header'] + ` ${classes['dark']}`}>
          Почему именно мы?
        </h3>
        <div className={classes['advantage-body']}>
          <div className={classes.illustration}>
            <img src="" alt="" />
            <div className={classes.mark}>
              <p>60+</p>
              <p>внедрений</p>
            </div>
            <div className={classes.mark}>
              <p>30+</p>
              <p>лет опыта</p>
            </div>
            <img src="" alt="" />
          </div>
          <div className={classes.points}>
            <IconModern />
            <div className={classes['points-description']}>
              <p className={classes.caption}>
                Современные технологичные решения для различных промышленных
                задач
              </p>
              <ButtonLink
                size="small"
                theme="light"
                value="Подробнее >"
                path="/solutions"
              />
            </div>
            <IconScience />
            <div className={classes['points-description']}>
              <p className={classes.caption}>
                Решения, подкреплённые научными исследованиями и испытаниями
              </p>
              <ButtonLink
                size="small"
                theme="light"
                value="Подробнее >"
                path="/about"
              />
            </div>
            <IconExperience />
            <div className={classes['points-description']}>
              <p className={classes.caption}>
                Огромный опыт внедрений промышленных систем и установок
              </p>
              <ButtonLink
                size="small"
                theme="light"
                value="Подробнее >"
                path="/implementations"
              />
            </div>
          </div>
        </div>
        {/* <div className={classes['advantage-break']}>
          <HorizontalBar />
        </div> */}
      </section>
      <section className={classes.offer}>
        <HorizontalBar spacer={true} />
        <h3 className={classes['section-header']}>Что мы предлагаем?</h3>
      </section>
    </main>
  );
};

export default Homepage;
