import logo from './logo.svg';
import './App.css';
import TodoInput from './component/TodoInput';
import TodoList from './component/TodoList';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Todo List with Pub-Sub Pattern</h1>
        <TodoInput />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
