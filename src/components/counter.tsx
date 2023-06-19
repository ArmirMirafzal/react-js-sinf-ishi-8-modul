import React from "react";
import { ICount } from "../app";

interface CounterProps {
	count: ICount;
	onIncrement: (stepID: number, step?: number) => void;
}

export default class Counter extends React.Component<CounterProps, {}> {
	getBadgeClassName() {
		const { count } = this.props;
		return `badge bg-${count.value === 0 ? "danger" : "secondary"}`;
	}

	handleIncrement = (step = 10) => {
		this.props.onIncrement(step);
	};

	render() {
		const { count } = this.props;

		return (
			<div className="mt-2">
				<span className={this.getBadgeClassName()}>{count.value ? count.value : "Zero"}</span>
				<button onClick={() => this.handleIncrement(count.id)} className="btn btn-primary ms-2">
					-
				</button>
				<button onClick={() => this.handleIncrement(count.id)} className="btn btn-primary ms-2">
					+
				</button>
				<button onClick={() => this.handleIncrement(count.id)} className="btn btn-primary ms-2">
					❌
				</button>
			</div>
		);
	}
}
