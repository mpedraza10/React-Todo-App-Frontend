// Components
import TodoItem from "../TodoItem/TodoItem";

// Style
import "./TodoList.css";

const TodoList = ({ todos, deleteTodo }) => {
	return (
		<div className="todo-list-container">
			<ul className="list">
				{todos.length > 0 ? (
					todos.map((todo) => (
						<TodoItem key={todo._id} todo={todo} deleteTodo={deleteTodo} />
					))
				) : (
					<div style={{ textAlign: "center" }}>
						<h3>Yout have no tasks at the moment!</h3>
					</div>
				)}
			</ul>
		</div>
	);
};

export default TodoList;
