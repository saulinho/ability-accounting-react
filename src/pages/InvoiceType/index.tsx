import { useLocation } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { HeaderLogged } from "../../components/HeaderLogged";
import { InvoicesIn } from "../../components/InvoicesIn";
import { InvoicesOut } from "../../components/InvoicesOut";
import { TaxCuponOut } from "../../components/TaxCuponOut";

interface InvoiceTypeProps {
  user: {} | {
    name: string,
    email: string,
    accounting_id: number
  }
  handleLogout: () => void
}

export function InvoiceType(props: InvoiceTypeProps) {
  const query = new URLSearchParams(useLocation().search);
  const type = query.get('type');

  return (
    <>
      <HeaderLogged user={props.user} handleLogout={props.handleLogout} />
      {type === 'invoicein' ? <InvoicesIn /> : ''}
      {type === 'invoiceout' ? <InvoicesOut /> : ''}
      {type === 'taxcuponout' ? <TaxCuponOut /> : ''}
      <Footer />
    </>
  );
}