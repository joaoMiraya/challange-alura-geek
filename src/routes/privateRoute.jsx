import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

export function PrivateRoute({ children }) {
    PrivateRoute.propTypes = {
        children: PropTypes.object.isRequired,
    };
    const user = localStorage.getItem('isLogged')

    return user ? children : <Navigate to={"/"} />
}
