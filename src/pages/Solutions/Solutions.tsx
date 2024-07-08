import * as classes from './Solutions.module.scss';
import { useContext, useState } from 'react';
import { LangContext } from '@/context/context';
import ruTextContent from './ru.json';
import enTextContent from './en.json';

import IconChevronDown from '@/assets/icons/chevron_down.svg';

import IconVacuum from '@/assets/icons/icon_vacuum.svg';
import IconPressure from '@/assets/icons/icon_pressure.svg';
import IconAbsorb from '@/assets/icons/icon_absorb.svg';

import IconVHC from '@/assets/icons/icon_vhc.svg';
import IconSTEAM from '@/assets/icons/icon_steam.svg';
import IconJC from '@/assets/icons/icon_jc.svg';
import IconJAU from '@/assets/icons/icon_jau.svg';

import Subpage from './Subpage';

const Solutions = () => {
  const { lang } = useContext(LangContext);
  const content = lang === 'en' ? enTextContent : ruTextContent;

  const { header, systems, units, common } = content;
  const [systemVCU, systemJC, systemJAU] = systems;

  const [stateVCU, setStateVCU] = useState<boolean>(false);
  const [subpageStateVHC, setSubpagesStateVHC] = useState<boolean>(false);
  const [subpageStateSTEAM, setSubpagesStateSTEAM] = useState<boolean>(false);
  const [stateJC, setStateJC] = useState<boolean>(false);
  const [stateJAU, setStateJAU] = useState<boolean>(false);

  // УПРОСТИТЬ КОНКЕТЫ!!!

  const styleChevronVCU = classes.chevron.concat(
    stateVCU ? ` ${classes.open}` : ''
  );
  const styleChevronJC = classes.chevron.concat(
    stateJC ? ` ${classes.open}` : ''
  );
  const styleChevronJAU = classes.chevron.concat(
    stateJAU ? ` ${classes.open}` : ''
  );
  const styleWrapperVCU = classes['vcu-wrapper'].concat(
    stateVCU ? ` ${classes['active-wrapper']}` : ''
  );

  const subpages = [
    {
      icon: <IconVHC />,
      subpage: units[0],
      common,
      parentState: stateVCU,
      subpageState: stateVCU && subpageStateVHC,
      setSubpageState: setSubpagesStateVHC,
    },
    {
      icon: <IconSTEAM />,
      subpage: units[1],
      common,
      parentState: stateVCU,
      subpageState: stateVCU && subpageStateSTEAM,
      setSubpageState: setSubpagesStateSTEAM,
    },
    {
      icon: <IconJC />,
      subpage: units[2],
      common,
      parentState: stateJC,
      subpageState: stateJC,
      setSubpageState: setStateJC,
    },
    {
      icon: <IconJAU />,
      subpage: units[3],
      common,
      parentState: stateJAU,
      subpageState: stateJAU,
      setSubpageState: setStateJAU,
    },
  ];

  return (
    <main className={classes.main}>
      <h1 className={classes['main-header']}>{header}</h1>
      <ul className={classes['systems']}>
        <li className={classes['systems-item']}>
          <div className={classes.icon}>
            <IconVacuum />
          </div>
          <div className={classes['item-wrapper']}>
            <p className={classes.description}>
              <strong>{systemVCU.strong}</strong>
              {systemVCU.text}
            </p>
            <button
              onClick={() => {
                setStateVCU(!stateVCU);
                setSubpagesStateVHC(stateVCU && subpageStateVHC);
                setSubpagesStateSTEAM(stateVCU && subpageStateSTEAM);
              }}
              className={classes['expand-btn']}
              type="button"
            >
              {stateVCU ? common.expand_btn[1] : common.expand_btn[0]}
              <IconChevronDown className={styleChevronVCU} />
            </button>
          </div>
        </li>

        <div className={styleWrapperVCU}>
          <Subpage {...subpages[0]} />
          <Subpage {...subpages[1]} />
        </div>

        <li className={classes['systems-item']}>
          <div className={classes.icon}>
            <IconPressure />
          </div>
          <div className={classes['item-wrapper']}>
            <p className={classes.description}>
              <strong>{systemJC.strong}</strong>
              {systemJC.text}
            </p>
            <button
              onClick={() => setStateJC(!stateJC)}
              className={classes['expand-btn']}
              type="button"
            >
              {stateJC ? common.expand_btn[1] : common.expand_btn[0]}
              <IconChevronDown className={styleChevronJC} />
            </button>
          </div>
        </li>
        {/* <Subpage {...subpages[2]} /> */}

        <li className={classes['systems-item']}>
          <div className={classes.icon}>
            <IconAbsorb />
          </div>
          <div className={classes['item-wrapper']}>
            <p className={classes.description}>
              <strong>{systemJAU.strong}</strong>
              {systemJAU.text}
            </p>
            <button
              onClick={() => setStateJAU(!stateJAU)}
              className={classes['expand-btn']}
              type="button"
            >
              {stateJAU ? common.expand_btn[1] : common.expand_btn[0]}
              <IconChevronDown className={styleChevronJAU} />
            </button>
          </div>
        </li>
        {/* <Subpage {...subpages[3]} /> */}
      </ul>
    </main>
  );
};

export default Solutions;
