import NavBarPhone from './components/NavBar/NavBarPhone';
import Guitarra from './components/ItemListContainer/Guitarras/guitarras';
import NavBar from './components/NavBar/NavBar'
import Detail from './components/ItemDetailContainer/ItemDetail';



function App() {
  const sectionToShow = (section) => {
    switch(section) {
      case 'Guitarra': return <Guitarra />;
      // case 'Category': return <Category />;
      case 'Detail': return <Detail />;
      default: return <Guitarra/>
    }
  }

  return (
    <> 
         <div className="App">
      <header>
        <NavBar />
        <NavBarPhone />
      </header>

      {sectionToShow('Detail')}
          </div>
      
    </>
  );

}

export default App;