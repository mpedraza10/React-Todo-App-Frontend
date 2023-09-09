// Imports
import { useState } from "react";

// Styles
import "./AddTodoForm.css";

const AddTodoForm = ({ onCancel, addTodo }) => {
	const [task, setTask] = useState("");
	const [status, setStatus] = useState(false);

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

		// Call method to post new todo
		await addTodo(todoData);

		// Set back to default values
		setTask("");
		setStatus(false);

		// Close modal
		onCancel();
	};

	return (
		<form className="todo-form" onSubmit={handleSubmit}>
			<h2>Add your task</h2>
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
					Add Task
				</button>
				<button className="btn secondary" onClick={handleCancel}>
					Cancel
				</button>
			</div>
		</form>
	);
};

export default AddTodoForm;
