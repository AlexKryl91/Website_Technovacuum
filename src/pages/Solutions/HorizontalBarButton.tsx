import * as classes from './HorizontalBarButton.module.scss';

const HorizontalBarButton = () => {
  return (
    <div className={classes['break-line']}>
      {/* {spacer && <div className={classes.spacer}></div>} */}
      <div className={classes.bar}>
        <div className={classes['stripe-s']}></div>
        <div className={classes['stripe-m']}></div>
        <div className={classes['stripe-l']}></div>
        <button className={classes['stripe-xl']} type="button"></button>
      </div>
    </div>
  );
};

export default HorizontalBarButton;
