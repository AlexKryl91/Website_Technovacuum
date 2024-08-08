import * as classes from './PopupSlide.module.scss';
import { useContext } from 'react';
import { SlideContext } from '@/context/context';
import IconClose from '@/assets/icons/icon_close.svg';
import { TZoomedSlide } from '@/types/types';

const PopupSlide = () => {
  const { zoomedSlideProps, setZoomedSlideProps } = useContext(SlideContext);

  const closeHandler = () => {
    setZoomedSlideProps(null);
  };

  const props: TZoomedSlide = zoomedSlideProps;

  return (
    <>
      {props && (
        <div className={classes.popup}>
          <h4 className={classes.caption}>{props.text.caption}</h4>
          <div className={classes.diagram} title={props.img_alt}>
            {props.img}
          </div>
          <div className={classes['text-content']}>
            <ul className={classes.units}>
              {props.text.description.block1.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <ul className={classes.flows}>
              {props.text.description.block2.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <button
            className={classes['close-btn']}
            onClick={closeHandler}
            type="button"
          >
            <IconClose />
          </button>
        </div>
      )}
    </>
  );
};

export default PopupSlide;
