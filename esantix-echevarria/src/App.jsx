import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartContextProvider } from './contexts/CartContext';
import Cart from './components/Cart';

function App() {
  return (
    <CartContextProvider>
      <div className="App">

        <BrowserRouter>
          <NavBar />
          <Routes>

            <Route path="/" exact element={
              <ItemListContainer className="ItemListContainer" greeting="Welcome to our page!">
              </ItemListContainer>} >
            </Route>

            {/* <Route path="/category/:id" exact element={ <ItemListContainer />} >
          </Route> */}

            <Route path="/item/:id" exact element={<ItemDetailContainer />} >
            </Route>

            <Route path="/cart" exact element={<Cart></Cart>} >
            </Route>



          </Routes>
        </BrowserRouter>
        <div className="page-ctn">

        </div>
      </div>
    </CartContextProvider>
  );
}

export default App;


// >>Consigna:
// Configura en App.js el routing usando un BrowserRouter de tu aplicación con react-router-dom
// Aspectos a incluir en el entregable:
// Rutas a configurar
// ‘/’ navega a <ItemListContainer />
// ‘/category/:id’  <ItemListContainer />
// ‘/item/:id’ navega a <ItemDetailContainer />
// Links a configurar
// Clickear en el brand debe navegar a ‘/’
// Clickear un Item.js debe navegar a /item/:id
// Clickear en una categoría del navbar debe navegar a /category/:categoryId 
// Para finalizar integra los parámetros de tus async-mocks para reaccionar a :itemId y :categoryId ¡utilizando efectos y los hooks de parámetros que vimos en clase! Si te encuentras en una categoría deberías poder detectar la navegación a otra categoría y volver a cargar los productos que correspondan a dicha categoría


// >Además:
// Deberás corroborar que tu proyecto cuente con:
// Navbar con cart
// Catálogo
// Detalle de producto
// Incluir:
// Archivo readme.md


// A tener en cuenta: en la Rúbrica de Evaluación (ubicada en la carpeta de la camada) encontrarás un mayor detalle respecto a qué se tendrá en cuenta para la corrección.
// Importante: La entrega intermedia no supone la realización de un archivo aparte o extra; marca que en este momento se hará una revisión más integral
