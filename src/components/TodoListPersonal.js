import React from "react";

/*
TodoMVC
1. add todo
2. display todos
3. cross off todo
4. show number of active todos
5. filter all/active/complete
6. delete todo
7. delete all complete
    7.1 only show if at least one is complete
8. button to toggle all on/off
*/

export default class TodoListPersonal extends React.Component {
	state = {
		todo: {
			title: "",
			completed: false,
		},
		todos: [],
	};
	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({
			todos: this.state.todos.concat(this.state.todo.title),
			todo: {
				title: "",
			},
		});
	};
	handleChange = (event) => {
		this.setState({
			todo: {
				title: event.target.value,
			},
		});
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<div>
						<input
							name="todo title"
							value={this.state.todo.title}
							onChange={this.handleChange}
						/>
					</div>
					<button type="submit">submit</button>
				</form>
				<ul>
					{this.state.todos.map((todo) => (
						<li>{todo}</li>
					))}
				</ul>
			</div>
		);
	}
}
