import React from "react";

export default class Counter extends React.Component {
	state = { count: 0 };

	getBadgeClassName() {
		const { count } = this.state;
		return `badge bg-${count === 0 ? "danger" : "secondary"}`;
	}

	handleIncrement = (step = 10) => {
		this.setState((prev) => ({ count: prev.count + step }));
	};

	render() {
		const { count } = this.state;

		return (
			<div className="mt-2">
				<span className={this.getBadgeClassName()}>{count ? count : "Zero"}</span>
				<button onClick={() => this.handleIncrement(20)} className="btn btn-primary ms-2">
					Increment
				</button>
			</div>
		);
	}
}
