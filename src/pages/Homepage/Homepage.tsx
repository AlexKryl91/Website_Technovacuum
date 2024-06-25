import * as classes from './Homepage.module.scss';
import { useContext } from 'react';
import { LangContext } from '@/context/context';
import imgEjector from '@/assets/img/tv_steam_ejector.png';

import imgAfipka from '@/assets/img/photo_afipskiy_small.jpg';
import imgKrotovka from '@/assets/img/photo_krotovka_small.jpg';

import IconModern from '@/assets/icons/icon_notebook.svg';
import IconScience from '@/assets/icons/icon_science.svg';
import IconExperience from '@/assets/icons/icon_experience.svg';

import imgItem1 from '@/assets/img/homepage_list_item_1.jpg';
import imgItem2 from '@/assets/img/homepage_list_item_2.jpg';
import imgItem3 from '@/assets/img/homepage_list_item_3.jpg';

import ButtonLink from '@/components/UI/ButtonLink';
import HorizontalBar from '@/components/UI/HorizontalBar';
import { Link } from 'react-router-dom';

const Homepage = () => {
  const { lang } = useContext(LangContext);

  const clients = [
    {
      id: 1,
      name: 'Афипский НПЗ',
      img: '@/assets/img/company_anpz.png',
      href: 'https://www.afipnpz.ru',
    },
    {
      id: 2,
      name: 'Essar',
      img: '@/assets/img/company_essar.jpg',
      href: 'https://www.essar.com',
    },
    {
      id: 3,
      name: 'Газпромнефть',
      img: '@/assets/img/company_gazpromneft.png',
      href: 'https://www.gazprom-neft.ru',
    },
    {
      id: 4,
      name: 'Hyundai Engineering',
      img: '@/assets/img/company_hyundai.png',
      href: 'https://en.hdec.kr/en/main.aspx',
    },
    {
      id: 5,
      name: 'КазМунайГаз',
      img: '@/assets/img/company_kazmunaigaz.png',
      href: 'https://www.kmg.kz',
    },
    {
      id: 6,
      name: 'Лукойл',
      img: '@/assets/img/company_lukoil.jpg',
      href: 'https://lukoil.ru',
    },
    {
      id: 7,
      name: 'НефтеХимСервис',
      img: '@/assets/img/company_neftehimservis.jpg',
      href: 'https://nhs-kuzbass.ru',
    },
    {
      id: 8,
      name: 'ННК',
      img: '@/assets/img/company_nnk.png',
      href: 'https://ru.wikipedia.org/wiki/%D0%A5%D0%B0%D0%B1%D0%B0%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9_%D0%BD%D0%B5%D1%84%D1%82%D0%B5%D0%BF%D0%B5%D1%80%D0%B5%D1%80%D0%B0%D0%B1%D0%B0%D1%82%D1%8B%D0%B2%D0%B0%D1%8E%D1%89%D0%B8%D0%B9_%D0%B7%D0%B0%D0%B2%D0%BE%D0%B4',
    },
    {
      id: 9,
      name: 'Orlen Lietuva',
      img: '@/assets/img/company_orlen.png',
      href: 'https://www.orlenlietuva.lt',
    },
    {
      id: 10,
      name: 'Роснефть',
      img: '@/assets/img/company_rosneft.png',
      href: 'https://www.rosneft.ru',
    },
    {
      id: 11,
      name: 'Щекиноазот',
      img: '@/assets/img/company_schekinoazot.jpg',
      href: 'https://n-azot.ru',
    },
    {
      id: 12,
      name: 'Сибур',
      img: '@/assets/img/company_sibur.png',
      href: 'https://www.sibur.ru/ru',
    },
    {
      id: 13,
      name: 'Славнефть',
      img: '@/assets/img/company_slavneft.png',
      href: 'https://www.slavneft.ru',
    },
    {
      id: 14,
      name: 'Славянск ЭКО',
      img: '@/assets/img/company_slavyansk-eko.png',
      href: 'https://slaveco.ru',
    },
    {
      id: 15,
      name: 'SOCAR',
      img: '@/assets/img/company_socar.png',
      href: 'https://socar.com.ru',
    },
    {
      id: 16,
      name: 'ТАИФ-НК',
      img: '@/assets/img/company_taifnk.jpg',
      href: 'https://taifnk.ru',
    },
    {
      id: 17,
      name: 'TANECO',
      img: '@/assets/img/company_taneco.png',
      href: 'https://www.taneco.ru',
    },
    {
      id: 18,
      name: 'TATNEFT',
      img: '@/assets/img/company_tatneft.png',
      href: 'https://www.tatneft.ru',
    },
    {
      id: 19,
      name: 'TNGIZT',
      img: '@/assets/img/company_turkmenistan.jpg',
      href: 'https://tngizt.gov.tm',
    },
    {
      id: 20,
      name: 'Транснефть',
      img: '@/assets/img/company_transneft.png',
      href: 'https://www.transneft.ru',
    },
  ];

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
            <img
              src={imgAfipka}
              alt="Фото воторой ступени вакуумсоздающей системы"
            />
            <div className={classes.mark}>
              <p>60+</p>
              <p>внедрений</p>
            </div>
            <div className={classes.mark}>
              <p>30+</p>
              <p>лет опыта</p>
            </div>
            <img
              src={imgKrotovka}
              alt="Фото струйно-абсорбционной установки на нефтеналивной эстакаде"
            />
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
                path="/products&services"
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
      </section>

      <section className={classes.offer}>
        <HorizontalBar spacer={true} />
        <h3 className={classes['section-header']}>Что мы предлагаем?</h3>

        <ul className={classes['offer-points']}>
          <li className={classes['point-item']}>
            <div className={classes['item-wrapper']}>
              <img src={imgItem1} alt="Нефтепереабатывающий завод" />
              <div className={classes['item-description']}>
                <p className={classes.caption}>
                  Наши разработки и технологические решения на основе
                  вакуумсоздающих систем, струйных компрессоров или
                  струйно-абсорбционных установок для различных промышленных
                  задач
                </p>
                <ButtonLink
                  size="small"
                  theme="light"
                  value="Подробнее >"
                  path="/solutions"
                />
              </div>
            </div>
          </li>
          <li className={classes['point-item']}>
            <div className={classes['item-wrapper']}>
              <img src={imgItem2} alt="Сотрудники обследуют установку" />
              <div className={classes['item-description']}>
                <p className={classes.caption}>
                  Услуги и работы по обследованию производств и установок,
                  моделированию процессов, технико-экономическому анализу,
                  разработке технического задания и базового проекта, и прочее
                </p>
                <ButtonLink
                  size="small"
                  theme="light"
                  value="Подробнее >"
                  path="/products&services"
                />
              </div>
            </div>
          </li>
          <li className={classes['point-item']}>
            <div className={classes['item-wrapper']}>
              <img src={imgItem3} alt="Трубопроводная обвязка" />
              <div className={classes['item-description']}>
                <p className={classes.caption}>
                  Оптимальное внедрение нашей продукции при модернизации или
                  реконструкции установок под цели и задачи Клиента при общем
                  увеличении производительности и эффективности
                </p>
                <ButtonLink
                  size="small"
                  theme="light"
                  value="Подробнее >"
                  path="/implementations"
                />
              </div>
            </div>
          </li>
        </ul>
      </section>

      <section className={classes.clients}>
        <h3 className={classes['section-header'] + ` ${classes['dark']}`}>
          Наши клиенты
        </h3>
        <div className={classes['clients-body']}>
          <div className={classes['cards-slide']}>
            {clients.map((client) => (
              <div key={client.id} className={classes.card}></div>
            ))}
          </div>
          <div className={classes['cards-slide']}>
            {clients.map((client) => (
              <div key={client.id} className={classes.card}></div>
            ))}
          </div>
        </div>
      </section>

      <section className={classes.join}>
        <HorizontalBar spacer={true} />
        <h3 className={classes['section-header']}>
          Стань частью нашей команды!
        </h3>
        <div className={classes['text-bar']}>
          <p className={classes['invite-text']}>
            Если Вы хотите присоединиться к нашему коллективу, принять участие в
            разработке и реализации новых технологий и найти воплощение своих
            идей в металле – ознакомьтесь с открытыми вакансиями либо присылайте
            Ваше резюме нам на почту!
          </p>
          <div className={classes['button-wrapper']}>
            <ButtonLink
              size="large"
              theme="dark"
              value="Вакансии"
              path="/careers"
            />
            <ButtonLink
              size="large"
              theme="dark"
              value="Контакты"
              path="/contacts"
            />
          </div>
        </div>
      </section>

      <section className={classes.feedback}>
        <h3 className={classes['section-header'] + ` ${classes['dark']}`}>
          Свяжитесь с нами
        </h3>

        <p className={classes['feedback-text']}>
          Для получения более подробной информации от наших специалистов
          заполните форму обратной связи. Вы также можете заполнить опросные
          листы со спецификацией необходимого оборудования в личном кабинете
          Пользователя, предварительно зарегистрировавшись на нашем сайте.
        </p>
        <div className={classes['form-field']}>
          <form className={classes['feedback-form']}>
            <input type="text" name="" id="" required />
            <input type="text" name="" id="" />
            <input type="tel" name="" id="" />
            <input type="email" name="" id="" required />
            <textarea name="" id=""></textarea>
            <ButtonLink size="large" theme="dark" value="Отправить" path="/" />
          </form>
        </div>
        <div className={classes['call-in']}>
          <p className={classes['call-in-text']}>
            Если Вы нуждаетесь в экологически чистых решениях, хотите
            существенно снизить выбросы в окружающую среду, затраты энергии и
            ресурсов, планируете строительство новых или модернизацию
            существующих объектов...
          </p>
          <p className={classes['end-phrase']}>
            <Link to={'/contacts'}>Обращайтесь к нам!</Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Homepage;
