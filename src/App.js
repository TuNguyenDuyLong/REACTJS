import './App.css';
import logo from './logo.svg'
//import Test from './components/AddComponent'
// import Form from '../src/components/form'
import Nav from '../src/views/Nav.js'
import { useState, useEffect } from 'react'
import Todo from './views/Todo'
const App = () => { // class
  //let name = "long" //string \\
  let [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [todos, setTodos] = useState([
    { id: '1', title: 'Watching TV', type: 'Long' },
    { id: '2', title: 'Playing game', type: 'Long' },
    { id: '3', title: 'Doing homework', type: 'new' },
    { id: '4', title: 'Reading book', type: 'new' }
  ])
  useEffect(() => {
    console.log('run use Effect')
  }, [address])
  useEffect(() => {
    console.log('run use Todos')
  }, [todos])
  const handleEventClick = (event) => {
    if (!address) {
      alert('emtpy input !!!')
      return
    }
    //setName(address)
    let newTodo = { id: Math.floor(Math.random() * 100 + 1), title: address, type: 'Long' }
    setTodos([...todos, newTodo])
    setAddress('')
  }
  const handleChangeInput = (event) => {
    setAddress(event.target.value)
  }
  const DeleteTodo = (id) => {
    let currentTodo = todos;
    currentTodo = currentTodo.filter(item => item.id !== id)
    setTodos(currentTodo)
  }
  return (
    <div className="App">

      <header className="App header">
        {/* <Form /> */}
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello word with React.js: tndragon01@gmail.com
        </p>
        <Todo
          todos={todos}
          title='All todos'
          DeleteTodo={DeleteTodo} />
        <Todo
          todos={todos.filter(item => item.type === 'Long')}
          title={`Long's todos`}
          DeleteTodo={DeleteTodo} />
        <input type='text' value={address} onChange={(event) => { handleChangeInput(event) }} />
        <div><button type='button' onClick={(event) => { handleEventClick(event) }}>Click me !!!</button></div>
      </header>
    </div>

  );
}

export default App;
