import React from "react";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

export default function Product() {
  return (
    <div className="product">
      <Menu />

      <div className="productId">
        <h2>Produto 01</h2>
      </div>

      <Footer />
    </div>
  );
}
