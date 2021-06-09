import { useEffect } from 'react';
import { useHistory } from 'react-router';
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

  const history = useHistory();

  const user = props.user as UserProps;

  async function handleLogout() {
    await api.delete('logout')
      .then(response => {
        handleLogout()
      })
      .catch(err => {
        history.push('/404')
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