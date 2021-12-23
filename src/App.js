import Item from './components/Item/'
import Card from './components/Card/'
import './App.css' 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>Aplicação com React</h1>
        <ul>
          <Item texto='GitHub'/>
        </ul>
        <Card/>
      </header>
    </div>
  );
}

export default App;
