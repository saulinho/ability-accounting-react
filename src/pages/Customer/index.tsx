import { Footer } from "../../components/Footer";
import { HeaderLogged } from "../../components/HeaderLogged";
import { InvoiceType } from "../../components/InvoiceType";

interface InvoicesProps {
  user: {} | {
    name: string,
    email: string,
    accounting_id: number
  }
  handleLogout: () => void
}

export function Customer(props: InvoicesProps) {
  return (
    <>
      <HeaderLogged user={props.user} handleLogout={props.handleLogout} />
      <InvoiceType />
      <Footer />
    </>
  );
}