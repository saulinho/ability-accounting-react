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

export const Content = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: space-around;
  margin-top: 4rem;

  button[type="button"] {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 2.5rem;

    background: var(--blue-dark);
    border: 0;
    border-radius: 0.5rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    padding: 1rem 2rem;
    margin: 1rem;

    transition: filter 0.2s;

    img {
      width: 8rem;
    }

    &:hover {
      filter: opacity(0.8);
    }
  }
`