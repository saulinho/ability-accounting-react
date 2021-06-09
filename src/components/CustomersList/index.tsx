import { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

import { api } from '../../services/api';
import { Container, Content} from './styles'

interface CompanyProps {
  id: number,
  name: string
}

export function CustomersList() {

  function errorPage() {
    <Redirect to='/404' />
  }

  const [companies, setCompanies] = useState([]);

  async function getCompanies() {
    await api
      .get('companies')
      .then(response => {
        setCompanies(response.data.companies);
      })
      .catch(err => {
        errorPage()
      });
  }

  useEffect(() => {
    getCompanies()
    // eslint-disable-next-line
  },[])

  return (
    <Container>
      <h1>CLIENTES CADASTRADOS</h1>

      <Content>
        <ul>
          {companies.map((company: CompanyProps, i) => (
              <li key={company.id}>
                <a href={`/customer?id=${company.id}`}>
                  {company.name}
                </a>
              </li>
          ))}
        </ul>

      </Content>

    </Container>
  );
}