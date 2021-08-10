import { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";
import React,{useMemo,useState} from "react";
import * as firebase from '../../firebase/firebase';

const AuthenticatedRoute = ({ component: Component, ...rest }) => {
  const [authUser, setAuthUser] = useState(null);
  const [userType, setUserType] = useState(null);
  useMemo(() => {
    firebase.auth.onAuthStateChanged(user => {
      if (user) {
        setAuthUser(true);
      } else {
        setAuthUser(false);
      }
    });
  }, [authUser]);

  const userId = localStorage.getItem("userID");
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        userId ? <Component {...routeProps} /> : <Redirect to="/" />
      }
    />
  );
};

AuthenticatedRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default AuthenticatedRoute;
