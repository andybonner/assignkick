
// Dependencies
import React, { Component } from "react";
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

import '../../../node_modules/react-big-calendar/lib/css/react-big-calendar.css';

BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);
// Main component
class CalendarComponent extends Component {


    render(){
        return (
            <BigCalendar
                events={[
                    {
                        'title': 'All Day Event',
                        'allDay': true,
                        'start': new Date(2017, 9, 4),
                        'end': new Date(2017, 9, 5)
                    },
                    {
                        'title': 'Long Event',
                        'start': new Date(2017, 9, 11),
                        'end': new Date(2017, 9, 12)
                    },

                    {
                        'title': 'DTS STARTS',
                        'start': new Date(2017, 9, 20, 10, 0, 0),
                        'end': new Date(2017, 9, 20, 20, 0, 0)
                    },


                ]}
                views={allViews}
                step={60}
                defaultDate={new Date()}

            />
        )
    }
}


export default CalendarComponent;