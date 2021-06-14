import nfe_inImg from '../../assets/nfe_in.svg';
import nfe_outImg from '../../assets/nfe_out.svg';
import nfce_outImg from '../../assets/nfce_out.svg';

import { Container, Content} from './styles'

export function InvoiceType() {

  return (
    <Container>
      <h1>ABILITY INFORMÁTICA</h1>

      <Content>

        <button type="button">
          <img src={nfe_inImg} alt="NFe Entrada" />
        </button>

        <button type="button">
          <img src={nfe_outImg} alt="NFe Saída" />
        </button>

        <button type="button">
          <img src={nfce_outImg} alt="NFCe Saída" />
        </button>

      </Content>

    </Container>
  );
}