import React, { Component } from "react";
import { Counter } from ".";
import { ICount, TYPE } from './../app';

interface CountersProps{
    counters: ICount[];
    onAction: (countID: number, actionType: TYPE) => void;
    onReset: () => void;
}

export default class Counters extends Component<CountersProps, {}> {
  render() {
    const { counters } = this.props;
    return (
      <main className="container">
        <button className="my-2 btn btn-primary" onClick={this.props.onReset}>
          Reset
        </button>
        {counters.map((count, idx) => (
          <Counter key={idx} count={count} onCounterAction={this.props.onAction} />
        ))}
      </main>
    );
  }
}
