import { Redirect, useHistory } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import { api } from '../../services/api';

import { Container } from "./styles";

type UserProps = {
  name: string,
  email: string,
  accounting_id: number
}

interface HeaderLoggedProps {
  user: {} | UserProps,
  handleLogout: () => void
}

export function HeaderLogged(props: HeaderLoggedProps) {

  function errorPage() {
    <Redirect to='/404' />
  }

  const history = useHistory();

  function goHome(){
    history.push('/');
  }
  

  const user = props.user as UserProps;
  
  async function handleLogoutClick() {
    await api.delete('logout')
      .then(response => {
        props.handleLogout()
        goHome()
      })
      .catch(err => {
        errorPage()
      })
  }

  return (
    <Container>
      <img src={logoImg} alt="Logo Ability" />
      <span>Bem Vindo, {user.name}</span>
      <button type="submit" onClick={() => handleLogoutClick()}>Sair</button>
    </Container>
  );
}