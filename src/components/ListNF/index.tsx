import { FormEvent, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { InvoiceModal } from '../InvoiceModal';
import { api } from '../../services/api';
import { InvoiceProductsProps, InvoicesProps } from '../../@types';

import arrow_backImg from '../../assets/arrow_back.svg';
import viewImg from '../../assets/view.svg';

import { Container, Content } from './styles';
import Loader from 'react-loader-spinner';

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

  const [loading, setLoading] = useState(false);


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
    setInvoices([]);
    setLoading(true);
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
        setLoading(false);
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

        <h1>NOTAS FISCAIS {type === "invoicein" ? "ENTRADA" : "SAÍDA"}</h1>
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
              <th>Status</th>
              <th>Número</th>
              <th>Série</th>
              <th>Modelo</th>
              <th>Emissão</th>
              <th>{type === "invoicein" ? "Entrada" : "Saída"}</th>
              <th>Valor Total</th>
              <th>Visualizar</th>
            </tr>
          </thead>

          <tbody>
            {invoices.map((invoice) => {
              let style;
              let status;

              if (invoice.status === 'A') {
                style = 'authorized'
                status = 'Autorizada'
              } else if ( invoice.status === 'D') {
                style = 'denied'
                status = 'Denegada'
              } else if (invoice.status === 'C') {
                style = 'canceled'
                status = 'Cancelada'
              } else if (invoice.status === 'I') {
                style = 'unused'
                status = 'Inutilizada'
              }

              return (              
              <tr key={invoice.id}>
                <td className={style}>{status}</td>
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
            )})}
          </tbody>
        </table>
        { loading
          ? 
            <Loader
              type="ThreeDots"
              color="#1FCD64"
              height={50}
              width={50}
            />
          :
            <p>Não há mais itens para serem exibidos</p>
        }
      </Content>
      <InvoiceModal dataInvoice={invoiceModal} dataProducts={productsModal} isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal} />

    </Container>
  );
}