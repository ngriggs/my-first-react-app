import React from "react";
class DeleteButton extends React.Component {
	// need to pass in either the index of the
	// task that we want to delete or the id of the task
	handleClick(rows) {
		console.log(rows.id);
		this.props.myFunc();
	}
	render() {
		return (
			<div>
				<button onClick={() => this.handleClick(this.props.tasks)}>
					Delete
				</button>
			</div>
		);
	}
}
export default DeleteButton;
