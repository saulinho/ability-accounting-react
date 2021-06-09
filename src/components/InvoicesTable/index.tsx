import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { api } from '../../services/api';

import downloadImg from '../../assets/download.svg';
import pdfImg from '../../assets/pdf.svg';

import { Container, Content } from './styles';

interface CompanyProps {
  name: string
}

interface InvoicesProps {
  id: number,
  number: number,
  serie: string,
  total_value: number,
  customer: {
    name: string,
  }
}

export function InvoicesTable() {

  function useQuery() {
    return new URLSearchParams(useLocation().search)
  }

  const query = useQuery();

  const customer_id = query.get('id');
  
  const [invoices, setInvoices] = useState([]);
  const [company, setCompany] = useState<CompanyProps>({} as CompanyProps);

  const history = useHistory();

  function errorPage() {
    history.push('/404');
  }

  useEffect(() => {
    async function getInvoices() {
      await api
        .get(`invoices?id=${customer_id}`)
        .then(response => {
          setCompany(response.data.company)
          setInvoices(response.data.invoices)
        })
        .catch(err => {
          errorPage()
        })
    }
    getInvoices()
    // eslint-disable-next-line
  }, []);
 
  return (
    <Container>
      <h1>NOTAS FISCAIS DE {company.name ? company.name.toUpperCase(): ''}</h1>

      <Content>
        <table>
          <thead>
            <tr>
              <th>Número</th>
              <th>Série</th>
              <th>Valor Total</th>
              <th>Cliente</th>
              <th><img src={downloadImg} alt="Download" /></th>
            </tr>
          </thead>

          <tbody>
            {invoices.map((invoice: InvoicesProps, i) => (
              <tr key={invoice.id}>
                <td>{invoice.number}</td>
                <td>{invoice.serie}</td>
                <td>{invoice.total_value}</td>
                <td>{invoice.customer.name}</td>
                <td><a href='https://www.google.com.br'><img src={pdfImg} alt="PDF" /></a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Content>

    </Container>
  );
}