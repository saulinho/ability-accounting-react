import { useHistory } from "react-router";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Login } from "../components/Login";

interface LoginStatusProps {
  loggedInStatus: string,
  user: {}
}

interface HomeProps {
  loggedInStatus: string,
  handleLogout: () => void,
  handleLogin: (data: LoginStatusProps) => void
}

export function Home(props: HomeProps) {

  const history = useHistory();

  function handleSuccessfulAuth(data: LoginStatusProps) {
    props.handleLogin(data);
    history.push('/accounting');
  }

  return (
    <>
      <Header />
      <Login handleSuccessfulAuth={handleSuccessfulAuth} />
      <p>{props.loggedInStatus}</p>
      <Footer />
    </>
  );
}