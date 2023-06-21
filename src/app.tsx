import React, { Component } from "react";
import Counters from "./components/counters";
import NavBar from "./components/navbar";

export interface ICount {
	id: number;
	value: number;
}
interface AppProps {}

interface AppState {
	counters: ICount[];
}

export enum TYPE {
	INCREMENT,
	DECREMENT,
	DELETE,
}

export default class app extends Component<AppProps, AppState> {
	state = {
		counters: [
			{ id: 1, value: 1 },
			{ id: 2, value: 2 },
			{ id: 3, value: 0 },
			{ id: 4, value: 3 },
		],
	};

	handleReset = () => {
		this.setState(({ counters }) => ({
			counters: counters.map((count) => ({ ...count, value: 0 })),
		}));
	};

	handleAction = (countID: number, actionType: TYPE) => {
		switch (actionType) {
			case TYPE.DELETE: {
				this.setState(({ counters }) => ({
					counters: counters.filter((count) => count.id !== countID),
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

	render() {
		const { counters } = this.state;
		return (
			<>
				<NavBar amount={counters.filter((count) => count.value > 0).length} />
				<Counters
					onAction={this.handleAction}
					onReset={this.handleReset}
					counters={this.state.counters}
				/>
			</>
		);
	}
}
