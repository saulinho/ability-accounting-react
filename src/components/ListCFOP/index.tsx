import { useHistory } from 'react-router';

import arrow_backImg from '../../assets/arrow_back.svg';

import { Container, Content } from './styles';


export function ListCFOP() {

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

        <h1>CFOP</h1>
      </div>

      <Content>
        
      </Content>

    </Container>
  );
}