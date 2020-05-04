
import React from 'react';
import Button from './Button';
import left from '.././assets/ui/left-arrow-dark.svg';
import right from '.././assets/ui/right-arrow-dark.svg';
import Helper from '../helper.js';

const helper = new Helper();


function DatePicker(props){

    var today = new Date();
    var n = today.getTime();
    n -= 86400000;
    var yesterday = new Date(n);
    n += 172800000;
    var tomorrow = new Date(n);

    var todayString = helper.formatDate(today);
    var yesterdayString = helper.formatDate(yesterday);
    var tomorrowString = helper.formatDate(tomorrow);
    var dateString = helper.formatDate(props.currentDate);

    var actualDateString =''
    if(dateString === todayString) {
        actualDateString = "Today";
    } else if(dateString === yesterdayString) {
        actualDateString = "Yesterday";
    } else if(dateString === tomorrowString) {
        actualDateString = "Tomorrow";
    } else {
        actualDateString = dateString;
    }
    return (

        <div className="CalendarDateContainer">
            <div className="DateContainer">
            <div className="ArrowButtonContainer">
                <Button
                containerSize="32px"
                imageSize="16px"
                imageSource={left}
                actionHandler={props.handleDateDecrement}
                />
            </div>
            <div className="CurrentDate">{actualDateString}</div>
            <div className="ArrowButtonContainer">
                <Button
                containerSize="32px"
                imageSize="16px"
                imageSource={right}
                actionHandler={props.handleDateIncrement}
                />
            </div>
            </div>
            <div className="CalendarContainer">
                <input onChange={props.handleDateChange} className="Calendar" type="date"/>
            </div>
        </div>
    );
}

export default DatePicker;
