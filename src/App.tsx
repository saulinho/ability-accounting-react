import { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./pages/Home";
import { Customers } from "./pages/Customers";
import { Customer } from "./pages/Customer";
import { InvoiceType } from "./pages/InvoiceType";
import { List } from "./pages/List";
import { NotFound } from "./pages/NotFound";

import { api } from "./services/api";

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

  const [loginStatus, setLoginStatus] = useState<LoginStatusProps>(
    { loggedInStatus: 'NOT_LOGGED_IN', user: {} }
  );

  useEffect(() => {
    async function isLogin() {
      await api
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
        .catch(err => console.log(err));
    }
    isLogin();
    // eslint-disable-next-line
  },[])

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
      <GlobalStyles />
      <BrowserRouter>
        <Switch>

          <Route exact path='/'>
            <Home
              loggedInStatus={loginStatus.loggedInStatus}
              handleLogout={handleLogout}
              handleLogin={handleLogin}
            />
          </Route>

          <Route exact path='/customers' >
            <Customers
              loggedInStatus={loginStatus.loggedInStatus}
              handleLogout={handleLogout}
              user={loginStatus.user}
            />
          </Route>

          <Route exact path='/customer'>
            <Customer
              handleLogout={handleLogout}
              user={loginStatus.user}
            />
          </Route>

          <Route exact path='/invoicetype'>
            <InvoiceType
              handleLogout={handleLogout}
              user={loginStatus.user}
            />
          </Route>

          <Route exact path='/nf'>
            <List
              handleLogout={handleLogout}
              user={loginStatus.user}
            />
          </Route>

          <Route exact path='/cfop'>
            <List
              handleLogout={handleLogout}
              user={loginStatus.user}
            />
          </Route>

          <Route exact path='/piscofins'>
            <List
              handleLogout={handleLogout}
              user={loginStatus.user}
            />
          </Route>

          <Route component={NotFound} />

        </Switch>
      </BrowserRouter>
    </>

  );
}