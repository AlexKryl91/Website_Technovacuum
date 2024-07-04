import * as classes from './Solutions.module.scss';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { LangContext } from '@/context/context';

import IconChevronDown from '@/assets/icons/chevron_down.svg';

import IconVacuum from '@/assets/icons/icon_vacuum.svg';
import IconPressure from '@/assets/icons/icon_pressure.svg';
import IconAbsorb from '@/assets/icons/icon_absorb.svg';
import HorizontalBarButton from './HorizontalBarButton';

import IconVHC from '@/assets/icons/icon_vhc.svg';
import IconArrow from '@/assets/icons/icon_arrow.svg';
import CarouselSlider from '@/components/CarouselSlider/CarouselSlider';

import testImg1 from '@/assets/img/test1.jpg';
import testImg2 from '@/assets/img/test2.jpg';
import testImg3 from '@/assets/img/test3.jpg';
import testImg4 from '@/assets/img/test4.jpg';

const Solutions = () => {
  // const { lang } = useContext(LangContext);
  // const content = lang === 'en' ? enTextContent : ruTextContent;
  // const { banner, advantage, offer, clients, join, feedback } = content;

  const slides = [
    {
      id: 1,
      img: testImg1,
      img_alt: '',
      text: {
        caption: 'Схема одноступенчатой ВСС с ВГЦ-аппаратом',
        description: {
          block1: ['ВГЦ-аппарат', 'Сепаратор', 'Холодильник', 'Насос'],
          block2: [
            'Парогазовая смесь из вакуумируемой ёмкости',
            'Линия отвода сжатого газа',
            'Линия слива избытка рабочей жидкости',
            'Линия подпитки свежей рабочей жидкостью',
          ],
        },
      },
    },
    {
      id: 2,
      img: testImg2,
      img_alt: '',
      text: { caption: '', description: { block1: [''], block2: [''] } },
    },
    {
      id: 3,
      img: testImg3,
      img_alt: '',
      text: { caption: '', description: { block1: [''], block2: [''] } },
    },
    {
      id: 4,
      img: testImg4,
      img_alt: '',
      text: { caption: '', description: { block1: [''], block2: [''] } },
    },
  ];
  const btnLabel = ['Показать предыдущую схему', 'Показать следущую схему'];

  const [subpageStateVHC, setSubpagesStateVHC] = useState<boolean>(false);
  // const [subpageStateSTEAM, setSubpagesStateSTEAM] = useState<boolean>(false);
  // const [subpageStateJC, setSubpagesStateJC] = useState<boolean>(false);
  // const [subpageStateJAU, setSubpagesStateJAU] = useState<boolean>(false);

  const styleIcon = classes.chevron.concat(
    subpageStateVHC ? ` ${classes.open}` : ''
  );
  const styleSubpage = classes.subpage.concat(
    subpageStateVHC ? ` ${classes.active}` : ''
  );

  return (
    <main className={classes.main}>
      <h1 className={classes['main-header']}>Разработки</h1>
      <ul className={classes['systems']}>
        <li className={classes['systems-item']}>
          <div className={classes.icon}>
            <IconVacuum />
          </div>
          <div className={classes['item-wrapper']}>
            <p className={classes.description}>
              <strong>Вакуумсоздающие системы</strong> (ВСС) предназначены для
              откачки газов, паров и парожидкостных смесей с целью создания
              вакуума в аппаратах различного назначения (разного рода колоннах,
              десорберах, испарителях, деаэраторах, реакторах и других).
            </p>
            <button
              onClick={() => setSubpagesStateVHC(!subpageStateVHC)}
              className={classes['expand-btn']}
              type="button"
            >
              Подробнее
              <IconChevronDown className={styleIcon} />
            </button>
          </div>
        </li>
        <section className={classes.subpage}>
          <div className={classes['subpage-header-wrapper']}>
            <IconVHC />
            <h3 className={classes['subpage-header']}>
              ВСС на базе ВГЦ-аппаратов
            </h3>
          </div>
          <div className={classes['subpage-body']}>
            <p className={classes['text']}>
              <strong>Вакуумные гидроциркуляционные (ВГЦ)</strong> аппараты
              являются альтернативой традиционным системам создания вакуума,
              таким как вакуумные насосы, паровые эжекторы и при определенных
              условиях имеют существенно лучшие показатели по стабильности
              работы и стоимости эксплуатации.
            </p>
            <CarouselSlider slides={slides} btn_label={btnLabel} />
            <h4>Принцип работы (на примере одноступенчатой ВСС)</h4>
            <span className={classes['text']}>
              <p>
                Откачиваемая среда из технологического аппарата направляется на
                вход ВГЦ-аппарата 1. В нём происходит сжатие парогаза за счет
                энергии струи рабочей жидкости, подаваемой в аппарат 1 насосом
                4. В качестве рабочей жидкости может быть использован один из
                технологических потоков установки, который допустимо смешивать с
                откачиваемыми парами (например, в нефтепереработке используется
                дизельная фракция или газойль).
              </p>
              <p>
                Из ВГЦ-аппарата 1 образовавшаяся жидкостно-газовая смесь
                попадает в сепаратор 2, где происходит разделение газа и
                жидкости. Сжатый до требуемого давления газ направляется для
                дальнейшего использования или утилизации. Рабочая жидкость после
                отвода избытка тепла в холодильнике 3 снова подается насосом 4 в
                ВГЦ-аппарат 1. При необходимости обновления рабочей жидкости
                осуществляется подпитка и отвод балансового избытка из системы.
              </p>
            </span>
            <h4>Ключевые преимущества ВГЦ-аппарата:</h4>
            <ul className={classes['vhc-advantage']}>
              <li>
                <IconArrow />
                Одновременно со сжатием парогаза происходит процесс конденсации
                паров на струе рабочей жидкости, что делает аппарат
                энергетически выгодным, особенно при откачивании парогазовых
                смесей с большим процентным содержанием пара
              </li>
              <li>
                <IconArrow />
                Повышение экологичности установки за счет существенного
                уменьшения сбросов тепловой энергии в окружающую среду и
                загрязненных стоков воды, нуждающихся в очистке
              </li>
              <li>
                <IconArrow />
                Экономия за счет снижения затрат на потребление энергоресурсов
                (водяного пара и охлаждающей воды)
              </li>
              <li>
                <IconArrow />
                Сокращение потерь ценных продуктов с конденсатом водяного пара
              </li>

              <li>
                <IconArrow />
                Отсутствие проблем, связанных с ухудшением работы конденсаторов
                и теплообменного оборудования
              </li>
              <li>
                <IconArrow />
                Низкая чувствительность к наличию в откачиваемой среде жидких и
                твердых частиц
              </li>
              <li>
                <IconArrow />
                Высокая надежность и взрывопожаробезопасность
              </li>
              <li>
                <IconArrow />
                Легко внедряется на существующие установки
              </li>
              <li>
                <IconArrow />
                Бесшумность работы
              </li>
            </ul>
            <div className={classes['h-line']}></div>
            <p className={classes.summary}>
              Все аппараты выпускаются по техническому заданию Заказчика на
              необходимую производительность и давление откачки. Поэтому если
              Вас заvинтересовала данная технология и Вы планируете применить ее
              на Вашем предприятии, пожалуйста,{' '}
              <Link to={'/contacts'}>свяжитесь с нами</Link> или{' '}
              <Link to={'/solutions'}>заполните опросный лист</Link>.
            </p>
          </div>
        </section>
        {/* 
dfdfsd
dfdsf
dsfds
dsfds
dsf */}

        <li className={classes['systems-item']}>
          <div className={classes.icon}>
            <IconPressure />
          </div>
          <div className={classes['item-wrapper']}>
            <p className={classes.description}>
              <strong>Струйные компрессоры</strong> (СК) предназначены для
              сжатия низконапорных газов, образующихся в ходе технологических
              процессов на различных предприятиях (например,
              нефтеперерабатывающих, нефтехимических, а также в ходе добычи
              нефти и газа).
            </p>
            <button className={classes['expand-btn']} type="button">
              Подробнее
              <IconChevronDown className={styleIcon} />
            </button>
          </div>
        </li>
        <li className={classes['systems-item']}>
          <div className={classes.icon}>
            <IconAbsorb />
          </div>
          <div className={classes['item-wrapper']}>
            <p className={classes.description}>
              <strong>Струйно-абсорбционные установки</strong> (САУ)
              предназначены для очистки газов дыхания (абгазов) от углеводородов
              и рекуперации паров нефти и нефтепродуктов на наливных эстакадах,
              терминалах и резервуарных парках.
            </p>
            <button className={classes['expand-btn']} type="button">
              Подробнее
              <IconChevronDown className={styleIcon} />
            </button>
          </div>
        </li>
      </ul>
    </main>
  );
};

export default Solutions;
