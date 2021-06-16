import { CustomersList } from "../../components/CustomersList";
import { Footer } from "../../components/Footer";
import { HeaderLogged } from "../../components/HeaderLogged";

interface CustomersProps {
  loggedInStatus: string,
  user: {} | {
    name: string,
    email: string,
    accounting_id: number
  }
  handleLogout: () => void
}

export function Customers(props: CustomersProps) {
  
  return (
    <>
      <HeaderLogged user={props.user} handleLogout={props.handleLogout} />
      <CustomersList />
      <Footer />
    </>
  );
}