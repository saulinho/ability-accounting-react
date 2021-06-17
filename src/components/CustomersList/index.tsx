import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { api } from '../../services/api';

import { Container, Content } from './styles'

interface CompanyProps {
  id: number,
  name: string,
  number: number
}

export function CustomersList() {

  const [companies, setCompanies] = useState<CompanyProps[]>([]);
  const history = useHistory();

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
  }, [])

  function handleCustomerClick(company) {
    history.push(`/customer?id=${company.id}`)
  }

  return (
    <Container>

      <h1>CLIENTES CADASTRADOS</h1>

      <Content>
        <table>
          <thead>
            <tr>
              <th className="cnpj">CNPJ</th>
              <th>Razão Social</th>
            </tr>
          </thead>

          <tbody>
            {companies.map((company) => (
              <tr key={company.id} onClick={() => handleCustomerClick(company)}>
                  <td className="cpnj">
                    {
                      company.number
                        .toString()
                        .replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5")
                    }
                  </td>
                  <td>{company.name}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </Content>

    </Container>
  );
}