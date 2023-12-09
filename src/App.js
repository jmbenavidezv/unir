import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Router from './components/Router';


function App() {
  return (
    <div className="App">
     <div className='App-body'>     
      <Router />
     
     </div>
     
    <div className='App-footer'>
      <br/>
      <p>Desarrollado Por Johana Marcela Benavidez</p>
      <p>Especialización de Ingeniería de Software - UNIR</p>
      
    </div>
     
    </div>
      
  );
}

export default App;