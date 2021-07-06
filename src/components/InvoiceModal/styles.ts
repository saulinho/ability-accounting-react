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

  }

  .modal-tab-list {
    display: inline-block;
  }
  
  .product-table {
    font-size: 0.75rem;
  }

  th {
    font-weight: 700;
    text-align: center;
    padding: 0 0.5rem;
    background: var(--list-odd);
  }

  .react-tabs {
  -webkit-tap-highlight-color: transparent;
}

.react-tabs__tab-list {
  border-bottom: 1px solid #aaa;
  margin: 0 0 10px;
  padding: 0;
}

.react-tabs__tab {
  display: inline-block;
  border: 1px solid transparent;
  border-bottom: none;
  bottom: -1px;
  position: relative;
  list-style: none;
  padding: 6px 12px;
  cursor: pointer;
}

.react-tabs__tab--selected {
  background: #F2F5F6;
  border-color: #999AB6;
  font-weight: 700;
  color: black;
  border-radius: 5px 5px 0 0;
}

.react-tabs__tab--disabled {
  color: GrayText;
  cursor: default;
}

.react-tabs__tab:focus {
  box-shadow: 0 0 5px hsl(208, 99%, 50%);
  border-color: hsl(208, 99%, 50%);
  outline: none;
}

.react-tabs__tab:focus:after {
  content: "";
  position: absolute;
  height: 5px;
  left: -4px;
  right: -4px;
  bottom: -5px;
  background: #fff;
}

.react-tabs__tab-panel {
  display: none;
}

.react-tabs__tab-panel--selected {
  display: block;
}
`