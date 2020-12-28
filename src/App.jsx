import NavBarPhone from './components/NavBar/NavBarPhone';
import Guitarra from './components/ItemListContainer/Guitarras/guitarras';
import NavBar from './components/NavBar/NavBar'
import Detail from './components/ItemDetailContainer/ItemDetail';
import {BrowserRouter, Switch, Route } from 'react-router-dom'


function App() {

  return (
    <> 
         <div className="App">
      <header>
        <NavBar />
        <NavBarPhone />
      </header>

       <BrowserRouter>
      <Switch>
        <Route exact path="/">
        <Guitarra />
        </Route>
        <Route path="/Guitarras">
        <Guitarra />
        </Route>
        <Route path="/Detail">
          <Detail/>
        </Route>
      </Switch>
    </BrowserRouter>
          </div>
      
    </>
  );

}

export default App;