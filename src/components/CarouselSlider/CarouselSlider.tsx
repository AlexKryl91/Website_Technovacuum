import { ChangeEventHandler, FC, SyntheticEvent, useState } from 'react';
import * as classes from './CarouselSlider.module.scss';
import IconArrow from '@/assets/icons/icon_arrow.svg';
import { ICarousel } from '@/types/types';
import Slide from './Slide';

const CarouselSlider: FC<ICarousel> = ({ slides, btn_label }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const maxIndex = slides.length - 1;

  function incrementHandler() {
    currentIndex === maxIndex
      ? setCurrentIndex(0)
      : setCurrentIndex((index) => index + 1);
  }
  function decrementHandler() {
    currentIndex === 0
      ? setCurrentIndex(maxIndex)
      : setCurrentIndex((index) => index - 1);
  }
  function bulletHandler(e: any) {
    setCurrentIndex(Number(e.target.value));
  }

  const sliderStyle = {
    height: '100%',
    width: `${slides.length * 100}%`,
    left: `${currentIndex * -100}%`,
  };

  const slideWidth = `${100 / slides.length}%`;

  return (
    <div className={classes.carousel}>
      <button
        onClick={decrementHandler}
        className={classes['slider-btn'] + ` ${classes.left}`}
        aria-label={btn_label[0]}
        title={btn_label[0]}
      >
        <IconArrow />
      </button>
      <div className={classes.container}>
        <div className={classes.slider} style={sliderStyle}>
          {slides.map((slide) => (
            <Slide key={slide.id} {...slide} width={slideWidth} />
          ))}
        </div>
      </div>
      <button
        onClick={incrementHandler}
        className={classes['slider-btn']}
        aria-label={btn_label[1]}
        title={btn_label[1]}
      >
        <IconArrow />
      </button>
      <div className={classes['bullets-wrapper']}>
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            value={i}
            className={
              i === currentIndex
                ? `${classes.bullet} ${classes.selected}`
                : classes.bullet
            }
            onClick={bulletHandler}
            type="button"
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CarouselSlider;
