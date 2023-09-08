// Style
import "./TodoItem.css";

// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashAlt } from "@fortawesome/free-regular-svg-icons";

const TodoItem = () => {
	return (
		<li className="todo-item">
			<input
				type="checkbox"
				className="checkbox-style" // Add this class for styling
			/>
			<div className="content">
				<div className="info">
					<h2>Learn react!</h2>
					<span>3:00 PM, 01/01/2024</span>
				</div>
				<div className="btns-cont">
					<button className="btn icon edit-btn">
						<FontAwesomeIcon icon={faPenToSquare} />
					</button>
					<button className="btn icon delete-btn">
						<FontAwesomeIcon icon={faTrashAlt} />
					</button>
				</div>
			</div>
		</li>
	);
};

export default TodoItem;
