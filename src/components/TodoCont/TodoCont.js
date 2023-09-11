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
	const [originalTodos, setOriginalTodos] = useState([]);
	const [isModalVisible, setModalVisible] = useState(false);
	const [selectedFilter, setSelectedFilter] = useState("all");

	// Helper functions
	const toggleModal = () => {
		setModalVisible(!isModalVisible);
	};

	const handleFilterChange = (e) => {
		const selectedValue = e.target.value;
		setSelectedFilter(selectedValue);
	};

	// Methods
	const addTodo = async (todoData) => {
		try {
			const response = await axios.post(
				"http://localhost:5001/api/todos",
				todoData
			);

			setTodos([...todos, response.data]);
			setOriginalTodos([...todos, response.data]);
		} catch (error) {
			console.log(error);
		}
	};

	const updateTodo = async (todoId, todoData) => {
		try {
			const response = await axios.put(
				`http://localhost:5001/api/todos/${todoId}`,
				todoData
			);

			setTodos((prevList) =>
				prevList.map((item) => (item._id === todoId ? response.data : item))
			);
			setOriginalTodos((prevList) =>
				prevList.map((item) => (item._id === todoId ? response.data : item))
			);
		} catch (error) {
			console.log(error);
		}
	};

	const deleteTodo = async (todoId) => {
		try {
			await axios.delete(`http://localhost:5001/api/todos/${todoId}`);

			setTodos((prevList) =>
				prevList.filter((item) => item._id !== todoId)
			);
			setOriginalTodos((prevList) =>
				prevList.filter((item) => item._id !== todoId)
			);
		} catch (error) {
			console.log(error);
		}
	};

	// Effects
	useEffect(() => {
		const getTodos = async () => {
			try {
				const response = await axios.get("http://localhost:5001/api/todos");

				setTodos(response.data);
				setOriginalTodos(response.data);
			} catch (error) {
				console.log(error);
			}
		};
		getTodos();
	}, []);

	useEffect(() => {
		if (selectedFilter === "complete") {
			const filteredTodos = originalTodos.filter(
				(item) => item.completed === true
			);
			setTodos(filteredTodos);
		} else if (selectedFilter === "incomplete") {
			const filteredTodos = originalTodos.filter(
				(item) => item.completed === false
			);
			setTodos(filteredTodos);
		} else {
			setTodos(originalTodos);
		}
	}, [selectedFilter]);

	return (
		<>
			<div className="todo-container">
				<div className="controls">
					<div>
						<select
							id="filterSelect"
							value={selectedFilter}
							onChange={handleFilterChange}
						>
							<option value="all">All</option>
							<option value="incomplete">Incomplete</option>
							<option value="complete">Complete</option>
						</select>
					</div>
					<button className="btn primary" onClick={toggleModal}>
						Add Todo
					</button>
				</div>
				<TodoList
					todos={todos}
					updateTodo={updateTodo}
					deleteTodo={deleteTodo}
				/>
			</div>
			<Modal
				type="add"
				isVisible={isModalVisible}
				onClose={toggleModal}
				addTodo={addTodo}
			/>
		</>
	);
};

export default TodoCont;
