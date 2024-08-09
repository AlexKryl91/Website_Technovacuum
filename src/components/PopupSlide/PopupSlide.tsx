import * as classes from './PopupSlide.module.scss';
import { useContext } from 'react';
import { SlideContext } from '@/context/context';
import IconClose from '@/assets/icons/icon_close.svg';
import { TZoomedSlideContext } from '@/types/types';

const PopupSlide = () => {
  const { zoomedSlideProps, setZoomedSlideProps } =
    useContext<TZoomedSlideContext>(SlideContext);

  const closeHandler = () => {
    setZoomedSlideProps(null);
  };

  const html = document.querySelector('html');
  const styleHtml = classes['hide-scrollbar'];

  zoomedSlideProps
    ? html.classList.add(styleHtml)
    : html.classList.remove(styleHtml);

  return (
    <>
      {zoomedSlideProps && (
        <div className={classes.popup}>
          <h4 className={classes.caption}>{zoomedSlideProps.text.caption}</h4>
          <div className={classes.diagram} title={zoomedSlideProps.img_alt}>
            {zoomedSlideProps.img}
          </div>
          <div className={classes['text-content']}>
            <ul className={classes.units}>
              {zoomedSlideProps.text.description.block1.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <ul className={classes.flows}>
              {zoomedSlideProps.text.description.block2.map((item) => (
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
