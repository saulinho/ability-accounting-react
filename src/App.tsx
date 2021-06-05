import { GlobalStyles } from "./styles/global";
import { Routes } from "./routes";
import { AuthProvider } from "./contexts/auth";

function App() {
  return (
    <>
    
    <AuthProvider>
      <Routes />
    </AuthProvider>

      <GlobalStyles />
    </>
  );
}

export default App;
