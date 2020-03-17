import React, { Component } from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import placeholder from 'images/placeholder-rectangle.png';

class AboutTimelineSingleEvent extends Component{
    constructor(props) {
		super(props);

        this.tryRequire = this.tryRequire.bind(this);

        this.event = props.event;
	}

    tryRequire(img_path) {
        try {
            return require('images/' + img_path);
        }
        catch(err) {
            return placeholder;
        }
    }

    render (){
        return(
            <VerticalTimelineElement
            date={ this.event.date }
            position={ this.event.position }
            iconStyle={ {background: this.event.iconstyle.background, color: this.event.iconstyle.color} }
            contentStyle={ {background: this.event.contentstyle.background, color: this.event.contentstyle.color} }
            contentArrowStyle={ {borderRight: this.event.arrowstyle.borderRight} }>

                <h3 className="vertical-timeline-element-title">{ this.event.title }</h3>
                <br/>
                <img 
                    className = "about-image" 
                    src={ this.tryRequire(this.event.img_path) } alt={ this.event.title }
                />
                <h4 className="vertical-timeline-element-subtitle">{ this.event.img_description }</h4>
                <p align= "justify">{ this.event.description }</p>

            </VerticalTimelineElement>
        );
    }
}

export default AboutTimelineSingleEvent