import { useEffect, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';

import nfe_inImg from '../../assets/nfe_in.svg';
import nfe_outImg from '../../assets/nfe_out.svg';
import nfce_outImg from '../../assets/nfce_out.svg';
import arrow_backImg from '../../assets/arrow_back.svg';

import { api } from '../../services/api';

import { Container, Content } from './styles'

interface Companies {
  id: number,
  name: string
}

export function InvoiceType() {

  const query = new URLSearchParams(useLocation().search)
  const id = query.get('id');

  const history = useHistory();

  const [companies, setCompanies] = useState<Companies[]>([]);
  const company = companies.filter(x => x.id === Number(id));

  function backPage() {
    history.goBack();
  }

  useEffect(() => {
    api
      .get('/companies')
      .then(response => {
        setCompanies(response.data.companies)
      })
      .catch(err => console.log(err))
  }, []);

  return (
    <Container>
      <div className="header-title">
        <button className="back-button">
          <img onClick={backPage} src={arrow_backImg} alt="Voltar" />
        </button>

        <h1>{company.map(company => (
          company.name.toUpperCase()
        ))}</h1>
      </div>

      <Content>

        <button type="button">
          <Link to={`/invoicetype?type=invoicein&id=${id}`}>
            <img src={nfe_inImg} alt="NFe Entrada" />
          </Link>
        </button>

        <button type="button">
          <Link to={`/invoicetype?type=invoiceout&id=${id}`}>
            <img src={nfe_outImg} alt="NFe Saída" />
          </Link>
        </button>

        <button type="button">
          <Link to={`/invoicetype?type=taxcuponout&id=${id}`}>
            <img src={nfce_outImg} alt="NFCe Saída" />
          </Link>
        </button>

      </Content>

    </Container>
  );
}