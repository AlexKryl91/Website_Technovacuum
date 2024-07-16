import { FC, useContext } from 'react';
import { SlideContext } from '@/context/context';
import * as classes from './Slide.module.scss';
import { ISlide } from '@/types/types';
import IconZoom from '@/assets/icons/icon_zoom.svg';

const Slide: FC<ISlide> = (props) => {
  const { setZoomedSlideProps } = useContext(SlideContext);

  const contextHandler = () => setZoomedSlideProps(props);

  const { img, img_alt, text, width } = props;

  return (
    <div className={classes.slide} style={{ width }}>
      <h4 className={classes.caption}>{text.caption}</h4>
      <div className={classes.wrapper}>
        <div className={classes.diagram} title={img_alt}>
          {img}
          <button
            onClick={contextHandler}
            className={classes['zoom-btn']}
            type="button"
            aria-label="Click to enlarge"
          >
            <IconZoom />
          </button>
        </div>
        <div className={classes['text-content']}>
          <ul className={classes.units}>
            {text.description.block1.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <ul className={classes.flows}>
            {text.description.block2.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Slide;
