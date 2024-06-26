import * as classes from './ClientsSlider.module.scss';

import LogoAnpz from '@/assets/img/company_MONO_anpz.jpg';
import LogoEssar from '@/assets/img/company_MONO_essar.jpg';
import LogoGPN from '@/assets/img/company_MONO_gazpromneft.jpg';
import LogoHyundai from '@/assets/img/company_MONO_hyundai.jpg';
import LogoKMG from '@/assets/img/company_MONO_kazmunaigaz.jpg';
import LogoLukoil from '@/assets/img/company_MONO_lukoil.jpg';
import LogoNHS from '@/assets/img/company_MONO_neftehimservis.jpg';
import LogoOrlen from '@/assets/img/company_MONO_orlen.jpg';
import LogoRosneft from '@/assets/img/company_MONO_rosneft.jpg';
import LogoSchAz from '@/assets/img/company_MONO_schekinoazot.jpg';
import LogoSibur from '@/assets/img/company_MONO_sibur.jpg';
import LogoSlavNeft from '@/assets/img/company_MONO_slavneft.jpg';
import LogoSlEco from '@/assets/img/company_MONO_slavyansk-eco.jpg';
import LogoSOCAR from '@/assets/img/company_MONO_socar.jpg';
import LogoTAIF from '@/assets/img/company_MONO_taif-nk.jpg';
import LogoTANECO from '@/assets/img/company_MONO_taneco.jpg';
import LogoTatNeft from '@/assets/img/company_MONO_tatneft.jpg';
import LogoTurk from '@/assets/img/company_MONO_turkmenistan.jpg';
import LogoTransNeft from '@/assets/img/company_MONO_transneft.jpg';
import LogoNNK from '@/assets/img/company_MONO_nnk.jpg';

const ClientsSlider = () => {
  const clients = [
    {
      id: 1,
      name: 'Афипский НПЗ',
      img: LogoAnpz,
      href: 'https://www.afipnpz.ru',
    },
    {
      id: 2,
      name: 'Essar',
      img: LogoEssar,
      href: 'https://www.essar.com',
    },
    {
      id: 3,
      name: 'Газпромнефть',
      img: LogoGPN,
      href: 'https://www.gazprom-neft.ru',
    },
    {
      id: 4,
      name: 'Hyundai Engineering',
      img: LogoHyundai,
      href: 'https://en.hdec.kr/en/main.aspx',
    },
    {
      id: 5,
      name: 'КазМунайГаз',
      img: LogoKMG,
      href: 'https://www.kmg.kz',
    },
    {
      id: 6,
      name: 'Лукойл',
      img: LogoLukoil,
      href: 'https://lukoil.ru',
    },
    {
      id: 7,
      name: 'НефтеХимСервис',
      img: LogoNHS,
      href: 'https://nhs-kuzbass.ru',
    },
    {
      id: 8,
      name: 'ННК',
      img: LogoNNK,
      href: 'https://ru.wikipedia.org/wiki/%D0%A5%D0%B0%D0%B1%D0%B0%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9_%D0%BD%D0%B5%D1%84%D1%82%D0%B5%D0%BF%D0%B5%D1%80%D0%B5%D1%80%D0%B0%D0%B1%D0%B0%D1%82%D1%8B%D0%B2%D0%B0%D1%8E%D1%89%D0%B8%D0%B9_%D0%B7%D0%B0%D0%B2%D0%BE%D0%B4',
    },
    {
      id: 9,
      name: 'Orlen Lietuva',
      img: LogoOrlen,
      href: 'https://www.orlenlietuva.lt',
    },
    {
      id: 10,
      name: 'Роснефть',
      img: LogoRosneft,
      href: 'https://www.rosneft.ru',
    },
    {
      id: 11,
      name: 'Щекиноазот',
      img: LogoSchAz,
      href: 'https://n-azot.ru',
    },
    {
      id: 12,
      name: 'Сибур',
      img: LogoSibur,
      href: 'https://www.sibur.ru/ru',
    },
    {
      id: 13,
      name: 'Славнефть',
      img: LogoSlavNeft,
      href: 'https://www.slavneft.ru',
    },
    {
      id: 14,
      name: 'Славянск ЭКО',
      img: LogoSlEco,
      href: 'https://slaveco.ru',
    },
    {
      id: 15,
      name: 'SOCAR',
      img: LogoSOCAR,
      href: 'https://socar.com.ru',
    },
    {
      id: 16,
      name: 'ТАИФ-НК',
      img: LogoTAIF,
      href: 'https://taifnk.ru',
    },
    {
      id: 17,
      name: 'TANECO',
      img: LogoTANECO,
      href: 'https://www.taneco.ru',
    },
    {
      id: 18,
      name: 'TATNEFT',
      img: LogoTatNeft,
      href: 'https://www.tatneft.ru',
    },
    {
      id: 19,
      name: 'TNGIZT',
      img: LogoTurk,
      href: 'https://tngizt.gov.tm',
    },
    {
      id: 20,
      name: 'Транснефть',
      img: LogoTransNeft,
      href: 'https://www.transneft.ru',
    },
  ];

  return (
    <div className={classes['cards-slider']}>
      {clients.map((client) => (
        <a key={client.id} href={client.href} target="_blank">
          <div className={classes.card}>
            <img src={client.img} alt={`Логотип компании ${client.name}`} />
          </div>
        </a>
      ))}
    </div>
  );
};

export default ClientsSlider;
