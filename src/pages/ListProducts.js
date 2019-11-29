import React from 'react';
import './ListProducts.css'

import Menu from './components/Menu';


import ImgUrsoTeste from '../assets/urso.jpg'



export default function ListProduct() {


    return (

        <div className="app">
            <Menu />
            <div className="product-list">
                <h4>Produtos em destaque</h4>

                <Vitrine />
            </div>

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
                <img src={ImgUrsoTeste} alt="23" />
                    <h5>Nome do produto completo</h5>
                    <p>R$ 29,00</p>
                    <button>Comprar</button>
            </div>
            <div>
                <img src={ImgUrsoTeste} alt="2324" />
                    <h5>Nome do produto completo</h5>
                    <p>R$ 29,00</p>
                    <button>Comprar</button>
            </div>
            <div>
                <img src={ImgUrsoTeste} alt="11212" />
                    <h5>Nome do produto completo</h5>
                    <p>R$ 29,00</p>
                    <button>Comprar</button>
            </div>
        </div>

    );
}