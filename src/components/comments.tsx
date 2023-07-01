import { Component } from "react";
import axios from "axios";
import { baseURL } from "./posts";

interface Comment {
	id: number;
	postId: number;
	name: string;
	email: string;
	body: string;
}

interface CommentsProps {
	postID: number | null;
}

interface CommentsState {
	comments: Comment[];
	isLoading: boolean;
}

export default class Comments extends Component<CommentsProps, CommentsState> {
	async componentDidMount() {
		if (this.props.postID !== null) {
			const { data: comments } = await axios(`${baseURL}/comments?postID=${this.props.postID}`);

			console.log("comments => ", comments);
			this.setState({ comments, isLoading: false });
		}
	}

	render() {
		const { postID } = this.props;

		return (
			<>
			{postID && (
				<div>postID = {this.props.postID}</div>
				)}

			</>
		);
	}
}
