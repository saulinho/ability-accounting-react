import { Redirect } from 'react-router-dom';
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

  const user = props.user as UserProps;

  async function handleLogout() {
    await api.delete('logout')
      .then(response => {
        handleLogout()
      })
      .catch(err => {
        errorPage()
      })
  }

  return (
    <Container>
      <img src={logoImg} alt="Logo Ability" />
      <span>Bem Vindo, {user.name}</span>
      <button type="submit" onClick={handleLogout}>Sair</button>
    </Container>
  );
}