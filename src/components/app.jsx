import React, { Component } from "react";

export default class App extends Component {
  state = {
    list: ["first", "second", "third"],
  };

  handleRemove(item) {
    const deleteIdx = this.state.list.findIndex((i) => i === item);
    const list = [...this.state.list];
    list.splice(deleteIdx, 1);

    this.setState({ list });
  }

  render() {
    const { list } = this.state;
    return (
      <ul>
        {list.map((item, idx) => (
          <li key={idx}>
            <span className="badge bg-dark">{item}</span>
            <button className="btn btn-danger btn-sm" onClick={() => this.handleRemove(item)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
