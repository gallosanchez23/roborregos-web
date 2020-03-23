import React, { Component } from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import placeholder from 'images/placeholder-rectangle.png';

class AboutTimelineSingleEvent extends Component{
    constructor(props) {
		super(props);

        this.tryRequire = this.tryRequire.bind(this);
        this.setColor = this.setColor.bind(this);
        this.setPosition = this.setPosition.bind(this);
        this.inHover = this.inHover.bind(this);

        this.event = props.event;
        this.id = props.id;

        this.state = { hover: false }

        this.date = this.event.date.substr(3,4);
        this.color = this.setColor(this.date);
        this.backgroundColor = this.color;
	}

    tryRequire(img_path) {
        try {
            return require('images/' + img_path);
        }
        catch(err) {
            return placeholder;
        }
    }

    setColor(date) {
        let colors = ["rgb(0,178,154)", "rgb(238,77,122)", "rgb(255,130,0)", "rgb(155,0,250)"];
        return (colors[date%4]);
    }
    
    setPosition(date) {
        return ((parseInt(date)%2) === 0) ? "left" :"right"; 
    }

    inHover() {
        this.setState({ hover: !this.state.hover });
    }

    render() {
        this.contentColor = (this.state.hover) ? "rgba(0,0,0,0.0)" : this.color;
        return(
            <VerticalTimelineElement
                className= "aboutVerticalTimelineEvent"
                date={ this.event.date }
                position={ this.setPosition(this.date) }
                iconStyle={ {background: this.color, color: "#ffffff"} }
                contentStyle={ {background: this.contentColor, color: "#ffffff", boxShadow: "0 3px 0 " + this.contentColor} }
                contentArrowStyle={ {borderRight: "7px solid " + this.contentColor} }>
                <div className="aboutSingleEventTimeline" onMouseEnter = { this.inHover } onMouseLeave = { this.inHover }>
                    <h3 className= "vertical-timeline-element-title">{ this.event.title }</h3>
                    <br/>
                    
                    <div style= { {width: "460px"} }>
                        <p align= "justify">{ this.event.description }</p>
                    </div>
                </div>
            </VerticalTimelineElement>
        );
    }
}

export default AboutTimelineSingleEvent