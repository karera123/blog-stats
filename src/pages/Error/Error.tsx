import { ErrorResponse, Link, useRouteError } from "react-router-dom";
import './style.css'

export default function Error() {
  const error = useRouteError() as ErrorResponse;
  console.error({ error });

  return (
    <div id="error-page" className='text-center text-gray-600'>
      <h1 className='text-5xl my-12'>Oops!</h1>
      <p className='text-lg my-5'>We can't seem to find the page you're looking for.</p>
      {/* <i>{error.status + ' ' + error.statusText}</i> */}
      <p className='text-lg my-5'>Here are some helpful links instead:</p>
      <Link to={'/'} className='hover:underline text-blue-800 font-semibold'>Home</Link>
    </div>
  );
}