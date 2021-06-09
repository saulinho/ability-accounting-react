import { CustomersList } from "../components/CustomersList";
import { Footer } from "../components/Footer";
import { HeaderLogged } from "../components/HeaderLogged";

interface AccountingProps {
  loggedInStatus: string,
  user: {} | {
    name: string,
    email: string,
    accounting_id: number
  }
  handleLogout: () => void
}

export function Accounting(props: AccountingProps) {
  
  return (
    <>
      <HeaderLogged user={props.user} handleLogout={props.handleLogout} />
      <CustomersList />
      <Footer />
    </>
  );
}