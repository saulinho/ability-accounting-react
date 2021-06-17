import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Container, Content } from './styles';
import { InvoiceModal } from '../InvoiceModal';

import arrow_backImg from '../../assets/arrow_back.svg';
import viewImg from '../../assets/view.svg';

import { api } from '../../services/api';

interface CompanyProps {
  name: string
}

interface InvoicesProps {
  id: number,
  access_key: string,
  cofins_base: number,
  cofins_value: number,
  customer: {
    name: string,
  }
  date_departure: Date,
  date_issue: Date,
  discount_value: number,
  expenses_value: number,
  icms_base: number,
  icms_value: number,
  invoice_value: number,
  ipi_base: number,
  ipi_value: number,
  model: string,
  number: number,
  pis_base: number,
  pis_value: number,
  safe_value: number,
  serie: string,
  shipping_value: number,
  sticms_base: number,
  sticms_value: number,
  total_product: number,
  type_movement: string,
  type_record: string
}

export function ListNF() {

  function useQuery() {
    return new URLSearchParams(useLocation().search)
  }

  const query = useQuery();

  const customer_id = query.get('id');
  const type = query.get('type');

  const [invoices, setInvoices] = useState<InvoicesProps[]>([]);
  const [company, setCompany] = useState<CompanyProps>({ name: '' });
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
  const [invoiceModal, setInvoiceModal] = useState<InvoicesProps>({} as InvoicesProps);

  const history = useHistory();

  function backPage() {
    history.goBack();
  }

  function handleOpenNewTransactionModal(data: InvoicesProps) {
    setIsNewTransactionModalOpen(true);
    setInvoiceModal(data)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  useEffect(() => {
    async function getInvoices() {
      await api
        .get(`invoices?type=${type}&id=${customer_id}`)
        .then(response => {
          setCompany(response.data.company)
          setInvoices(response.data.invoices)
        })
        .catch(err => console.log(err));
    }
    getInvoices()
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <div className="header-title">
        <button className="back-button">
          <img onClick={backPage} src={arrow_backImg} alt="Voltar" />
        </button>

        <h1>NOTAS FISCAIS {company.name.toUpperCase()}</h1>
      </div>

      <Content>
        <table>
          <thead>
            <tr>
              <th>Número</th>
              <th>Série</th>
              <th>Modelo</th>
              <th>Emissão</th>
              <th>Saída</th>
              <th>Valor Total</th>
              <th>Visualizar</th>
            </tr>
          </thead>

          <tbody>
            {invoices.map((invoice) => (
              <tr key={invoice.id}>
                <td>{invoice.number}</td>
                <td>{invoice.serie}</td>
                <td>{invoice.model}</td>
                <td>
                  {invoice.date_issue
                    ? new Intl.DateTimeFormat('pt-BR')
                      .format(new Date(invoice.date_issue))
                    : ''
                  }
                </td>
                <td>
                  {invoice.date_departure
                    ? new Intl.DateTimeFormat('pt-BR')
                      .format(new Date(invoice.date_departure))
                    : ''
                  }
                </td>
                <td>
                  {
                    new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })
                      .format(invoice.invoice_value)
                  }
                </td>
                <td onClick={() => handleOpenNewTransactionModal(invoice)}>
                  <img src={viewImg} alt="Visualizar NFe" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Content>
      <InvoiceModal dataInvoice={invoiceModal} isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal} />

    </Container>
  );
}