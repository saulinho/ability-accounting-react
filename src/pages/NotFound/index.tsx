import { useHistory } from 'react-router'
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import errorImg from '../../assets/404.svg';

import { Container, Content } from "./styles";

export function NotFound() {
  const history = useHistory();

  function goHome() {
    history.push('/')
  }

  return (
    <>
      <Header />

      <Container>
        <Content>
          <img src={errorImg} alt="Página não Encontrada" />

          <h1>PÁGINA NÃO ENCONTRADA</h1>

          <button onClick={goHome} type="button">Voltar</button>
        </Content>
      </Container>

      <Footer />
    </>
  );
}