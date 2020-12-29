import NavBarPhone from './components/NavBar/NavBarPhone';
import Guitarra from './components/ItemListContainer/Guitarras/guitarras';
import Bajos from './components/ItemListContainer/Bajos/Bajos'
import Baterias from './components/ItemListContainer/Baterias/baterias'
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
      <Route exact path="/baterias">
        <Baterias/>
        </Route>
      <Route exact path="/bajos">
        <Bajos/>
        </Route>
        <Route exact path="/guitarras">
        <Guitarra/>
        </Route>
        <Route exact path='/Bajos/:id?'>
          <Detail/>
        </Route>
        <Route exact path='/guitarras/:id?'>
          <Detail/>
        </Route>
      </Switch>
    </BrowserRouter>
    

          </div>
      
    </>
  );

}

export default App;