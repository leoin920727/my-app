import React, { Component } from 'react';
class Counter extends Component {
    state = {
        count: this.props.value,
        // imgUrl: "https://picsum.photos/400"
        // tags: ["tag1", "tag22", "tag3"]
    }
    // myStyle = {
    //     fontSize: "2em",
    //     fontStyle: "italic",
    //     fontWeight: "bold"
    // }
    render() {
        return (
            <div>
                {/* <img src={this.state.imgUrl} /> */}
                {/* style={this.myStyle} */}
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button
                    onClick={this.handleIncrement}
                    className={this.getBtnClasses()}>increment</button>
                <button
                    // 點擊執行父階屬性上的函式
                    onClick={() => { this.props.onDelete(this.props.order) }}
                    className={"btn btn-danger btn-md m-2"}>
                    DELETE</button>

                {/* <ul>
                    {this.state.tags.map((tag) => <li>{tag}</li>)}
                </ul> */}
            </div>
        );
    }
    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 })
    }
    formatCount = () => {
        const { count } = this.state
        return (count === 0) ? "Zero" : count;
    }

    getBtnClasses() {
        return 'btn btn-outline-success btn-md';
    }

    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }
}

export default Counter;