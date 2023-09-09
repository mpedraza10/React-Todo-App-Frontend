// Imports
import { useEffect, useState } from "react";

// Style
import "./TodoItem.css";

// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashAlt } from "@fortawesome/free-regular-svg-icons";

const TodoItem = ({ todo, deleteTodo }) => {
	const [todoDate, setTodoDate] = useState("");
	const [isCompleted, setIsCompleted] = useState(false);

	// Helper function
	const formatDate = (date) => {
		if (!(date instanceof Date)) {
			throw new Error("Invalid date input");
		}

		const year = date.getFullYear();
		const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
		const day = String(date.getDate()).padStart(2, "0");
		const hours = String(date.getHours()).padStart(2, "0");
		const minutes = String(date.getMinutes()).padStart(2, "0");
		const seconds = String(date.getSeconds()).padStart(2, "0");

		return `${day}-${month}-${year}, ${hours}:${minutes}:${seconds}`;
	};

	// Effects
	useEffect(() => {
		// Format received date
		const retrievedDate = new Date(todo.date);
		const formattedDate = formatDate(retrievedDate);
		setTodoDate(formattedDate);

		// Keep track of checked process
		setIsCompleted(todo.completed);
	}, []);

	return (
		<li className="todo-item">
			<input
				type="checkbox"
				className="checkbox-style" // Add this class for styling
				checked={isCompleted}
				onChange={() => setIsCompleted(!isCompleted)}
			/>
			<div className="content">
				<div className="info">
					<h2 className={isCompleted ? "complete" : ""}>{todo.text}</h2>
					<span className={isCompleted ? "complete" : ""}>{todoDate}</span>
				</div>
				<div className="btns-cont">
					<button className="btn icon edit-btn">
						<FontAwesomeIcon icon={faPenToSquare} />
					</button>
					<button
						className="btn icon delete-btn"
						onClick={() => deleteTodo(todo._id)}
					>
						<FontAwesomeIcon icon={faTrashAlt} />
					</button>
				</div>
			</div>
		</li>
	);
};

export default TodoItem;
