import React, { Component } from "react";
import "./Menu.css";

import Logo from "../../assets/core.png";
import ImgPerfil from "../../assets/perfil.png";
import Carrinho from "../../assets/carrinho.png";

export default function Menu() {
  return (
    <div className="menu">
      <div className="contentMenu">
        <ul>
          <ImgLogo />
          <BtnMenu nomemenu="Categoria 1" />
          <BtnMenu nomemenu="Categoria 2" />
          <BtnMenu nomemenu="Categoria 3" />
          <BtnMenu nomemenu="Categoria 4" />
        </ul>
        <MyAccount />
      </div>
    </div>
  );
}

function MyAccount() {
  return (
    <div className="account">
      <div>
        <img src={ImgPerfil} alt="Account" />
        <p>Minha conta</p>
      </div>
      <div className="carrinho">
        <img width="40px" src={Carrinho} alt="Carrinho" />
      </div>
    </div>
  );
}

function ImgLogo() {
  return (
    <div className="Logo">
      <img src={Logo} alt="Logo" />
    </div>
  );
}

class BtnMenu extends Component {
  render() {
    // console.log(this.props);
    return <li>{this.props.nomemenu}</li>;
  }
}
