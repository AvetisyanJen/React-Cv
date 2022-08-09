import './App.css';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
   <Header/>
   <Home/>
   <About/>
    </div>
  );
}

export default App;