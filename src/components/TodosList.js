import TodoItem from './TodoItem';

const TodosList = (props) => {

    return (
      <ul>
        {props.todos.map(todo =>(
            <TodoItem
              key={todo.id} todo={todo}
              clickfunc = {props.handleChangeProps}
              deletefunction={props.deleteTodoProps}
              updateitem={props.setUpdate}
             />
        ))}
      </ul>
    )
  }

  export default TodosList