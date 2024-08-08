import * as classes from './ErrorPage.module.scss';
import BackgroundSVG from '@/assets/img/service_page_bg.svg';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  // Solve the problem with "any"
  const error: any = useRouteError();

  return (
    <>
      {error.status == '404' ? (
        <div className={classes.container}>
          <BackgroundSVG className={classes.background} />
          <p className={classes['code-number']}>404</p>
          <h1 className={classes['error-msg']}>Oops! Page not found</h1>
          <p className={classes.text}>
            Sorry, the page you're looking for doesn't exist.
          </p>
        </div>
      ) : (
        error.message
      )}
    </>
  );
};

export default ErrorPage;
