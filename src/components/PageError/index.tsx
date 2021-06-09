import { useHistory } from 'react-router'
import { Container, Content } from "./styles";
import errorImg from '../../assets/404.svg';

export function PageError() {

  const history = useHistory();

  return (
    <Container>
      <Content>

      <img src={errorImg} alt="Página não Encontrada"/>

      <h1>PÁGINA NÃO ENCONTRADA</h1>

      <button onClick={history.goBack} type="button">Voltar</button>
      </Content>
    </Container>
  );
}