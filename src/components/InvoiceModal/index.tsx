import { useEffect, useState } from 'react';
import Modal from 'react-modal';

import imgClose from '../../assets/close.svg';
import { api } from '../../services/api';

import { Container } from './styles';

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

interface InvoiceProductsProps {
  id: number,
  product_id: number,
  invoice_id: number,
  description: string,
  ncm: string,
  cfop: string,
  cest: string,
  quantity: number,
  price_total: number,
  price_unitary: number
}

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  dataInvoice: InvoicesProps

}

export function InvoiceModal({ isOpen, onRequestClose, dataInvoice }: NewTransactionModalProps) {

  const [products, setProducts] = useState<InvoiceProductsProps[]>([]);

  useEffect(() => {
    api
      .get('invoice_products')
      .then(response => {
        setProducts(response.data.invoice_products)
      })
      .catch(err => console.log(err));

  }, [])


  const invoice_products = products.filter(product => product.invoice_id === dataInvoice.id)

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
      ariaHideApp={false}
    >

      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={imgClose} alt="Fechar Modal" />

      </button>

      <Container>
        <h1>NOTA FISCAL</h1>

        <section className="header">

          <table>

            <thead>
              <tr>
                <th>CHAVE DE ACESSO</th>
                <th>DATA EMISSÃO</th>
                <th>DATA SAÍDA</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>{dataInvoice.access_key}</td>
                <td>
                  {
                    dataInvoice.date_issue
                      ? new Intl.DateTimeFormat('pt-BR')
                        .format(new Date(dataInvoice.date_issue))
                      : ''
                  }
                </td>
                <td>
                  {
                    dataInvoice.date_departure
                      ? new Intl.DateTimeFormat('pt-BR')
                        .format(new Date(dataInvoice.date_departure))
                      : ''
                  }
                </td>
              </tr>
            </tbody>

          </table>

          <table>

            <thead>
              <tr>
                <th>NÚMERO</th>
                <th>SÉRIE</th>
                <th>MODELO</th>
                <th>REGISTRO</th>
                <th>MOVIMENTO</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>{dataInvoice.number}</td>
                <td>{dataInvoice.serie}</td>
                <td>{dataInvoice.model}</td>
                <td>{dataInvoice.type_record}</td>
                <td>{dataInvoice.type_movement}</td>
              </tr>
            </tbody>

          </table>

          <table>

            <thead>
              <tr>
                <th>CONSUMIDOR</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>{dataInvoice.customer?.name.toUpperCase()}</td>
              </tr>
            </tbody>

          </table>

        </section>

        <section className="main">
          <h2>IMPOSTOS</h2>

          <table>

            <thead>
              <tr>
                <th>BASE ICMS</th>
                <th>BASE ICMS ST</th>
                <th>BASE IPI</th>
                <th>BASE PIS</th>
                <th>BASE COFINS</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  {
                    new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })
                      .format(dataInvoice.icms_base)
                  }
                </td>
                <td>
                  {
                    new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })
                      .format(dataInvoice.sticms_base)
                  }
                </td>
                <td>
                  {
                    new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })
                      .format(dataInvoice.ipi_base)
                  }
                </td>
                <td>
                  {
                    new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })
                      .format(dataInvoice.pis_base)
                  }
                </td>
                <td>
                  {
                    new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })
                      .format(dataInvoice.cofins_base)
                  }
                </td>
              </tr>
            </tbody>
          </table>

          <table>
            <thead>
              <tr>
                <th>VLR ICMS</th>
                <th>VLR ST ICMS</th>
                <th>VLR IPI</th>
                <th>VLR PIS</th>
                <th>VLR COFINS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {
                    new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })
                      .format(dataInvoice.icms_value)
                  }
                </td>
                <td>
                  {
                    new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })
                      .format(dataInvoice.sticms_value)
                  }
                </td>
                <td>
                  {
                    new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })
                      .format(dataInvoice.ipi_value)
                  }
                </td>
                <td>
                  {
                    new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })
                      .format(dataInvoice.pis_value)
                  }
                </td>
                <td>
                  {
                    new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })
                      .format(dataInvoice.cofins_value)
                  }
                </td>
              </tr>
            </tbody>
          </table>

          <h2>VALORES</h2>

          <table>

            <thead>
              <tr>
                <th>VLR FRETE</th>
                <th>VLR SEGURO</th>
                <th>VLR DESPESAS</th>
                <th>VLR DESCONTOS</th>
                <th>VLR PRODUTOS</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  {
                    new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })
                      .format(dataInvoice.shipping_value)
                  }
                </td>
                <td>
                  {
                    new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })
                      .format(dataInvoice.safe_value)
                  }
                </td>
                <td>
                  {
                    new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })
                      .format(dataInvoice.expenses_value)
                  }
                </td>
                <td>
                  {
                    new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })
                      .format(dataInvoice.discount_value)
                  }
                </td>
                <td>
                  {
                    new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })
                      .format(dataInvoice.total_product)
                  }
                </td>
              </tr>
            </tbody>

          </table>

          <table>

            <thead>
              <tr>
                <th>VALOR TOTAL DA NOTA</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  {
                    new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })
                      .format(dataInvoice.invoice_value)
                  }
                </td>
              </tr>
            </tbody>

          </table>

          <h2>PRODUTOS</h2>

          <table className="product-table">
            <thead>
              <tr>
                <th>CÓDIGO</th>
                <th>DESCRIÇÃO</th>
                <th>NCM</th>
                <th>CFOP</th>
                <th>CEST</th>
                <th>QNT</th>
                <th>VLR UNIT</th>
                <th>VLR TOTAL</th>
              </tr>
            </thead>

            <tbody>
              {invoice_products.map((product) => (
                <tr key={product.id}>
                  <td>{product.product_id}</td>
                  <td>{product.description}</td>
                  <td>{product.ncm}</td>
                  <td>{product.cfop}</td>
                  <td>{product.cest}</td>
                  <td>{product.quantity}</td>
                  <td>
                    {
                      new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })
                        .format(product.price_unitary)
                    }
                  </td>
                  <td>
                    {
                      new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })
                        .format(product.price_total)
                    }
                  </td>
                </tr>
              ))}

            </tbody>
          </table>

        </section>

      </Container>
    </Modal>
  );
}