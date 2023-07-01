import { Component } from "react";
import { Navbar, Posts, Comments } from "components";

interface AppState {
	postID: number | null;
}
export default class App extends Component<{}, AppState> {
	state: AppState = {
		postID: null,
	};

	render() {
		return (
			<>
				<Navbar />
				<main className="container my-4">
					<Comments postID={this.state.postID} />
					<Posts onView={(postID) => this.setState({ postID })} />
				</main>
			</>
		);
	}
}
