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

  img {
    width: 2rem;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 3.5rem;
    text-align: center;
    margin-top: -2rem;
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

  table {
    width: 100%;
    border-spacing: 0 0.25rem;
    text-align: left;
    
    thead {
      tr:first-child th:first-child { border-top-left-radius: 0.25rem; }
      tr:first-child th:last-child { border-top-right-radius: 0.25rem; }
      tr:last-child th:first-child { border-bottom-left-radius: 0.25rem; }
      tr:last-child th:last-child { border-bottom-right-radius: 0.25rem; }

      th {
        font-size: 1.25rem;
        font-weight: 700;
        line-height: 2rem;
        color: var(--text-dark);
        padding: 0 2rem;

        background: var(--list-odd);
      }
    }

    .cnpj {
      width: 35%;
    }

    tbody {
      tr:first-child td:first-child { border-top-left-radius: 0.25rem; }
      tr:first-child td:last-child { border-top-right-radius: 0.25rem; }
      tr:last-child td:first-child { border-bottom-left-radius: 0.25rem; }
      tr:last-child td:last-child { border-bottom-right-radius: 0.25rem; }
      
      tr {
        font-size: 1rem;
        line-height: 1.5rem;
        font-weight: 400;
        background: var(--list-pair);
        cursor: pointer;

        transition: filter 0.2s;
        
        &:nth-child(odd) {
          background: var(--list-odd);
        }

        &:hover {
          filter: opacity(0.7);
        }

        td {
          padding: 0 2rem
        }
      }

    }
  }
`