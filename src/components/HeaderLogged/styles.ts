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

  span {
    font-size: 2rem;
    font-weight: 700;
    line-height: 3rem;
    color: var(--text-white);
  }

  button[type="submit"] {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 2.5rem;

    background: var(--red);
    border: 0;
    border-radius: 0.5rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    padding: 0.5rem 4rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`