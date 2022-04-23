import './App.css';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {

//Aquí ira la logica

return (
  <>
<NavBar/>
<ItemListContainer greeting = "Hola Mundo"/>
</>
  );
}

export default App;