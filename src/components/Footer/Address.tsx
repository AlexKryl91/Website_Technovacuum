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
        {address.line_1}
        <br />
        {address.line_2}
        <br />
        {address.line_3}
        <br />
        {address.line_4}
      </p>
      <IconTelephone />
      <p>
        {telephone.line_1}
        <br />
        {telephone.line_2}
        <br />
        {telephone.line_3}
      </p>
      <IconMail />
      <a href={`mailto: ${email}`} className={classes.email}>
        {email}
      </a>
    </address>
  );
};

export default Address;
