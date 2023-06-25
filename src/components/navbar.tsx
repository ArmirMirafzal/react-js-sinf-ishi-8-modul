import React, { Component } from "react";

interface NavbarProps {
	amount: number;
}

export default class Navbar extends Component<NavbarProps> {
	constructor(props: NavbarProps) {
		super(props);
		console.log("[NavBar] - Constructor");
	}

	componentDidMount(): void {
		console.log("[NavBar] - Did Mount");
	}

	render() {
		console.log("[NavBar] - Render");
		const { amount } = this.props;
		return (
			<nav className="navbar navbar-light bg-light">
				<div className="container justify-content-start">
					<span className="navbar-brand mb-0 h1">PDP-G-8</span>
					{amount > 0 && <span className="badge bg-dark ms-2 ">{amount}</span>}
				</div>
			</nav>
		);
	}
}
