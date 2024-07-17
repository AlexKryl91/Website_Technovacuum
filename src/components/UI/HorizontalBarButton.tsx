import { FC } from 'react';
import * as classes from './HorizontalBarButton.module.scss';
import { IHBarButton } from '@/types/types';
import IconChevronDown from '@/assets/icons/chevron_down.svg';

const HorizontalBarButton: FC<IHBarButton> = ({
  value,
  visible,
  active,
  setActive,
}) => {
  const mainStyle = classes['break-line'].concat(
    visible ? ` ${classes.intro}` : ` ${classes.hidden}`
  );

  const btnStyle = classes.expand.concat(
    active ? ` ${classes['active-btn']}` : ''
  );
  const styleChevron = classes.chevron.concat(active ? ` ${classes.open}` : '');

  return (
    <div className={mainStyle}>
      <button onClick={() => setActive((state) => !state)} className={btnStyle}>
        <div className={classes.tag}>{value}</div>
        <IconChevronDown className={styleChevron} />
      </button>
      <div className={classes.spacer}></div>
      <div className={classes.bar}>
        <div className={classes['stripe-s']}></div>
        <div className={classes['stripe-m']}></div>
        <div className={classes['stripe-l']}></div>
        <div className={classes['stripe-xl']}></div>
      </div>
    </div>
  );
};

export default HorizontalBarButton;
