import * as classes from './Adress.module.scss';
import IconLocation from '@/assets/icons/icon_location.svg';
import IconTelephone from '@/assets/icons/icon_telephone.svg';
import IconMail from '@/assets/icons/icon_mail.svg';
import { FC } from 'react';
import { IAddress } from '@/types/types';

const Address: FC<IAddress> = ({ organization, address, telephone, email }) => {
  return (
    <address className={classes.address}>
      <div className={classes.copyright}>©</div>
      <p>{organization}</p>
      <IconLocation />
      <p>
        {address.map((item) => (
          <span key={item}>
            {item}
            <br />
          </span>
        ))}
      </p>
      <IconTelephone />
      <p>
        {telephone.map((item) => (
          <span key={item}>
            {item}
            <br />
          </span>
        ))}
      </p>
      <IconMail />
      <a href={`mailto: ${email}`} className={classes.email}>
        {email}
      </a>
    </address>
  );
};

export default Address;
