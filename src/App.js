import React from 'react';
import './App.css';

import logo from './diet.png'
import left from './left-arrow.png'
import right from './right-arrow.png'


function FoodItem(){
  return (
    <div className="FoodItem">&nbsp;</div>
  );
}
function MealContainer(){
  return (
    <div className="MealContainer">
      <div className="MealTitle">Meal 1</div>
      <FoodItem />
      <FoodItem />
      <FoodItem />
      <FoodItem />
      <FoodItem />
      <FoodItem />

    </div>
  );
}


function formatDate(d) {
  var dMonth = (d.getMonth() + 1).toString().length < 2 ?  '0'+ (d.getMonth()+1).toString() : (d.getMonth()+1).toString()
  var dDay = (d.getDate()).toString().length < 2 ?  '0'+ (d.getDate()).toString() : (d.getDate()).toString()
  var dYear = d.getFullYear().toString();
  var dString = dMonth + '/' + dDay + '/' + dYear;
  return dString;
}

function DatePicker(props){

  var today = new Date();
  var n = today.getTime();
  n -= 86400000;
  var yesterday = new Date(n);
  n += 172800000;
  var tomorrow = new Date(n);
  
  var todayString = formatDate(today);
  var yesterdayString = formatDate(yesterday);
  var tomorrowString = formatDate(tomorrow);
  var dateString = formatDate(props.currentDate);

  var actualDateString =''
  if(dateString == todayString) {
    actualDateString = "TODAY";
  } else if(dateString == yesterdayString) {
    actualDateString = "YESTERDAY";
  } else if(dateString == tomorrowString) {
    actualDateString = "TOMORROW";
  } else {
    actualDateString = dateString;
  }
  
  return (
    <div className="DateContainer">
      
      <div className="CurrentDate" onClick={props.handleDateDecrement}>
        <img className="ArrowButton" src={left}>
        </img>
      </div>
      <div className="CurrentDate">{actualDateString}</div>
      <div className="CurrentDate" onClick={props.handleDateIncrement}>
        <img className="ArrowButton" src={right}>
        </img>
      </div>

      <input onChange={props.handleDateChange} className="Calendar" type="date"/>
  </div>  
  );
}

function Greeting(props){
  return (
    <p className="Greeting">Hello, {props.userName}</p>
  );
}




class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDate: new Date()
    }


    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleDateDecrement = this.handleDateDecrement.bind(this);
    this.handleDateIncrement = this.handleDateIncrement.bind(this);

  }


  handleDateIncrement() {
    var n = this.state.selectedDate.getTime();
    n += 86400000;
    var newDate = new Date(n);

    this.setState({
      selectedDate: newDate
    });

  }

  handleDateDecrement() {
    var n = this.state.selectedDate.getTime();
    n -= 86400000;
    var newDate = new Date(n);

    this.setState({
      selectedDate: newDate
    });

  }
  handleDateChange(event) {
    var eventYear = event.target.value.substring(0,4);
    var eventMonth = event.target.value.substring(5,7);
    var eventDay = event.target.value.substring(8,10);
    var eventDate = eventMonth + '/' + eventDay + '/'+eventYear;

    var dateSelected = new Date(eventDate);
    this.setState({
      selectedDate: dateSelected
    });
  }

  render() {


    return (
    <div className="App">
      <div className="Header">
        <h1>FoodTracker</h1>
        <img className="Logo" src={logo}></img>
      </div>

      <DatePicker currentDate={this.state.selectedDate} handleDateChange={this.handleDateChange} handleDateIncrement={this.handleDateIncrement} handleDateDecrement={this.handleDateDecrement}/>
      <div className="Body">
      <MealContainer />
      <MealContainer />
      <MealContainer />
      <MealContainer />
      </div>


    </div>
    );



  }
}
export default App;
