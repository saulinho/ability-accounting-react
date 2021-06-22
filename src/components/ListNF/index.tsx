import { FormEvent, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { InvoiceModal } from '../InvoiceModal';
import { api } from '../../services/api';
import { InvoiceProductsProps, InvoicesProps } from '../../@types';

import arrow_backImg from '../../assets/arrow_back.svg';
import viewImg from '../../assets/view.svg';

import { Container, Content } from './styles';

export function ListNF() {

  function useQuery() {
    return new URLSearchParams(useLocation().search)
  }

  const query = useQuery();
  const customer_id = query.get('id');
  const type = query.get('type');

  const [invoices, setInvoices] = useState<InvoicesProps[]>([]);
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
  const [invoiceModal, setInvoiceModal] = useState<InvoicesProps>({} as InvoicesProps);
  const [productsModal, setProductsModal] = useState<InvoiceProductsProps[]>([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const history = useHistory();

  function backPage() {
    history.goBack();
  }

  function handleOpenNewTransactionModal(invoice: InvoicesProps, products: InvoiceProductsProps[]) {
    setIsNewTransactionModalOpen(true);
    setInvoiceModal(invoice);
    setProductsModal(products);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  function handleSubmitDateInterval(event: FormEvent) {
    event.preventDefault();
    if (!startDate || !endDate || startDateTimestamp > endDateTimestamp) {
      return alert("Data Incorreta!")
    }
    getInvoices()
  }

  const startDateTimestamp = new Date(startDate).getTime();
  const endDateTimestamp = new Date(endDate).getTime();
  const endDateToDate = new Date(endDateTimestamp + 86400000);
  const endDateDay = endDateToDate.getUTCDate().toString().padStart(2, '0');
  const endDateMonth = (endDateToDate.getUTCMonth() + 1).toString().padStart(2, '0');
  const endDateYear = endDateToDate.getUTCFullYear().toString();
  const endDateFormated = (endDateYear + '-' + endDateMonth + '-' + endDateDay);

  async function getInvoices() {
    await api
      .get('invoices', {
        params: {
          type: type,
          id: customer_id,
          start_date: startDate,
          end_date: endDateFormated
        }
      })
      .then(response => {
        setInvoices(response.data.invoices)
        setProductsModal(response.data.products)
      })
      .catch(err => console.log(err));
  }

  return (
    <Container>
      <div className="header-title">
        <button className="back-button">
          <img onClick={backPage} src={arrow_backImg} alt="Voltar" />
        </button>

        <h1>NOTAS FISCAIS</h1>
      </div>

      <Content>

        <form onSubmit={handleSubmitDateInterval}>
          <h3>Insira um intervalo de datas: </h3>
          <div>
            <input
              type="date"
              name="start_date"
              id="start_date"
              value={startDate}
              onChange={event => setStartDate(event.target.value)}
            />

            <span>-</span>
            
            <input
              type="date"
              name="end_date"
              id="end_date"
              value={endDate}
              onChange={event => setEndDate(event.target.value)}
            />

            <button type="submit">Listar</button>
          </div>
        </form>

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
                <td onClick={() => handleOpenNewTransactionModal(invoice, productsModal)}>
                  <img src={viewImg} alt="Visualizar NFe" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Content>
      <InvoiceModal dataInvoice={invoiceModal} dataProducts={productsModal} isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal} />

    </Container>
  );
}