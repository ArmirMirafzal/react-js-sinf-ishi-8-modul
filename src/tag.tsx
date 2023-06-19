import React, { Component } from "react";
interface TagState {}
interface TagProps {
	name: string;
}
export default class Tag extends Component<TagProps, TagState> {
	render() {
		return (
			<div>
				<h1>TagName : {this.props.name}</h1>
			</div>
		);
	}
}
