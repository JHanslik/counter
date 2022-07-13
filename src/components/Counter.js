import React from "react";

class Counter extends React.Component {
    render(){
        return (
                <div className="border m-2">
                    <h2>{this.props.count}</h2>
                    <button className="bg-danger m-2 btn-lg" onMouseDown={this.props.substract}>
                        <i class="bi bi-dash-circle-fill"></i>
                    </button>
                        <button className="bg-success m-2 btn-lg" onClick={this.props.increment}>
                    <i class="bi bi-plus-circle-fill"></i>
                    </button>
                    <h3>{this.props.title}</h3>
                </div>
        )
    }
}

export default Counter