import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 41 },
            { id: 2, value: 32 },
            { id: 3, value: 23 },
            { id: 4, value: 14 },
        ]
    }
    render() {
        return (
            <div>
                {this.state.counters.map(
                    (c, index) =>
                        <Counter
                            key={c.id}
                            value={c.value}
                            order={index}
                            onDelete={this.handleDelete}
                        />
                )}
            </div>
        );
    }

    handleDelete = (e) => {
        const newState = { ...this.state }
        newState.counters.splice(e, 1)
        this.setState(newState);
    }
}
export default Counters;