import { FormEvent, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { api } from '../../services/api';
import { CofinsProps, PisProps } from '../../@types';

import arrow_backImg from '../../assets/arrow_back.svg';

import { Container, Content } from './styles';

export function ListPC() {

  function useQuery() {
    return new URLSearchParams(useLocation().search)
  }

  const query = useQuery();
  const customer_id = query.get('id');
  const type = query.get('type');

  const [check, setCheck] = useState('');
  const [pis, setPis] = useState<PisProps[]>([]);
  const [cofins, setCofins] = useState<CofinsProps[]>([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const history = useHistory();

  function backPage() {
    history.goBack();
  }


  function handleSubmitDateInterval(event: FormEvent) {
    event.preventDefault();
    console.log(startDate, endDate, startDateTimestamp, endDateTimestamp, check);
    if (!startDate || !endDate || startDateTimestamp > endDateTimestamp) {
      return alert("Data Incorreta");
    }
    if (!check) {
      return alert("Selecione PIS ou COFINS!");
    }
    getPisCofins()
  }

  const startDateTimestamp = new Date(startDate).getTime();
  const endDateTimestamp = new Date(endDate).getTime();
  const endDateToDate = new Date(endDateTimestamp + 86400000);
  const endDateDay = endDateToDate.getUTCDate().toString().padStart(2, '0');
  const endDateMonth = (endDateToDate.getUTCMonth() + 1).toString().padStart(2, '0');
  const endDateYear = endDateToDate.getUTCFullYear().toString();
  const endDateFormated = (endDateYear + '-' + endDateMonth + '-' + endDateDay);
  
  async function getPisCofins() {
    await api
      .get('pis_cofins', {
        params: {
          type: type,
          id: customer_id,
          start_date: startDate,
          end_date: endDateFormated,
          check: check
        }
      })
      .then(response => {
        if(check === 'PIS') {
        setPis(response.data.pis_products)
        } else
        if(check === 'COFINS') {
        setCofins(response.data.cofins_products)
        }
      })
      .catch(err => console.log(err));
  }

  return (
    <Container>
      <div className="header-title">
        <button className="back-button">
          <img onClick={backPage} src={arrow_backImg} alt="Voltar" />
        </button>

        <h1>PIS - COFINS</h1>
      </div>

      <Content>

        <form onSubmit={handleSubmitDateInterval}>
          <div className="form-date-selector">
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
            </div>
          </div>

          <div className="form-pis-cofins-selector">
            <h3>Selecione um filtro:</h3>
            <div>
              <label className="container">PIS
                <input
                  type="radio"
                  name="check"
                  id='pis'
                  value='PIS'
                  onChange={event => setCheck(event.target.value)}
                />
                <span className="checkmark"></span>
              </label>

              <label className="container">COFINS
                <input
                  type="radio"
                  name="check"
                  id='cofins'
                  value='COFINS'
                  onChange={event => setCheck(event.target.value)}
                />
                <span className="checkmark"></span>
              </label>
            </div>
          </div>
          <button type="submit">Listar</button>
        </form>

        <table>
          <thead>
            <tr>
              <th>CST</th>
              <th>Vlr Contábil</th>
              <th>Base Cálculo</th>
              <th>Vlr Total PIS</th>
            </tr>
          </thead>
          <tbody>
            {
              pis
                ?
                  pis.map((pis, i) => (
                    <tr key={i}>
                      <td>{pis.pis_cst}</td>
                      <td>
                        {
                          new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                          })
                            .format(pis.total_accounting)
                        }
                      </td>
                      <td>
                        {
                          new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                          })
                            .format(pis.total_pis_base)
                        }
                      </td>
                      <td>
                        {
                          new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                          })
                            .format(pis.total_pis_value)
                        }
                      </td>
                    </tr>
                  )) 
                :
                  cofins.map((cofins, i) => (
                    <tr key={i}>
                      <td>{cofins.cofins_cst}</td>
                      <td>
                        {
                          new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                          })
                            .format(cofins.total_accounting)
                        }
                      </td>
                      <td>
                        {
                          new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                          })
                            .format(cofins.total_cofins_base)
                        }
                      </td>
                      <td>
                        {
                          new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                          })
                            .format(cofins.total_cofins_value)
                        }
                      </td>
                    </tr>
                  ))
            }

            
          </tbody>
        </table>
      </Content>

    </Container>
  );
}