import React, { Component } from "react";

import { BsFillVolumeMuteFill, BsFillVolumeUpFill } from 'react-icons/bs';


export default class Sound extends Component {

    toggleSound = (e) => {
        this.props.sound === "on" ?
            this.props.setSound("off") :
            this.props.setSound("on")
    }

    render() {
        let button;
        if (this.props.sound === "on") {
            button = <BsFillVolumeUpFill size={24} />;
        }
        if (this.props.sound === "off") {
            button = <BsFillVolumeMuteFill size={24} />;
        }

        return (
            <div className="buttonSound">
                <button onClick={(e) => {
                    this.toggleSound(e)
                }}>
                    {button}
                </button>
            </div>
        )
    }
}