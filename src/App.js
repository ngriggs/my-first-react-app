import React, { Component } from "react";
import Overview from "./components/Overview";
import NavBar from "./components/NavBar";
import uniqid from "uniqid";
import "./App.css";
import { Header } from "./components/Header";
import { Counter } from "./components/Counter";
import ImageSlider from "./components/ImagerSlider";
import MyForm from "./components/MyForm";
import ValidationForm from "./components/ValidationForm";
import FetchRandomUser from "./components/FetchRandomUser";
import TodoListPersonal from "./components/TodoListPersonal";
import TodoList from "./components/TodoList";

class App extends Component {
	constructor() {
		super();

		this.state = {
			task: {
				text: "",
				id: uniqid(),
			},
			tasks: [],
			visible: true,
			counterVisible: true,
		};
	}
	handleChange = (e) => {
		this.setState({
			task: {
				text: e.target.value,
				id: this.state.task.id,
			},
		});
	};
	onSubmitTask = (e) => {
		e.preventDefault();
		this.setState({
			tasks: this.state.tasks.concat(this.state.task),
			task: {
				text: "",
				id: uniqid(),
			},
		});
	};
	render() {
		const { task, tasks } = this.state;

		const buttonText = this.state.visible
			? "hide image slider"
			: "show image slider";

		const counterToggle = this.state.counterVisible
			? "hide counter"
			: "show counter";

		return (
			<div className="App">
				{/* <Header />
				<NavBar title="Hello from App" />
				<form onSubmit={this.onSubmitTask}>
					<label htmlFor="taskInput">Enter task</label>
					<input
						onChange={this.handleChange}
						value={task.text}
						type="text"
						id="taskInput"
					/>
					<button type="submit">Add Task</button>
				</form>
				<Overview tasks={tasks} />

				<div className={this.state.counterVisible ? "visible" : "hidden"}>
					<Counter />
				</div>

				<button
					onClick={() => {
						this.setState({
							counterVisible: !this.state.counterVisible,
						});
					}}
				>
					{counterToggle}
				</button>
				{this.state.visible ? <ImageSlider /> : null}
				<button
					onClick={() => {
						this.setState({
							visible: !this.state.visible,
						});
					}}
				>
					{buttonText}
				</button>

				<MyForm />
				<ValidationForm />
				<FetchRandomUser /> */}
				{/* <TodoListPersonal /> */}
				<TodoList />
			</div>
		);
	}
}

export default App;
