import ReactDOM from "react-dom/client";
import { Component, ReactNode } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

class A extends Component {
	constructor(age: number, fullName: string, job: string, props?: any) {
		super(props);
	}

	state = {
		age: this.age,
		fullName: this.fullName,
		job: this.job,
	};
}

class B extends A {
	constructor(age: number, fullName: string, job: string) {
		super(age, job, fullName);
	}

	state = {
		age: this.age,
		fullName: this.fullName,
		job: this.job,
	};

	render() {
		return (
			<>
				<h1>I am {this.state.age} years old</h1>
				<h1>I am {this.state.fullName}</h1>
				<h1>I am {this.state.job}</h1>
			</>
		);
	}
}

class C extends B {
	render() {
		const a = new A(17, "Azizbek", "Teacher");
		const b = new B(17, "Mirafzal", "frontend developer");
		return (
			<>
				<h1>I am {a.state.age}</h1>
			</>
		);
	}
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<C />);
