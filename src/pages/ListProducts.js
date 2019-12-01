import React, { Component, useEffect, useState } from "react";
import axios from "axios";

import "./ListProducts.css";

import Menu from "./components/Menu";
import Footer from "./components/Footer";
import ImgUrsoTeste from "../assets/urso.jpg";

const API_URL = "https://desolate-brushlands-20405.herokuapp.com/api/v1";

export default function ListProduct() {
  return (
    <div className="app">
      <Menu />
      <div className="product-list">
        <h4>Produtos em destaque</h4>
        <Teste />
        
      </div>

      <Footer />
    </div>
  );
}



class Teste extends Component {
  state = {
    users: []
  };
  componentDidMount() {
    const url = `${API_URL}/products/`;
    axios.get(url)
      .then(response => response.data)
      .then(data => {
        this.setState({ users: data });



      });
  }

  render() {
    return (
      <div  className="vitrine">

        {this.state.users.map(user => (
          <div id={user.productId} key={user.data}>
            <img src={user.imageUrl} alt={user.productName} />
            <h5>{user.productName}</h5>
            <p>R$ {user.price}</p>
            <button>Comprar</button>
          </div>

        ))}
      </div>

    );
  }
}
