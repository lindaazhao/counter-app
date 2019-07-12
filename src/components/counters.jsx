import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const {
      onReset,
      counters,
      onDelete,
      onIncrement,
      onDecrement,
      onAddItem
    } = this.props;

    return (
      <div>
        <button onClick={onReset} className="btn btn-secondary btn-sm m-2">
          Reset
        </button>
        <button onClick={onAddItem} className="btn btn-info btn-sm m-2">
          Add Item
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter}
            //all of the props can be passed using counter={counter} so that the below is unecessary
            // value={counter.value}
            // id={counter.id}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
