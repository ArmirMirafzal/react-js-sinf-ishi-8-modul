import React, { Component } from "react";
import { Counter } from "./components";

export interface ICount {
	id: number;
	value: number;
}
interface AppProps {}
interface AppState {
	counters: ICount[];
}
export default class App extends Component<AppProps, AppState> {
	state = {
		counters: [
			{ id: 1, value: 10 },
			{ id: 2, value: 20 },
			{ id: 3, value: 0 },
			{ id: 4, value: 5 },
		],
	};

	handleReset = () => {
		this.setState(({ counters }) => ({
			counters: counters.map((count) => ({ ...count, value: 0 })),
		}));
	};

	handleIncrement = (countID: number, step = 10) => {
		console.log("countID = ", countID);
		// this.setState((prev) => ({ counters: prev.counters.map((count) => count + step) }));
	};

	render() {
		const { counters } = this.state;
		return (
			<main className="container">
				<button className="my-2 btn btn-primary" onClick={this.handleReset}>
					Reset
				</button>
				{counters.map((count, idx) => (
					<Counter key={idx} count={count} onIncrement={this.handleIncrement} />
				))}
			</main>
		);
	}
}
