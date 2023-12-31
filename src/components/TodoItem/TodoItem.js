// Imports
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

// Components
import Modal from "../Modal/Modal";

// Style
import "./TodoItem.css";

// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashAlt } from "@fortawesome/free-regular-svg-icons";

const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
	const [todoDate, setTodoDate] = useState("");
	// const [isCompleted, setIsCompleted] = useState(false);
	const [updateModalToggle, setUpdateModalToggle] = useState(false);

	// Helper function
	const formatDate = (date) => {
		if (!(date instanceof Date)) {
			throw new Error("Invalid date input");
		}

		const year = date.getFullYear();
		const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
		const day = String(date.getDate()).padStart(2, "0");
		let hours = date.getHours();
		const minutes = String(date.getMinutes()).padStart(2, "0");
		const ampm = hours >= 12 ? "PM" : "AM";

		// Convert to 12-hour format
		if (hours > 12) {
			hours -= 12;
		}

		return `${day}-${month}-${year}, ${hours}:${minutes} ${ampm}`;
	};

	const handleUpdate = () => {
		setUpdateModalToggle(!updateModalToggle);
	};

	// Effects
	useEffect(() => {
		// Format received date
		const retrievedDate = new Date(todo.date);
		const formattedDate = formatDate(retrievedDate);
		setTodoDate(formattedDate);
	}, []);

	return (
		<>
			<li className="todo-item">
				<input
					type="checkbox"
					className="checkbox-style" // Add this class for styling
					checked={todo.completed}
					onChange={() =>
						updateTodo(todo._id, {
							text: todo.text,
							completed: !todo.completed,
						})
					}
				/>
				<div className="content">
					<div className="info">
						<h2 className={todo.completed ? "complete" : ""}>{todo.text}</h2>
						<span className={todo.completed ? "complete" : ""}>{todoDate}</span>
					</div>
					<div className="btns-cont">
						<button className="btn icon edit-btn" onClick={handleUpdate}>
							<FontAwesomeIcon icon={faPenToSquare} />
						</button>
						<button
							className="btn icon delete-btn"
							onClick={() => {
								Swal.fire({
									title: "Do you want to delete the task?",
									icon: "question",
									confirmButtonText: "Delete",
									showCancelButton: true,
								}).then((result) => {
									/* Read more about isConfirmed, isDenied below */
									if (result.isConfirmed) {
										deleteTodo(todo._id);
									} else if (result.isDenied) {
										return;
									}
								});
							}}
						>
							<FontAwesomeIcon icon={faTrashAlt} />
						</button>
					</div>
				</div>
			</li>
			<Modal
				type="update"
				isVisible={updateModalToggle}
				onClose={handleUpdate}
				updateTodo={updateTodo}
				todo={todo}
			/>
		</>
	);
};

export default TodoItem;
