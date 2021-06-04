import { Footer } from "./components/Footer";
import { HeaderLogged } from "./components/HeaderLogged";
import { Header } from "./components/Header";
import { Login } from "./components/Login";
import { GlobalStyles } from "./styles/global";
import { CustomersList } from "./components/CustomersList";
import { InvoicesTable } from "./components/InvoicesTable";

function App() {
  return (
    <>
      {/* <Header /> */}

      <HeaderLogged />

      {/* <Login /> */}

      {/* <CustomersList /> */}

      <InvoicesTable />

      <Footer />

      <GlobalStyles />
    </>
  );
}

export default App;
