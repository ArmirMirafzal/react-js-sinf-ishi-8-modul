import React, { Component } from "react";

export default class Counter extends Component {
	render() {
  const { badgeName } = this.props;
		const { children } = this.props;
  console.log(this.props);
		return (
			<>
				<div className="count mt-2">
					<span className={badgeName ? badgeName : "badge bg-danger"}>0</span>
					<div className="btn btn-primary">click me</div>
					{children}
				</div>
			</>
		);
	}
}
