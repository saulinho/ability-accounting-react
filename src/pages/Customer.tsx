import { Footer } from "../components/Footer";
import { HeaderLogged } from "../components/HeaderLogged";
import { InvoicesTable } from "../components/InvoicesTable";

interface CustomerProps {
  user: {} | {
    name: string,
    email: string,
    accounting_id: number
  }
  handleLogout: () => void
}

export function Customer(props: CustomerProps) {
  return (
    <>
      <HeaderLogged user={props.user} handleLogout={props.handleLogout}/>
      <InvoicesTable />
      <Footer />
    </>
  );
}