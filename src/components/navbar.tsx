import React, { Component } from "react";

export default class NavBar extends Component<{ amount: number }, {}> {
	render() {
    const {amount} = this.props
		return (
			<>
				<nav className="navbar bg-body-tertiary">
					<div className="container justify-content-start">
						<span className="navbar-brand mb-0 h1">Navbar</span>
						{amount > 0 && <span className="badge bg-dark">{this.props.amount}</span>}
					</div>
				</nav>
			</>
		);
	}
}
