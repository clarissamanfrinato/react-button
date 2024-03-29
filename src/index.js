import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import Counter from './components/counter';

ReactDOM.render(
  <React.StrictMode>
    <Counter   
              juros= "valor juros"
              amortizacao=" valor amortizacao"
              tai = "valor tai"
              aniversario = "dia aniversario"
              valorNominalRemanescente = "valor nominal remanescente"
              valorNominalUnitario= "valor nominal unitario"
              valorNominalAtual ="valor nominal atual"
              AMEX ="amex"
              PMT = "pmt"
              codigoIf ="codigo IF"
              serie= "numero da serie"
              emailAF="clari277@gmail.com"
              
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
