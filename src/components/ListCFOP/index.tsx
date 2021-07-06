import { FormEvent, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import Loader from 'react-loader-spinner';
import { api } from '../../services/api';
import { CfopProps } from '../../@types';

import arrow_backImg from '../../assets/arrow_back.svg';

import { Container, Content } from './styles';

export function ListCFOP() {

  function useQuery() {
    return new URLSearchParams(useLocation().search)
  }

  const query = useQuery();
  const customer_id = query.get('id');
  const type = query.get('type');

  const [loading, setLoading] = useState(false);

  const [cfop, setCfop] = useState<CfopProps[]>([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const history = useHistory();

  function backPage() {
    history.goBack();
  }

  function handleSubmitDateInterval(event: FormEvent) {
    event.preventDefault();
    if (!startDate || !endDate || startDateTimestamp > endDateTimestamp) {
      return alert("Data Incorreta!")
    }
    setLoading(true);
    setCfop([]);
    getCfop()
  }

  const startDateTimestamp = new Date(startDate).getTime();
  const endDateTimestamp = new Date(endDate).getTime();
  const endDateToDate = new Date(endDateTimestamp + 86400000);
  const endDateDay = endDateToDate.getUTCDate().toString().padStart(2, '0');
  const endDateMonth = (endDateToDate.getUTCMonth() + 1).toString().padStart(2, '0');
  const endDateYear = endDateToDate.getUTCFullYear().toString();
  const endDateFormated = (endDateYear + '-' + endDateMonth + '-' + endDateDay);

  async function getCfop() {
    await api
      .get('invoice_products', {
        params: {
          type: type,
          id: customer_id,
          start_date: startDate,
          end_date: endDateFormated
        }
      })
      .then(response => {
        setLoading(false);
        setCfop(response.data.cfop_products)
      })
      .catch(err => console.log(err));
  }

  return (
    <Container>
      <div className="header-title">
        <button className="back-button">
          <img onClick={backPage} src={arrow_backImg} alt="Voltar" />
        </button>

        <h1>CFOP</h1>
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
              <th>CST</th>
              <th>CFOP</th>
              <th>Vlr Contábil</th>
              <th>Base Cálculo</th>
              <th>Imp. Debitado</th>
              <th>Isentas/Não Trib.</th>
              <th>Outras</th>
            </tr>
          </thead>

          <tbody>
            {cfop.map((cfop, i) => (
              <tr key={i}>
                <td>{cfop.icms_cst_csosn}</td>
                <td>{cfop.cfop}</td>
                <td>
                  {
                    new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })
                      .format(cfop.total_accounting)
                  }
                </td>
                <td>
                  {
                    new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })
                      .format(cfop.total_icms_base)
                  }
                </td>
                <td>
                  {
                    new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })
                      .format(cfop.total_icms_value)
                  }
                </td>
                <td>
                  {
                    new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })
                      .format(cfop.total_icms_free_value)
                  }
                </td>
                <td>
                  {
                    new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })
                      .format(cfop.total_icms_other_value)
                  }
                </td>
              </tr>
            ))}
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

    </Container>
  );
}