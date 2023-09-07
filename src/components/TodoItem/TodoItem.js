// Style
import "./TodoItem.css";

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
					<button>D</button>
					<button>E</button>
				</div>
			</div>
		</li>
	);
};

export default TodoItem;
