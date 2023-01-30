import './App.css';
import Todo from './Todo';
import TodoInput from './TodoInput';
import reducer from './reducer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoInput/>
        <Todo/>
      </header>
    </div>
  );
}

export default App;
