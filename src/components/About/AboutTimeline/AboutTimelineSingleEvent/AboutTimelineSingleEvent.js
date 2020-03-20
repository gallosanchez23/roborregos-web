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

        this.event = props.event;
        this.id = props.id;

        this.date = this.event.date.substr(3,4);
        this.color = this.setColor(this.date);
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
        return (date%2 == 0) ? "left" :"right"; 
    }

    render() {
        return(
            <VerticalTimelineElement
                date={ this.event.date }
                position={ this.setPosition(this.date) }
                iconStyle={ {background: this.color, color: "#ffffff"} }
                contentStyle={ {background: this.color, color: "#ffffff", width: "fit-content"} }
                contentArrowStyle={ {borderRight: "7px solid " + this.color} }>
                    <h3 className= "vertical-timeline-element-title">{ this.event.title }</h3>
                    <br/>
                    <img 
                        className= "about-image" 
                        src={ this.tryRequire(this.event.img_path) } alt={ this.event.title }
                    />
                    <h4 className= "vertical-timeline-element-subtitle">{ this.event.img_description }</h4>
                    <div style= { {width: "460px"} }>
                        <p align= "justify">{ this.event.description }</p>
                    </div>

            </VerticalTimelineElement>
        );
    }
}

export default AboutTimelineSingleEvent