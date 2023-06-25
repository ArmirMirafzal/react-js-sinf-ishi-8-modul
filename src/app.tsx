import React, { Component } from "react";
import Counters from "./components/counters";
import NavBar from "./components/navbar";

export interface ICount {
	id: number;
	value: number;
}
export interface AppProps {}
export interface AppState {
	counters: ICount[];
}

export enum TYPE {
	INCREMENT,
	DECREMENT,
	DELETE,
}

export default class App extends Component<AppProps, AppState> {
	state = {
		counters: [
			{ id: 1, value: 1 },
			{ id: 2, value: 2 },
		],
	};

	constructor(props: AppProps) {
		super(props);
		console.log("[App] - Constructor");
	}

	handleReset = () => {
		this.setState(({ counters }) => ({
			counters: counters.map((count) => ({ ...count, value: 0 })),
		}));
	};

	handleAction = (countID: number, actionType: TYPE) => {
		switch (actionType) {
			case TYPE.DELETE: {
				this.setState((prev) => ({
					counters: prev.counters.filter((count) => count.id !== countID),
				}));
				break;
			}
			default: {
				const counters = [...this.state.counters];
				const countIdx = counters.findIndex((count) => count.id === countID);
				const count = counters[countIdx];
				if (actionType === TYPE.DECREMENT && count.value <= 0) return;
				count.value += actionType === TYPE.INCREMENT ? 1 : -1;

				this.setState({ counters });
			}
		}
	};

	componentDidMount(): void {
		console.log("[App] - Did Mound ");
	}


	render() {
		console.log("[App] - Render");

		const { counters } = this.state;
		return (
			<div>
				<NavBar amount={counters.filter((count) => count.value > 0).length} />
				<Counters
					onAction={this.handleAction}
					onReset={this.handleReset}
					counters={this.state.counters}
				/>
			</div>
		);
	}
}
