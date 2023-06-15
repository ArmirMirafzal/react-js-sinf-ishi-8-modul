import React, { Component } from "react";
import Counter from "./components/counter";

export default class App extends Component {
	render() {
		return (
			<div>
				{/* props children practice */}
				<Counter badgeName="badge bg-dark">
					<Counter counter="sub-counter" badgeName="badge bg-primary">
      <Counter counter="sub-sub-counter"/>
     </Counter>
				</Counter>
			</div>
		);
	}
}
