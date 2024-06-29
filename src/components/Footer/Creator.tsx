import * as classes from './Creator.module.scss';
import IconGithub from '@/assets/icons/icon_github.svg';
import IconLinkedIn from '@/assets/icons/icon_linkedin.svg';
import IconTelegram from '@/assets/icons/icon_telegram.svg';
import IconPersonal from '@/assets/icons/icon_personal_website.svg';
import { FC } from 'react';
import { TCreator } from '@/types/types';

const Creator: FC<TCreator> = ({ creator }) => {
  const iconsWithLinks = [
    { id: 1, href: 'https://github.com/AlexKryl91', icon: <IconGithub /> },
    { id: 2, href: 'https://www.linkedin.com', icon: <IconLinkedIn /> },
    { id: 3, href: 'https://t.me/it_alex_kr', icon: <IconTelegram /> },
    { id: 4, href: 'https://yandex.ru', icon: <IconPersonal /> },
  ];

  return (
    <div className={classes.author}>
      <div className={classes['h-line']}></div>
      <p>{creator}</p>
      <div className={classes['icon-links']}>
        {iconsWithLinks.map((item) => (
          <a key={item.id} href={item.href} target="_blank">
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Creator;
