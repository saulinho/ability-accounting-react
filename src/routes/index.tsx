import { useContext } from "react";
import { AuthContext } from "../contexts/auth";
import { AuthRoutes } from "./AuthRoutes";
import { LoggedRoutes } from "./LoggedRotues";

export function Routes() {
  const { signed } = useContext(AuthContext);

  return signed ? <LoggedRoutes /> : <AuthRoutes />
}