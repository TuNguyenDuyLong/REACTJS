import './App.css';
import logo from './logo.svg'
//import Test from './components/AddComponent'
import Form from '../src/components/form'
function App() {
  return (
    <div className="App">
      <header className="App header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello word with React.js: tndragon01@gmail.com
        </p>
        {/* <Test /> */}
        <Form />

      </header>

    </div>
  );
}

export default App;
