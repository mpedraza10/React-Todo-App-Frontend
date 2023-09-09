// Imports
import { useState, useEffect } from "react";
import axios from "axios";

// Components
import TodoList from "../TodoList/TodoList";
import Modal from "../Modal/Modal";

// Styles
import "./TodoCont.css";

const TodoCont = () => {
	// State
	const [todos, setTodos] = useState([]);
	const [isModalVisible, setModalVisible] = useState(false);

	// Helper functions
	const toggleModal = () => {
		setModalVisible(!isModalVisible);
	};

	// Methods
	const addTodo = async (todoData) => {
		try {
			const response = await axios.post(
				"http://localhost:5001/todos",
				todoData
			);

			setTodos([...todos, response.data]);
		} catch (error) {
			console.log(error);
		}
	};

	const updateTodo = async (todoId, todoData) => {
		try {
			const response = await axios.put(
				`http://localhost:5001/todos/${todoId}`,
				todoData
			);

			setTodos((prevList) =>
				prevList.map((item) => (item._id === todoId ? response.data : item))
			);
		} catch (error) {
			console.log(error);
		}
	};

	const deleteTodo = async (todoId) => {
		try {
			await axios.delete(`http://localhost:5001/todos/${todoId}`);

			setTodos((prevList) => prevList.filter((item) => item._id !== todoId));
		} catch (error) {
			console.log(error);
		}
	};

	// Effects
	useEffect(() => {
		const getTodos = async () => {
			try {
				const response = await axios.get("http://localhost:5001/todos");

				setTodos(response.data);
			} catch (error) {
				console.log(error);
			}
		};
		getTodos();
	}, []);

	return (
		<div className="todo-container">
			<div className="controls">
				<button className="btn primary" onClick={toggleModal}>
					Add Todo
				</button>
				<Modal
					type="add"
					isVisible={isModalVisible}
					onClose={toggleModal}
					addTodo={addTodo}
				/>
			</div>
			<TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
		</div>
	);
};

export default TodoCont;
