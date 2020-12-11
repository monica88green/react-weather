 import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
       <h1>Hello from React Weather</h1>
      </header>
      <Loader
         type="Puff"
         color="#00BFFF"
         height={100}
         width={100}
         timeout={3000} 
      />
    </div>
  );
}

export default App;
