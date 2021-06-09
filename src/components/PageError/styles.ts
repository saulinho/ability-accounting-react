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

`
export const Content = styled.section`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 22rem;
    margin-top: 2rem;
    margin-left: -1rem;
    margin-bottom: 2rem;
  }

  button[type="button"] {
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