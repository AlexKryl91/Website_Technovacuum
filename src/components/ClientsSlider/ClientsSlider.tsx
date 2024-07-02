import * as classes from './ClientsSlider.module.scss';
import { FC } from 'react';
import { clientsEn, clientsRu } from './Companies';

type TClientsLang = {
  lang: 'ru' | 'en';
};

const ClientsSlider: FC<TClientsLang> = ({ lang }) => {
  const clients = lang === 'en' ? clientsEn : clientsRu;
  return (
    <div className={classes['cards-slider']}>
      {clients.map((client) => (
        <a key={client.id} href={client.href} target="_blank">
          <div className={classes.card} title={client.name}>
            <h4 className={classes['visually-hidden']}>{client.name}</h4>
            <client.icon />
          </div>
        </a>
      ))}
    </div>
  );
};

export default ClientsSlider;
