import { useLocation } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { HeaderLogged } from "../../components/HeaderLogged";
import { ListCFOP } from "../../components/ListCFOP";
import { ListNF } from "../../components/ListNF";
import { ListPC } from "../../components/ListPC";

interface ListProps {
  user: {} | {
    name: string,
    email: string,
    accounting_id: number
  }
  handleLogout: () => void
}

export function List(props: ListProps) {

  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      <HeaderLogged user={props.user} handleLogout={props.handleLogout} />
      {path === '/nf' ? <ListNF /> : ''}
      {path === '/cfop' ? <ListCFOP /> : ''}
      {path === '/piscofins' ? <ListPC /> : ''}
      <Footer />
    </>
  );
}