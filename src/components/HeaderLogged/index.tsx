import { useHistory } from 'react-router-dom';
import { api } from '../../services/api';
import { HeaderLoggedProps, UserProps } from '../../@types';

import logoImg from '../../assets/logo.svg';

import { Container } from "./styles";

export function HeaderLogged(props: HeaderLoggedProps) {

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
      .catch(err => console.log(err))
  }

  return (
    <Container>
      <img src={logoImg} alt="Logo Ability" />

      <span>Bem Vindo, {user.name}</span>
      
      <button type="submit" onClick={handleLogoutClick}>Sair</button>
    </Container>
  );
}