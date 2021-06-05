import logoImg from '../../assets/logo.svg';
import { api } from '../../services/api';

import { Container } from "./styles";

export function HeaderLogged() {

  async function handleLogout(){
    await api.delete('logout')
    .then(response => console.log(response));
  }

  return (
    <Container>
      <img src={logoImg} alt="Logo Ability" />
      <span>Bem Vindo, Serconta Contabilidade!</span>
      <button type="submit" onClick={handleLogout}>Sair</button>
    </Container>
  );
}