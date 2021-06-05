import { FormEvent, useContext, useState } from "react";
import { AuthContext } from "../../contexts/auth";
import { Container, FormLoginStyle } from "./styles";

export function Login() {
  const context = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(event: FormEvent){
    event.preventDefault();
    context.UserLogin({
      email: email,
      password: password})
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