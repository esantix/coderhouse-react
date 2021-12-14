import logo from './logo.svg';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div className="App">
      <NavBar>

      </NavBar>
      <div className="page-ctn">

        <ItemListContainer className="ItemListContainer" greeting="Welcome to our page!">

        </ItemListContainer>

      </div>
    </div>
  );
}

export default App;
