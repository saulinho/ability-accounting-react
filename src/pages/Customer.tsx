import { Footer } from "../components/Footer";
import { HeaderLogged } from "../components/HeaderLogged";
import { InvoicesTable } from "../components/InvoicesTable";

export function Customer() {
  return (
    <>
      <HeaderLogged />
      <InvoicesTable />
      <Footer />
    </>
  );
}