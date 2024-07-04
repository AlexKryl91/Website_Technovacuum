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
        {address[0]}
        <br />
        {address[1]}
        <br />
        {address[2]}
        <br />
        {address[3]}
      </p>
      <IconTelephone />
      <p>
        {telephone[0]}
        <br />
        {telephone[1]}
        <br />
        {telephone[2]}
      </p>
      <IconMail />
      <a href={`mailto: ${email}`} className={classes.email}>
        {email}
      </a>
    </address>
  );
};

export default Address;
