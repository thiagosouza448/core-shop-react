import React, { Component } from "react";
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
        <Vitrine />
      </div>

      <Footer />
    </div>
  );
}

function Vitrine() {
  return (
    <div className="vitrine">
      <div>
        <img src={ImgUrsoTeste} alt="2" />
        <h5>Nome do produto completo</h5>
        <p>R$ 29,00</p>
        <button>Comprar</button>
      </div>
      <div>
        <img src={ImgUrsoTeste} alt="2" />
        <h5>Nome do produto completo</h5>
        <p>R$ 29,00</p>
        <button>Comprar</button>
      </div>
      <div>
        <img src={ImgUrsoTeste} alt="2" />
        <h5>Nome do produto completo</h5>
        <p>R$ 29,00</p>
        <button>Comprar</button>
      </div>
      <div>
        <img src={ImgUrsoTeste} alt="2" />
        <h5>Nome do produto completo</h5>
        <p>R$ 29,00</p>
        <button>Comprar</button>
      </div>
      <div>
        <img src={ImgUrsoTeste} alt="2" />
        <h5>Nome do produto completo</h5>
        <p>R$ 29,00</p>
        <button>Comprar</button>
      </div>

    </div>
  );
}

class Teste extends Component {
  state = {
    products: []
  };
  componentDidMount() {
    const url = `${API_URL}/products/`;
    axios.get(url)
      .then(response => response.data)
      .then(data => {
        this.setState({ products: data });



      });
  }

  render() {
    return (
      <div  className="vitrine">

        {this.state.products.map(product => (
          <div id={product.productId} key={product.productId}>
            <img src={product.imageUrl} alt={product.productName} />
            <h5>{product.productName}</h5>
            <p>R$ {product.price}</p>
            <button>Comprar</button>
          </div>

        ))}
      </div>

    );
  }
}
