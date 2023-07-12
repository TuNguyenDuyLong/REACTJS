const Todo = (props) => {
    //const todos = props.todos
    const { todos, title, DeleteTodo } = props;
    const handleDelete = (id) => {
        DeleteTodo(id)
    }
    return (

        <div className='container'>
            <div className='title'>
                {title}
            </div>
            {todos.map(todo => {
                return (
                    <div key={todo.id}>
                        <li className='todo-child'>{todo.title}
                            &nbsp; &nbsp;    <span><button onClick={() => handleDelete(todo.id)}>X</button></span></li>
                    </div>)
            })}
            <hr />
        </div>

    )
}
export default Todo

