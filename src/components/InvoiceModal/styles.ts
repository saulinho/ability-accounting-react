import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  height: 100%;
  
  display: flex;
  flex-direction: column;

  padding: 2rem 0;

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 3.5rem;
    text-align: center;
    color: #fff;
    background: var(--blue-dark);
    margin-bottom: 1rem;
    border-radius: 1rem;
  }

  h2 {
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 3.5rem;
  }

  table {
    width: 100%;
    font-size: 1rem;
    font-weight: 400;
    text-align: center;

    &:last-child {
      font-size: 0.75rem;
    }
  }

  th {
    font-weight: 700;
    text-align: center;
    padding: 0 0.5rem;
    background: var(--list-odd);
  }
`