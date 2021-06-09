import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { PageError } from "../components/PageError";

export function NotFound() {
  return (
    <>
      <Header />
      <PageError />
      <Footer />
    </>
  );
}