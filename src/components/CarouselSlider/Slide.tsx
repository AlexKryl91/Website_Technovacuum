import { FC } from 'react';
import * as classes from './Slide.module.scss';
import { ISlide } from '@/types/types';

const Slide: FC<ISlide> = ({ img, img_alt, text, width, id }) => {
  const slideStyle = {
    height: '100%',
    width,
  };

  return (
    <div className={classes.slide} style={slideStyle}>
      <img src={img} alt={img_alt} className={classes.diagram} />
      <div className={classes['text-content']}>
        <h4 className={classes.caption}>{text.caption}</h4>
        <ol className={classes.units}>
          {text.description.block1.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
        <ol className={classes.flows}>
          {text.description.block2.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Slide;
