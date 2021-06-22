import React from "react";

export default class ImageSlider extends React.Component {
	state = {
		image: [
			"https://i.pinimg.com/564x/4f/1f/dc/4f1fdc2842298d2d7ccb35cca10e66bf.jpg",
			"https://i.pinimg.com/564x/81/37/dc/8137dc229c5e50b44101bce6813024df.jpg",
			"https://i.pinimg.com/564x/7f/bc/12/7fbc122f1ea1a51fa971a751c91d2ebc.jpg",
			"https://i.pinimg.com/564x/a7/dd/f2/a7ddf26c1fd10afc29a1e817319567ea.jpg",
			"https://i.pinimg.com/564x/84/db/9e/84db9e9d0a94583af7666940299a0bac.jpg",
		],
		idx: 0,
	};

	handleNext = () => {
		this.setState({
			idx: this.state.idx + 1,
		});
	};
	handlePrevious = () => {
		this.setState({
			idx: this.state.idx - 1,
		});
	};

	render() {
		return (
			<div>
				<button onClick={this.handlePrevious}>previous</button>

				<img
					style={{ width: 400, height: 400 }}
					src={this.state.image[this.state.idx]}
				></img>
				<button onClick={this.handleNext}>next</button>
			</div>
		);
	}
}
