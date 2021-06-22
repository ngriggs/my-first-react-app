import React, { Component } from "react";
import DeleteButton from "./DeleteButton";

class Overview extends Component {
	handleDeleteClick = () => {
		console.log(this.props.tasks);
	};
	render() {
		const { tasks } = this.props;
		const handleDelete = () => {
			console.log("test");
		};

		return (
			<ul>
				{tasks.map((tasks, index) => {
					return (
						<li key={tasks.id}>
							{index + 1} {tasks.text}
							<button onClick={this.handleDeleteClick}>
								Delete Function Button
							</button>
							<DeleteButton tasks={tasks} index={index} myFunc={handleDelete} />
						</li>
					);
				})}
			</ul>
		);
	}
}

export default Overview;
