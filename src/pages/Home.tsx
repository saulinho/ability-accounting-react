import { useContext } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Login } from "../components/Login";
import { AuthContext } from "../contexts/auth";

export function Home() {
  const context = useContext(AuthContext);
  
  console.log(context);

  return (
    <>
      <Header />
      <Login/>
      <Footer />
    </>
  );
}