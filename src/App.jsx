import React from "react";
import { useState } from "react";
import Checkout from './components/Checkout/Checkout'
import NavBarPhone from "./components/NavBar/NavBarPhone";
import Instrumentos from "./components/ItemListContainer/Instrumentos/instrumentos";
import Home from "./components/Home/home";
import NavBar from "./components/NavBar/NavBar";
import Detail from "./components/ItemDetailContainer/ItemDetail";
import Cart from "./components/cart/cart";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Store } from "./store";
import ReactPlayer from "react-player";
import Video from "./assets/FondoEstrella.mov";

function App() {
  const [data, setData] = useState(
    localStorage.getItem("Cart")
      ? JSON.parse(localStorage.getItem("Cart"))
      : {
          items: [],
          cantidad: 0,
        }
  );

  return (
    <>
      <ReactPlayer
        style={{
          position: "absolute",
          zIndex: "-1 ",
          margin: "0px",
          bottom: "4em",
        }}
        className="video"
        url={Video}
        playing={true}
      
        muted={true}
        loop={true}

      />

      <Store.Provider value={[data, setData]}>
        <div className="App">
          <BrowserRouter>
            <header>
              <NavBar />
              <NavBarPhone />
            </header>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/cart">
                <Cart />
              </Route>
              <Route exact path="/category/:instrumentos?">
                <Instrumentos />
              </Route>
              <Route exact path="/items/:id?">
                <Detail />
              </Route>
              <Route exact path="/checkout">
                <Checkout />
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
      </Store.Provider>
    </>
  );
}

export default App;
