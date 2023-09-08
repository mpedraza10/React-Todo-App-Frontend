// Imports
import { useState } from "react";

// Components
import TodoList from "../TodoList/TodoList";
import Modal from "../Modal/Modal";

// Styles
import "./TodoCont.css";

const TodoCont = () => {
	// State
	const [isModalVisible, setModalVisible] = useState(false);

	// Helper functions
	const toggleModal = () => {
		setModalVisible(!isModalVisible);
	};

	return (
		<div className="todo-container">
			<div className="controls">
				<button className="btn primary" onClick={toggleModal}>
					Add Todo
				</button>
				<Modal isVisible={isModalVisible} onClose={toggleModal} />
			</div>
			<TodoList />
		</div>
	);
};

export default TodoCont;
