import React, { Component } from "react";

import './Footer.css';

export default class Footer extends Component {
    render(){
        return(

            <footer className="footer">
            <ContentFooter />
          </footer>

        );
    }
}




function ContentFooter() {
  return (
    <div className="contentFooter">
      <div>
        <h5>NEWSLETTER</h5>
        <p>Receba nossas promoções e novidades. Inscreva-se:</p>
      </div>

      <form action="">
        <input type="text" placeholder="seu nome" />
        <input type="text" placeholder="seu email" />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
