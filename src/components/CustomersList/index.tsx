import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { api } from '../../services/api';
import { Container, Content} from './styles'

interface CompanyProps {
  id: number,
  name: string
}

export function CustomersList() {
  
  const history = useHistory();

  const [companies, setCompanies] = useState([]);

  async function getCompanies() {
    await api
      .get('companies')
      .then(response => {
        setCompanies(response.data.companies);
      })
      .catch(err => {
        history.push('/404');
      });
  }

  useEffect(() => {
    getCompanies()
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