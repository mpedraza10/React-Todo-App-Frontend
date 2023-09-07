// Components
import TodoItem from "../TodoItem/TodoItem";

// Style
import "./TodoList.css";

const TodoList = () => {
	return (
		<div className="todo-list-container">
			<ul className="list">
				<TodoItem />
				<TodoItem />
				<TodoItem />
				<TodoItem />
				<TodoItem />
				<TodoItem />
				<TodoItem />
				<TodoItem />
				<TodoItem />
				<TodoItem />
				<TodoItem />
				<TodoItem />
			</ul>
		</div>
	);
};

export default TodoList;
