
// Dependencies
import React, { Component } from "react";
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

import '../../../node_modules/react-big-calendar/lib/css/react-big-calendar.css'

BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);
// Main component
class CalendarComponent extends Component {
    componentDidUpdate(){
        console.log('Data props', this.props.events);
    }

    render(){
        return (
            <BigCalendar
                events={this.props.events}
                views={allViews}
                step={60}
                defaultDate={new Date()}

            />
        )
    }
}


export default CalendarComponent;