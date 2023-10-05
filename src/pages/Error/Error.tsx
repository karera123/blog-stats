import { ErrorResponse, Link, useRouteError } from "react-router-dom";
import './style.css'

export default function Error() {
    const error = useRouteError() as ErrorResponse;
    console.error({ error });

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>We can't seem to find the page you're looking for.</p>
            {/* <i>{error.status + ' ' + error.statusText}</i> */}
            <p>Here are some helpful links instead:</p>
            <Link to={'/'}>Home</Link>
        </div>
    );
}