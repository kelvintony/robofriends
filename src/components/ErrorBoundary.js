import React, { Component } from "react";

class ErrorBoundary extends Component {
	constructor() {
		super();
		this.state = {
			hasError: false
		};
	}
	//this handles error coming from any component
	componentDidCatch(error, info) {
		this.setState({ hasError: true });
	}

	render() {
		if (this.state.hasError) {
			return <h1>Oops! something bad happened</h1>;
		} else {
			return this.props.children;
		}
	}
}

export default ErrorBoundary;
