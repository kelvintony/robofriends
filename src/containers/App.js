//This is the main component that houses all other components
import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import "./App.css";

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchfield: ""
		};
	}

	componentDidMount() {
		// fetching data from an API
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => {
				return response.json();
			})
			.then((users) => {
				this.setState({ robots: users });
			});
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value });
	};
	render() {
		const filteredRobots = this.state.robots.filter((robot) => {
			return robot.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase());
		});
		//if there will be delay in rendering from an api add an
		//if statement
		if (this.state.robots.length === 0) {
			return <h1>Loading</h1>;
		} else {
			return (
				//a component must return a single element so wrap all in a div
				//you can remove this scroll component if u like
				//And leave the CardList component

				<div className="tc">
					<h1 className="f1">Robotic Friends</h1>
					<SearchBox searchChange={this.onSearchChange} />
					<Scroll>
						<ErrorBoundary>
							<CardList robots={filteredRobots} />
						</ErrorBoundary>
					</Scroll>
				</div>
			);
		}
	}
}

export default App;
