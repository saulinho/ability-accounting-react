import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  max-width: 1280px;
  height: 250px;

  background: var(--blue-dark);

  margin: 0 auto;

  display: flex;
  justify-content: space-around;
  align-items: center;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -2.5rem;
  }
`