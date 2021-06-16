import { useHistory } from 'react-router';
import { Container, Content } from './styles';

import arrow_backImg from '../../assets/arrow_back.svg';


export function ListPC() {

  const history = useHistory();

  function backPage(){
    history.goBack();
  }
 
  return (
    <Container>
      <div className="header-title">
        <button className="back-button">
          <img onClick={backPage} src={arrow_backImg} alt="Voltar" />
        </button>

        <h1>PIS COFINS</h1>
      </div>

      <Content>
        
      </Content>

    </Container>
  );
}