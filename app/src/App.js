import logo from './logo.svg';
import './App.css';
import Stuff from './common/stuff';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Stuff />
      </header>
    </div>
  );
}

export default App;
