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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;

  ul {
    width: 100%;
    list-style: none;

    li {
      width: 100%;

      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5rem;
      color: var(--text-dark);

      padding: 0 2rem;
      background: var(--list-pair);

      &:nth-child(odd) {
        background: var(--list-odd);
      }

      a {
          color: var(--text-dark);
          text-decoration: none;
        }

    }
    li + li {
      margin-top: 0.25rem;
    }
  }

  

`