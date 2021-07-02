import Modal from 'react-modal';
import { NewTransactionModalProps } from '../../@types';

import imgClose from '../../assets/close.svg';

import { Container } from './styles';

export function InvoiceModal({ isOpen, onRequestClose, dataInvoice, dataProducts }: NewTransactionModalProps) {

  const invoice_products = dataProducts.filter(product => product.invoice_id === dataInvoice.id)

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
                <th>CST</th>
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
                  <td>{product.icms_cst_csosn}</td>
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
