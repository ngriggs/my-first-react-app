import React from "react";

export class Counter extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
		};
	}
	handleIncrementButtonClick = () => {
		console.log("increment button clicked");
		this.setState({
			count: this.state.count + 1,
		});
	};
	handleDecrementButtonClick = () => {
		console.log("decrement button clicked");
		this.setState({
			count: this.state.count - 1,
		});
	};
	render() {
		return (
			<div>
				<div>count: {this.state.count}</div>
				<button onClick={this.handleIncrementButtonClick}>Increment</button>
				<button onClick={this.handleDecrementButtonClick}>Decrement</button>
			</div>
		);
	}
}
