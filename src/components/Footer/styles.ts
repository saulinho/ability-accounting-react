import styled from 'styled-components';


export const Container = styled.footer`
  
  width: 100%;
  max-width: 1280px;
  height: 200px;

  background: var(--blue-dark);

  margin: 0 auto;
  
  display: flex;
  flex-direction: column;

  .footer-contact {
    height: 90%;

    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    justify-content: space-around;
    align-items: center;

    .footer-logo {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      img{
        width: 7.5rem;
        height: 7.5rem;
      }
    }

    .footer-contact-address {
      display: grid;
      grid-template-columns: 0.5fr 2fr;
      align-items: center;

      div:first-child {
        height: 100%;

        padding-right: 2rem;

        border-right: 1px solid var(--background);

        display: flex;
        justify-content: flex-end;
        align-items: center;
      
        h2 {
          font-size: 1.5rem;
          line-height: 2.25rem;
          font-weight: 400;
          color: var(--text-white);
        }
      }

      div:nth-child(2) {

        height: 100%;
        margin-left: 2rem;

        span{
          font-size: 1.1rem;
          font-weight: 400;
          line-height: 1.7rem;
          color: var(--text-white);
        }

      }
    }

    .footer-social-media {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      
      a + a {
        margin-left: 3rem;
      }
    }
  }

  .footer-copyright {
    font-size: 0.8rem;
    font-weight: 400;
    line-height: 1.1rem;
    color: var(--text-white);
    text-align: center;
  }

  @media (max-width: 480px) {
    .footer-contact{
      width: 100%;

      .footer-logo{
        a img {
          width: 100%;
        }
      }
      
      .footer-social-media {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        a {
          text-align: center;
          align-items: center;
          justify-content: center;
          padding: 0;
          margin: 0;
        }

        a img {
          width: 60%;
          margin: 0;
          padding: 0;
        }
        
        a + a {
          margin: 0;
          margin-top: 1rem;
          padding: 0;
        }
      }
    }
  }
`