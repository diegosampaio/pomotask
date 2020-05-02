import React, { Component } from "react";
import WorkControllers from './WorkControllers';
import BreakControllers from './BreakControllers';

export default class TimerControllers extends Component {

    render() {
        return (
            <div className="timer-controllers">
                <WorkControllers
                    workTime={this.props.workTime}
                    incrementWorkTime={this.props.incrementWorkTime}
                    decrementWorkTime={this.props.decrementWorkTime}
                />
                <BreakControllers
                    breakTime={this.props.breakTime}
                    incrementBreakTime={this.props.incrementBreakTime}
                    decrementBreakTime={this.props.decrementBreakTime}
                />
            </div>
        )
    }

}