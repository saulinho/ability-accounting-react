import {BrowserRouter, Route} from 'react-router-dom';
import { Accounting } from '../pages/Accounting';

export function LoggedRoutes() {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Accounting} />
    </BrowserRouter>
  );
}