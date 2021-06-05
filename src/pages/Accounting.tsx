import { CustomersList } from "../components/CustomersList";
import { Footer } from "../components/Footer";
import { HeaderLogged } from "../components/HeaderLogged";

export function Accounting() {
  return (
    <>
      <HeaderLogged />
      <CustomersList />
      <Footer />
    </>
  );
}