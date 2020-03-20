import React, { Component } from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import AboutTimelineSingleEvent from './AboutTimelineSingleEvent/AboutTimelineSingleEvent.js';
import 'react-vertical-timeline-component/style.min.css';

class AboutTimeline extends Component {
    constructor(props) {
		super(props);

        this.events = props.events;
    }
    
    render() {
        return (
                <VerticalTimeline>
                    {this.events.map((event,index) =>(
                        <AboutTimelineSingleEvent
                            event={ event }
                            id={ index }
                            key = { index }
                        />
                    ))}
                </VerticalTimeline>
        );
    }
}

export default AboutTimeline;
