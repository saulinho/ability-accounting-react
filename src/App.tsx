import { useEffect, useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { api } from "./services/api";

import { Home } from "./pages/Home";
import { Accounting } from "./pages/Accounting";
import { Customer } from "./pages/Customer";
import { NotFound } from "./pages/NotFound";

import { GlobalStyles } from "./styles/global";

interface LoginStatusProps {
  loggedInStatus: string,
  user: {} | {
    name: string,
    email: string,
    accounting_id: number
  }
}

export default function App() {

  function errorPage() {
    <Redirect to='/404' />
  }
  
  const [loginStatus, setLoginStatus] = useState<LoginStatusProps>({loggedInStatus: 'NOT_LOGGED_IN', user: {}});
  
  useEffect(() => {
    
    function isLogin() {
      api
        .get('logged_in')
        .then(response => {
          if (response.data.logged_in && loginStatus.loggedInStatus === 'NOT_LOGGED_IN') {
            setLoginStatus({
              loggedInStatus: 'LOGGED_IN',
              user: response.data.user
            });
          } else if (!response.data.logged_in && loginStatus.loggedInStatus === 'LOGGED_IN') {
            setLoginStatus({
              loggedInStatus: 'NOT_LOGGED_IN',
              user: {}
            });
          } else {
            setLoginStatus({
              loggedInStatus: 'NOT_LOGGED_IN',
              user: {}
            });
          }
        })
        .catch(err => {
          errorPage();
        });
    }

    isLogin()
    // eslint-disable-next-line
  }, [])

  function handleLogout() {
    setLoginStatus({
      loggedInStatus: 'NOT_LOGGED_IN',
      user: {}
    });
  }

  function handleLogin(data: LoginStatusProps) {
    setLoginStatus({
      loggedInStatus: 'LOGGED_IN',
      user: data.user
    })
  }

  return (
    <>
      <BrowserRouter>
        <Switch>

          <Route
            exact
            path='/'
            render={props => (
              <Home
                {...props}
                loggedInStatus={loginStatus.loggedInStatus}
                handleLogout={handleLogout}
                handleLogin={handleLogin}
              />
            )}
          />

          <Route
            exact
            path='/accounting'
            render={props => (
              <Accounting
                {...props}
                loggedInStatus={loginStatus.loggedInStatus}
                handleLogout={handleLogout}
                user={loginStatus.user}
              />
            )}
          />

          <Route
            exact
            path='/customer'
            render={props => (
              <Customer
                {...props}
                handleLogout={handleLogout}
                user={loginStatus.user}
              />
            )}
          />

          <Route
            exact
            path='/404'
            component={NotFound}
          />

        </Switch>
      </BrowserRouter>

      <GlobalStyles />
    </>

  );
}