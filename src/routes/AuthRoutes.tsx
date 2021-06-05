import {BrowserRouter, Route} from 'react-router-dom';
import { Home } from '../pages/Home';

export function AuthRoutes() {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Home} />
    </BrowserRouter>
  );
}