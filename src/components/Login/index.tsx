import { FormEvent, useState } from "react";
import { api } from "../../services/api";
import { Container, FormLoginStyle } from "./styles";


interface LoginStatusProps {
  loggedInStatus: string,
  user: {}
}

interface UserInputProps {
  email: string,
  password: string,
}

interface LoginProps {
  handleSuccessfulAuth: (data: LoginStatusProps) => void
}

export function Login(props: LoginProps) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function userLogin(userInput: UserInputProps) {
    await api
    .post('sessions', {
      user: {
        ...userInput
      }
    })
    .then(response => {
      if (response.data.logged_in) {
        props.handleSuccessfulAuth(response.data);
      } else {
        alert("Email ou senha incorreto!");
      }
    })
    .catch(err => console.log(err));
  }

  function handleSubmit(event: FormEvent) {
    userLogin({
      email: email,
      password: password,
    })
    event.preventDefault();
  }

  return (
    <Container>
      <h1>ENTRAR NO SISTEMA</h1>

      <FormLoginStyle onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Digite aqui o seu e-mail"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Digite aqui a sua senha"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </div>

        <button type="submit">Entrar</button>

        <div>

        </div>

      </FormLoginStyle>

    </Container>
  );
}