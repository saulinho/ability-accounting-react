import logoImg from '../../assets/logo.svg';

import { Container } from "./styles";

export function HeaderLogged() {
  return (
    <Container>
      <img src={logoImg} alt="Logo Ability" />
      <span>Bem Vindo, Serconta Contabilidade!</span>
      <button type="submit">Sair</button>
    </Container>
  );
}