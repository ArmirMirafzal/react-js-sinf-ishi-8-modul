import React from "react";
import Counter from "./components/counter";

export default class App extends React.Component {
	state = {
		counters: [1, 0, 3, 3],
	};

	render() {
		const { counters } = this.state;
		return (
			<main className="container">
				<button className="my-2 btn btn-primary">Reset</button>
				{counters.map((count, idx) => (
					<Counter key={idx} count={count} />
				))}
			</main>
		);
	}
}
