import "./App.css";
import data from "./data";
import { useState } from "react";
import Main from "./components/Main";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Info from "./components/Info";
import Contacts from "./components/Contacts";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const add = (product) => {
    const productInCart = cartItems.find((item) => item.id === product.id);
    if (productInCart) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productInCart, number: productInCart.number + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, number: 1 }]);
    }
  };
  const remove = (product) => {
    const productInCart = cartItems.find((item) => item.id === product.id);
    if (productInCart.number !== 1) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productInCart, number: productInCart.number - 1 }
            : item
        )
      );
    } else {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    }
  };
  const buy = () => {
    alert("Ваше замовлення прийнято");
    setCartItems([]);
  };

  return (
    <div className="App">
      <BrowserRouter basename="/techno/">
        <Header />
        <div className="f1">
          <div className="f2">
            <Routes>
              <Route path="/" element={<Main products={data} add={add} />} />
              <Route path="/info" element={<Info />} />
              <Route path="/contacts" element={<Contacts />} />
              {
                <Route
                  path="/basket"
                  element={
                    <Cart
                      cartItems={cartItems}
                      add={add}
                      remove={remove}
                      buy={buy}
                    />
                  }
                />
              }
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
