import React, { Component } from "react";
import { BsFillDashCircleFill, BsFillPlusCircleFill } from 'react-icons/bs';
import { FiCoffee } from "react-icons/fi";


export default class BreakControllers extends Component {

    handleBreakIncrement = () => {
        this.props.incrementBreakTime()
    }
    handleBreakDecrement = () => {
        this.props.decrementBreakTime()
    }

    render() {
        return (
            <div className="breakController">
                <h2><FiCoffee /> DESCANSO</h2>
                <button onClick={this.handleBreakIncrement}>
                    <BsFillPlusCircleFill />
                </button>
                <span> {this.props.breakTime} </span>
                <button onClick={this.handleBreakDecrement}>
                    <BsFillDashCircleFill />
                </button>
            </div>
        )
    }
}