import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import { Container, Content} from './styles'

export function CustomersList() {

  const { user } = useContext(AuthContext);

  return (
    <Container>
      <h1>CLIENTES CADASTRADOS</h1>

      <Content>
        <ul>
          <li>{user?.name}</li>
          <li>Teste</li>
          <li>Teste</li>
          <li>Teste</li>
          <li>Teste</li>
          <li>Teste</li>
          <li>Teste</li>
          <li>Teste</li>
          <li>Teste</li>
          <li>Teste</li>
          <li>Teste</li>
          <li>Teste</li>
          <li>Teste</li>
          <li>Teste</li>
        </ul>

      </Content>

    </Container>
  );
}