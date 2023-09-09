// Imports
import { useEffect } from "react";

// Imports
import { useState } from "react";

// Styles
import "./AddTodoForm.css";

const AddTodoForm = ({ type, onCancel, addTodo, updateTodo, todo }) => {
	const [task, setTask] = useState(type === "add" ? "" : todo.text);
	const [status, setStatus] = useState(type === "add" ? false : todo.completed);

	// Helper functions
	const handleCancel = (e) => {
		e.preventDefault();
		onCancel();
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const todoData = {
			text: task,
			completed: status,
		};

		// Call method to post new todo or update depending on type
		if (type === "add") {
			await addTodo(todoData);

			// Set back to default values
			setTask("");
			setStatus(false);
		} else {
			await updateTodo(todo._id, todoData);
		}

		// Close modal
		onCancel();
	};

	return (
		<form className="todo-form" onSubmit={handleSubmit}>
			<h2>{type === "add" ? "Add" : "Update"} your task</h2>
			<div>
				<label htmlFor="text">Title:</label>
				<input
					id="text"
					type="text"
					value={task}
					onChange={(e) => setTask(e.target.value)}
				/>
			</div>
			<div>
				<label htmlFor="">Status:</label>
				<select
					name="status"
					id="status"
					value={status}
					onChange={(e) => {
						const selectedValue = e.target.value;
						const isChecked = selectedValue === "true";
						setStatus(isChecked);
					}}
				>
					<option value={false}>Incomplete</option>
					<option value={true}>Complete</option>
				</select>
			</div>
			<div className="btns-container">
				<button type="submit" className="btn primary">
					{type === "add" ? "Add" : "Update"} Task
				</button>
				<button className="btn secondary" onClick={handleCancel}>
					Cancel
				</button>
			</div>
		</form>
	);
};

export default AddTodoForm;
