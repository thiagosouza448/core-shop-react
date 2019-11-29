import React, { Component } from 'react';
import './Menu.css'

import Logo from '../../assets/core.png';
import ImgPerfil from '../../assets/perfil.png'
import Carrinho from '../../assets/carrinho.png';


function MyAccount() {
    return (
        <div className="account">
            <div>
                <img width="30px" src={ImgPerfil} alt="Account" />
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
            <img width="70px" src={Logo} alt="Logo" />
        </div>
    );

}


export default function Menu() {
    return (
        <div className="menu">

            <ul>
                <ImgLogo />
                <BtnMenu nomemenu="Categoria 1" />
                <BtnMenu nomemenu="Categoria 2" />
                <BtnMenu nomemenu="Categoria 3" />
                <BtnMenu nomemenu="Categoria 4" />
            </ul>
            <MyAccount />
        </div>
    );
}
class BtnMenu extends Component {
    render() {
        console.log(this.props)
        return (
            <li>{this.props.nomemenu}</li>
        );
    }
}



