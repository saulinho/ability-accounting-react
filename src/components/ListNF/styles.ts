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

  .header-title {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;

    button {
      width: 1rem;
      height: 1rem;
      background: transparent;
      border: none;
      position: absolute;
      left: 0;
      top: -2rem;

      transition: filter 0.2s;
      
      &:hover {
        filter: opacity(0.7);
      }
      img {
        width: 2rem;
        height: 2rem;
      }
    }

    h1 {
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 3.5rem;
      text-align: center;
      margin-top: -2rem;
    }
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

  form{
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    margin-bottom: 2rem;

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      span {
        margin-right: 1rem;
      }
    }

    input {
      font-size: 1rem;
      font-weight: 600;
      line-height: 1rem;
      text-align: center;
      background-color: var(--text-white);
      border: 0;
      border-radius: 0.5rem;
      box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
      padding: 0.2rem 0.2rem;
      outline: none;
      margin-right: 1rem;
    }

    button[type="submit"] {
      font-size: 1rem;
      font-weight: 700;
      line-height: 1rem;

      background: var(--green);
      border: 0;
      border-radius: 0.5rem;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

      padding: 0.5rem 2rem;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
  
  @media (max-width: 940px) {
    form {
      display: flex;
      flex-direction: column;
    }
    h3 {
      margin-bottom: 1rem;
    }
  }

  table {
    width: 100%;
    border-spacing: 0 0.25rem;
    text-align: center;
    
    thead {
      tr:first-child th:first-child { border-top-left-radius: 0.25rem; }
      tr:first-child th:last-child { border-top-right-radius: 0.25rem; }
      tr:last-child th:first-child { border-bottom-left-radius: 0.25rem; }
      tr:last-child th:last-child { border-bottom-right-radius: 0.25rem; }

      th {
        font-size: 1.2rem;
        font-weight: 700;
        line-height: 2rem;
        color: var(--text-dark);
        padding: 0 1rem;

        background: var(--list-odd);

        img {
          width: 30px;
          height: 30px;
          vertical-align: middle;
        }
      }

      @media (max-width: 768px) {
        th {
          font-size: 0.9rem;
          padding: 0 0.7rem;
        }
      }

      @media (max-width: 480px) {
        th {
          font-size: 0.9rem;
          padding: 0 0.7rem;
        }
      }
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

        
        &:nth-child(odd) {
          background: var(--list-odd);
        }

        td {
          transition: filter 0.2s;
  
          img {
            vertical-align: middle;
            width: 1.25rem;
            cursor: pointer;
  
            &:hover {
              filter: opacity(0.8);
            }
          }
        }
        .authorized {
          color: white;
          background-color: #00C142;
        }

        .unused {
          color: white;
          background-color: #0070C0;
        }

        .canceled {
          color: white;
          background-color: #C00000;
        }

        .denied {
          color: white;
          background-color: #C100BA;
        }
      }
    }
  }
  
`