import { createContext, ReactNode } from 'react';


interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextProps {
  signed: boolean,
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {

  return (
    <AuthContext.Provider value={{ signed: Boolean(false) }}>
      {children}
    </AuthContext.Provider>
  );
}