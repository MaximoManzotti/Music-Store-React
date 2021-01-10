import { useState } from "react";
import NavBarPhone from "./components/NavBar/NavBarPhone";
import Instrumentos from "./components/ItemListContainer/Instrumentos/instrumentos";
import Home from "./components/Home/home";
import NavBar from "./components/NavBar/NavBar";
import Detail from "./components/ItemDetailContainer/ItemDetail";
import Cart from "./components/cart/cart"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Store } from "./store";


function App() {
  const [data, setData] = useState(localStorage.getItem('Cart') ? JSON.parse(localStorage.getItem('Cart')) : {
        items: [], 
    cantidad: 0
  });
  

  return (
    <>
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
              <Route exact path='/cart'>
               <Cart/> 
             </Route>
              <Route exact path="/category/:instrumentos?">
                <Instrumentos />
              </Route>
           
              <Route exact path="/items/:id?">
                <Detail />
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
      </Store.Provider>
    </>
  );
}

export default App;
