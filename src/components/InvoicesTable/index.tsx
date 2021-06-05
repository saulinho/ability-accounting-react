import downloadImg from '../../assets/download.svg';
import pdfImg from '../../assets/pdf.svg';

import { Container, Content } from './styles'

export function InvoicesTable() {

  return (
    <Container>
      <h1>NOTAS FISCAIS DE CLIENTE DA CONTABILIDADE</h1>

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
            <tr>
              <td>0015452</td>
              <td>001</td>
              <td>1.6549,00</td>
              <td>Stenio de Oliveira</td>
              <td><a><img src={pdfImg} alt="PDF" /></a></td>
            </tr>

            <tr>
              <td>0015452</td>
              <td>001</td>
              <td>1.6549,00</td>
              <td>Stenio de Oliveira</td>
              <td><a><img src={pdfImg} alt="PDF" /></a></td>
            </tr>

            <tr>
              <td>0015452</td>
              <td>001</td>
              <td>1.6549,00</td>
              <td>Stenio de Oliveira</td>
              <td><a><img src={pdfImg} alt="PDF" /></a></td>
            </tr>

            <tr>
              <td>0015452</td>
              <td>001</td>
              <td>1.6549,00</td>
              <td>Stenio de Oliveira</td>
              <td><a><img src={pdfImg} alt="PDF" /></a></td>
            </tr>

            <tr>
              <td>0015452</td>
              <td>001</td>
              <td>1.6549,00</td>
              <td>Stenio de Oliveira</td>
              <td><a><img src={pdfImg} alt="PDF" /></a></td>
            </tr>
            <tr>
              <td>0015452</td>
              <td>001</td>
              <td>1.6549,00</td>
              <td>Stenio de Oliveira</td>
              <td><a><img src={pdfImg} alt="PDF" /></a></td>
            </tr>
            
            <tr>
              <td>0015452</td>
              <td>001</td>
              <td>1.6549,00</td>
              <td>Stenio de Oliveira</td>
              <td><a href="#"><img src={pdfImg} alt="PDF" /></a></td>
            </tr>
            
          </tbody>
        </table>
      </Content>

    </Container>
  );
}