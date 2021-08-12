import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import SignIn from './src/components/auth/signin/SignIn';
import SignUp from './src/components/auth/signup/SignUp';
import ConfirmEmailForgotPassword from './src/components/auth/confirmEmailForgotPassword/ComfirmEmailForgotPassword';
import ResetPassword from './src/components/auth/resetPassword/ResetPassword';

import Home from "./src/components/home/Home";
import Preferences from "./src/components/preferences/Preferences";
import Upload from "./src/components/upload/Upload";

//hooks
import useToken from './src/hooks/useToken';

const App = () => {
  const currentUrl = window.location.pathname;
  const { token, setToken } = useToken();

  if (currentUrl.includes("/signup")) { 
    localStorage.clear();
    return <SignUp/>
  }

  if (currentUrl.includes('/confirmemail')) { 
    localStorage.clear();
    return <ConfirmEmailForgotPassword/>
  }

  if (currentUrl.includes('/reset')) { 
    localStorage.clear();
    return <ResetPassword/>
  }

  if (!token && !currentUrl.includes("/signup")) { 
    return <SignIn setToken={ setToken }/>
  }

  return (
    <div className="wrapper">
      <h1> Google Drive Clone</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/preferences">
            <Preferences></Preferences>
          </Route>
          <Route path="/upload">
            <Upload></Upload>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>

        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/preferences">Preferences</Link>
            </li>
            <li>
              <Link to="/upload">Upload</Link>
            </li>
          </ul>
        </nav>
      </BrowserRouter>
    </div>
  );
};

export default App;
