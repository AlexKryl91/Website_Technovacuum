import { FC } from 'react';
import { Link } from 'react-router-dom';
import * as classes from './Subpage.module.scss';
import IconArrow from '@/assets/icons/icon_arrow.svg';
import CarouselSlider from '@/components/CarouselSlider/CarouselSlider';
import HorizontalBarButton from '@/components/UI/HorizontalBarButton';
import { ISubpage } from '@/types/types';

const Subpage: FC<ISubpage> = ({
  icon,
  subpage,
  common,
  parentState,
  subpageState,
  setSubpageState,
}) => {
  const styleSubpage = classes.subpage.concat(
    subpageState ? ` ${classes.active}` : ''
  );

  return (
    <>
      <section className={styleSubpage}>
        <div className={classes['subpage-header-wrapper']}>
          {icon}
          <h3 className={classes['subpage-header']}>{subpage.title}</h3>
        </div>
        <div className={classes['subpage-body']}>
          <div className={classes['text']}>
            <p>
              <strong>{subpage.description.strong}</strong>
              {subpage.description.text}
            </p>
            {subpage.description.end_text && (
              <p>
                {subpage.description.end_text}
                <strong>{subpage.description.end_strong}</strong>
              </p>
            )}
          </div>
          <CarouselSlider
            slides={subpage.slides}
            btn_label={common.slider_btn}
          />
          {subpage.operation.map((paragraph) => (
            <div key={paragraph.title}>
              <h4>{paragraph.title}</h4>
              <div className={classes['text']}>
                {paragraph.blocks.map((block) => (
                  <p key={block}>{block}</p>
                ))}
              </div>
            </div>
          ))}
          {subpage.features.map((feature) => (
            <div key={feature.title}>
              <h4>{feature.title}</h4>
              <ul className={classes.features}>
                {feature.list.map((point) => (
                  <li key={point.id}>
                    <IconArrow />
                    {point.item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className={classes['h-line']}></div>
          <p className={classes.summary}>
            {common.summary[0]}
            <Link to={'/contacts'}>{common.summary[1]}</Link>
            {common.summary[2]}
            <Link to={'/solutions'}>{common.summary[3]}</Link>
          </p>
        </div>
      </section>
      <HorizontalBarButton
        value={subpageState ? subpage.state_btn[1] : subpage.state_btn[0]}
        visible={parentState}
        active={subpageState}
        setActive={setSubpageState}
      />
    </>
  );
};

export default Subpage;
