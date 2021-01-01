import NavBarPhone from './components/NavBar/NavBarPhone';
import Guitarra from './components/ItemListContainer/Guitarras/guitarras';
import Bajos from './components/ItemListContainer/Bajos/Bajos'
import Baterias from './components/ItemListContainer/Baterias/baterias'
import Accesorios from './components/ItemListContainer/Accesorios/accesorios'
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
      <Route exact path="/category/accesorios">
        <Accesorios/>
        </Route>
        <Route exact path="/category/accesorios/:id?">
        <Detail/>
        </Route>
      <Route exact path="/category/baterias">
        <Baterias/>
        </Route>
        <Route exact path='/category/baterias/:id?'>
          <Detail/>
        </Route>
      <Route exact path="/category/bajos">
        <Bajos/>
        </Route>
        <Route exact path="/category/guitarras">
        <Guitarra/>
        </Route>
        <Route exact path='/category/Bajos/:id?'>
          <Detail/>
        </Route>
        <Route exact path='/category/guitarras/:id?'>
          <Detail/>
        </Route>
        <Route exact path='/cart'>
          {/* <Cart/> */}
        </Route>
      </Switch>
    </BrowserRouter>
    

          </div>
      
    </>
  );

}

export default App;