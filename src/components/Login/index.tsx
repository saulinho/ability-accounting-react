import { Container, FormLoginStyle } from "./styles";

export function Login() {
  return (
    <Container>
      <h1>ENTRAR NO SISTEMA</h1>

      <FormLoginStyle>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Digite aqui o seu e-mail"
          />
        </div>

        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Digite aqui a sua senha"
          />
        </div>

        <button type="submit">Entrar</button>

      </FormLoginStyle>

    </Container>
  );
}