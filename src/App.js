import logo from './logo.svg';
import './App.css';
import Menu from "./components/Menu/menu";
import Episodios from './components/Episodios/episodios';
import Home from './components/Home/home';
import Personajes from './components/Personajes/personajes';
import Citas from './components/Citas/citas';
import Footer from './components/Footer/footer';
import { Route, Routes } from 'react-router-dom';

function App() {
  /*
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
  */

  return (
    <div className="App">
      <Menu/>
      <main>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/personajes' element={<Personajes/>} />
          <Route path='/citas' element={<Citas/>} />
          <Route path='/episodios' element={<Episodios/>} />
        </Routes>
      </main>   
      <Footer/>
    </div>
  );
}

export default App;
