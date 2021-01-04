import NavBarPhone from './components/NavBar/NavBarPhone';
import Instrumentos from './components/ItemListContainer/Instrumentos/instrumentos';
import Home from './components/Home/home'
import NavBar from './components/NavBar/NavBar'
import Detail from './components/ItemDetailContainer/ItemDetail';
import {BrowserRouter, Switch, Route } from 'react-router-dom'


function App() {

  return (
    <> 
         <div className="App">
       <BrowserRouter>
         <header>
        <NavBar />
        <NavBarPhone/>
          </header>
      <Switch>
      <Route exact path="/">
        <Home/>
        </Route>
       <Route exact path="/category/:instrumentos?">
        <Instrumentos/>
        </Route>
{/* <Route exact path='/cart'>
           <Cart/> 
        </Route> */}
         <Route exact path="/items/:id?">
        <Detail/>
        </Route>
      </Switch>
    </BrowserRouter>
    

          </div>
      
    </>
  );

}

export default App;