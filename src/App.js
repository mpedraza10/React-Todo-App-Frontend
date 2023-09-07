// Components
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";

const App = () => {
	return (
		<>
			<Header />
			<section>
				<TodoList />
			</section>
		</>
	);
};

export default App;
