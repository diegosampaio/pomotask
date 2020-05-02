import React, { Component } from "react";

import { BsFillDashCircleFill, BsFillPlusCircleFill, BsAlarm } from 'react-icons/bs';

export default class WorkControllers extends Component {

    handleWorkIncrement = () => {
        this.props.incrementWorkTime()
        if (this.props.timerRunning === false) {
            this.props.setCurrentTime(this.props.workTime)
        }
    }
    handleWorkDecrement = () => {
        this.props.decrementWorkTime()
        if (this.props.timerRunning === false) {
            this.props.setCurrentTime(this.props.workTime)
        }
    }

    render() {
        return (
            <div className="workController">
                <h2><BsAlarm /> TRABALHO</h2>
                <button onClick={this.handleWorkIncrement}>
                    <BsFillPlusCircleFill />
                </button>
                <span> {this.props.workTime} </span>
                <button onClick={this.handleWorkDecrement}>
                    <BsFillDashCircleFill />
                </button>
            </div>
        )
    }
}