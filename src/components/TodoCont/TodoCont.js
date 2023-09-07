// Components
import TodoList from "../TodoList/TodoList";

// Styles
import "./TodoCont.css";

const TodoCont = () => {
	return (
		<div className="todo-container">
			<div className="controls">
				<button className="btn primary">Add Todo</button>
			</div>
			<TodoList />
		</div>
	);
};

export default TodoCont;
