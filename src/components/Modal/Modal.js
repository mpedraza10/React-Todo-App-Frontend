// Imports
import { useEffect } from "react";

// Components
import AddTodoForm from "../AddTodoForm/AddTodoForm";

// Styles
import "./Modal.css";

const Modal = ({ isVisible, onClose, addTodo }) => {
	// Effects

	// Attach a keydown event listener to the window
	useEffect(() => {
		const handleEscapeKey = (event) => {
			if (isVisible && event.key === "Escape") {
				onClose();
			}
		};

		window.addEventListener("keydown", handleEscapeKey);

		// Remove the event listener when the component unmounts
		return () => {
			window.removeEventListener("keydown", handleEscapeKey);
		};
	}, [isVisible, onClose]);

	return (
		<div className={`modal ${isVisible ? "visible" : ""}`}>
			<div className="modal-content">
				<button className="close-button" onClick={onClose}>
					&times;
				</button>
				<AddTodoForm onCancel={onClose} addTodo={addTodo} />
			</div>
		</div>
	);
};

export default Modal;
