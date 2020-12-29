import NavBarPhone from './components/NavBar/NavBarPhone';
import Guitarra from './components/ItemListContainer/Guitarras/guitarras';
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
        <Route exact path="/guitarras">
        <Guitarra/>
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