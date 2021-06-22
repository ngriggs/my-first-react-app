import React from "react";

export default class FetchRandomUser extends React.Component {
	state = {
		loading: true,
		people: [],
		idx: 0,
	};
	async componentDidMount() {
		const url = "https://api.randomuser.me/?results=5";
		const response = await fetch(url);
		const data = await response.json();
		this.setState({ people: data.results, loading: false });
	}

	handleNext = () => {
		console.log(this.state.people.length);
		console.log(this.state.idx);
		if (this.state.idx < this.state.people.length - 1) {
			this.setState({
				idx: this.state.idx + 1,
			});
		}
	};
	render() {
		return (
			<div>
				{this.state.loading || !this.state.people ? (
					<div>loading...</div>
				) : (
					<div>
						{this.state.people.map((person) => (
							<div key={person.login.uuid}>
								<div>{person.name.title}</div>
								<div>{person.name.first}</div>
								<div>{person.name.last}</div>
								<img src={person.picture.large}></img>
							</div>
						))}
					</div>
				)}
				<button onClick={this.handleNext}>Next</button>
			</div>
		);
	}
}
