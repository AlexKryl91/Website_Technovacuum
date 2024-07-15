import * as classes from './PopupSlide.module.scss';
import { FC, useContext } from 'react';
import { SlideContext } from '@/context/context';
import IconClose from '@/assets/icons/icon_close.svg';

// type TPopupSlide = null | '';

const PopupSlide = () => {
  const { currentSlideProps, setCurrentSlideProps } = useContext(SlideContext);

  const closeHandler = () => {
    setCurrentSlideProps(false);
  };

  return (
    <>
      {currentSlideProps && (
        <dialog className={classes.popup} open={true} role="dialog">
          HELLO! I'M MODAL WINDOW!!!
          <button onClick={closeHandler} type="button">
            <IconClose />
          </button>
        </dialog>
      )}
    </>
  );
};

export default PopupSlide;
