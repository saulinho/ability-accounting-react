import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  max-width: 1000px;

  display: flex;
  flex-direction: column;
  
  background: var(--background);
  border-radius: 1rem 1rem 0 0 ;

  margin: -3rem auto 0 auto;

  padding: 3rem;

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 3.5rem;
    text-align: center;
  }

  
  @media (max-width: 480px) {
    width: 95%;
  }
`

export const FormLoginStyle = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;

  div {
    display: flex;
    flex-direction: row;
    margin-bottom: 2rem;

  }

  label {
    width: 8rem;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 3rem;
    text-align: end;
    padding-right: 2rem;
  }

  input {
    width: 30rem;
    height: 2.5rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.2rem;
    color: var(--blue-dark);

    background: var(--input-background);
    border: 1px solid #1F2033;
    border-radius: 0.25rem;
    padding: 0 1rem;

    &::placeholder {
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.2rem;
      color: var(--input-placeholder);
    }
  }

  button[type="submit"] {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 2.5rem;

    background: var(--green);
    border: 0;
    border-radius: 0.5rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    padding: 0.5rem 4rem;
    margin: 4rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

`