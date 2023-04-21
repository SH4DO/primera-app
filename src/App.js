import logo from './logo.svg';
import './App.css';
import Menu from "./components/Menu/menu";
import Episodios from './components/episodios';
import Home from './components/Home/home';
import Personajes from './components/personajes';
import Citas from './components/citas';
import Footer from './components/Footer/footer';

function App() {
  const currentURL = window.location.pathname;

  function renderContent(){
    switch(currentURL) {
      case "/": return <Home/>;
      case "/personajes": return <Personajes/>;
      case "/citas": return <Citas/>;
      case "/episodios": return <Episodios/>;
      default: return <Home/>;
    }
  }

  return (
    <div className="App">
      <Menu/>
      <main>{renderContent()}</main>   
      <Footer/>
    </div>
  );
}

export default App;
