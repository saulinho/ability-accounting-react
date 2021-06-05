import { createContext, ReactNode, useState } from 'react';
import { api } from '../services/api';


interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextProps {
  signed: boolean,
  user: {
    name: string,
    email: string,
    accounting_id: number,
  } | null,
  UserLogin: (userInput: UserInputProps) => Promise<void>
}

interface UserInputProps {
  email: string,
  password: string
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {

  const [user, setUser] = useState<{} | null>(null);

  async function UserLogin(userInput: UserInputProps) {
    await api.post('/sessions', {
      user: {
        ...userInput,
      }
    })
      .then(response => {
        if (response.data.logged_in === true) {
          setUser(response.data.user)
        } else {
          alert("Usuário ou senha inválido!")
        }
      })
  }

  return (
    <AuthContext.Provider value={{ signed: Boolean(user), user,  UserLogin }}>
      {children}
    </AuthContext.Provider>
  );
}