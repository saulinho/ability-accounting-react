import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { api } from '../../services/api';

import { Container, Content} from './styles'

interface CompanyProps {
  id: number,
  name: string,
  number: number
}

export function CustomersList() {

  const [companies, setCompanies] = useState<CompanyProps[]>([]);

  useEffect(() => {
    async function getCompanies() {
      await api
        .get('companies')
        .then(response => {
          setCompanies(response.data.companies);
        })
        .catch(err => console.log(err));
    }

    getCompanies()
  },[])

  return (
    <Container>

      <h1>CLIENTES CADASTRADOS</h1>

      <Content>
        <ul>
          {companies.map((company) => (
              <li key={company.id}>
                <Link to={`/customer?id=${company.id}`}>
                  <span>
                    {
                      company.number
                      .toString()
                      .replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5")
                    }
                    </span>
                  <span>{company.name}</span>
                </Link>
              </li>
          ))}
        </ul>

      </Content>

    </Container>
  );
}