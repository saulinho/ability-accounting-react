import sum_nfeImg from '../../assets/sum_nfe.svg';
import sum_cfopImg from '../../assets/sum_cfop.svg';
import sum_pis_cofinsImg from '../../assets/sum_pis_cofins.svg';
import arrow_backImg from '../../assets/arrow_back.svg';

import { Container, Content } from './styles'
import { Link, useHistory, useLocation } from 'react-router-dom';

export function TaxCuponOut() {

  const history = useHistory();

  function backPage() {
    history.goBack();
  }

  const query = new URLSearchParams(useLocation().search);
  const id = query.get('id');

  return (
    <Container>
      <div className="header-title">
        <button className="back-button">
          <img onClick={backPage} src={arrow_backImg} alt="Voltar" />
        </button>

        <h1>CUPOM FISCAL DE SAÍDA</h1>
      </div>

      <Content>

        <button type="button">
          <Link to={`/nf?type=taxcuponout&id=${id}`}>
            <img src={sum_nfeImg} alt="Resumo NFe" />
          </Link>

        </button>

        <button type="button">
          <Link to={`/cfop?type=taxcuponout&id=${id}`}>
            <img src={sum_cfopImg} alt="Resumo CFOP" />
          </Link>
        </button>

        <button type="button">
          <Link to={`/piscofins?type=taxcuponout&id=${id}`}>
            <img src={sum_pis_cofinsImg} alt="Resumo PIS COFINS" />
          </Link>
        </button>

      </Content>

    </Container>
  );
}