// Components
import Header from "./components/Header/Header";
import TodoList from "./components/TodoCont/TodoCont";

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
