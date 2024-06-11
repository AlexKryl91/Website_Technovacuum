import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  // решить проблему с any
  const error: any = useRouteError();

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p style={{ color: 'red', fontSize: '30px' }}>
        {error.status == '404' ? '404 Page Not Found' : error.message}
      </p>
    </div>
  );
};

export default ErrorPage;
