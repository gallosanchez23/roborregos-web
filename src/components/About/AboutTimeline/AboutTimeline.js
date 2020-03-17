import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
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
                            key={ index }
                        />
                    ))}
                </VerticalTimeline>
        );
    }
}

export default AboutTimeline;
