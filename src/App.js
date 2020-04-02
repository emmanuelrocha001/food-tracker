import React from 'react';
import './App.css';

import logo from './diet.png'
import left from './left-arrow.png'
import right from './right-arrow.png'
import plus from './plus.png'
import cross from './cross.png'

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
    <div className="DateContainer">

      <div className="ArrowButtonContainer" onClick={props.handleDateDecrement}>
        <img className="ArrowButton" src={left}>
        </img>
      </div>
      <div className="CurrentDate">{actualDateString}</div>
      <div className="ArrowButtonContainer" onClick={props.handleDateIncrement}>
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


function Meal(props){
  return (
    <div className="MealContainer">
      <div className="LeftTitle">{props.mealTitle}</div>
      <Item
        handleItemExpandScreenToggle={props.handleItemExpandScreenToggle}
      />

      <img
        className="AddButton"
        src={plus}
        onClick={props.handleItemAdditionScreenToggle}
      >
      </img>

    </div>
  );
}



function Item(props){
  return(
    <div className="Item" onClick={props.handleItemExpandScreenToggle}>
        <p className="ItemName">potato</p>
        <div className="ItemDescription">
          <p className="LeftItemDescription">generic, 1 potato</p>
          <p className="RightItemDescription">30</p>
        </div>
    </div>

  );

}

function ItemExpandedScreen(props) {

  return(
    <div className="ExternalScreen">
      <img className="ExitButton" src={cross} onClick={props.handleItemExpandScreenToggle}></img>
      <div className="LeftTitle">Item Nutrition Info Screen</div>
    </div>

  );

}

function ItemAdditionScreen(props) {

  return(
    <div className="ExternalScreen">
      <img className="ExitButton" src={cross} onClick={props.handleItemAdditionScreenToggle}></img>
        <div className="SearchBarContainer">
          <input className="SearchBar" type="text" value={props.userInput}/>
        </div>
      <div className="LeftTitle">Results</div>
      <Item
        handleItemExpandScreenToggle={props.handleItemExpandScreenToggle}
      />

    </div>
  );
}



function MealContainer(props){


    return(
      <div className="Body">
        <Meal
          mealTitle="Breakfast"
          handleItemAdditionScreenToggle={props.handleItemAdditionScreenToggle}
          handleItemExpandScreenToggle={props.handleItemExpandScreenToggle}
        />
        <Meal
          mealTitle="Lunch"
          handleItemAdditionScreenToggle={props.handleItemAdditionScreenToggle}
          handleItemExpandScreenToggle={props.handleItemExpandScreenToggle}
        />
        <Meal
          mealTitle="Dinner"
          handleItemAdditionScreenToggle={props.handleItemAdditionScreenToggle}
          handleItemExpandScreenToggle={props.handleItemExpandScreenToggle}

        />
        <Meal
          mealTitle="Other"
          handleItemAdditionScreenToggle={props.handleItemAdditionScreenToggle}
          handleItemExpandScreenToggle={props.handleItemExpandScreenToggle}
        />
        </div>
    );
}



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDate: new Date(),
      showItemAddition: false,
      expandItem: false,
      userInput: ""
    }


    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleDateDecrement = this.handleDateDecrement.bind(this);
    this.handleDateIncrement = this.handleDateIncrement.bind(this);
    this.handleItemAdditionScreenToggle = this.handleItemAdditionScreenToggle.bind(this);
    this.handleItemExpandScreenToggle = this.handleItemExpandScreenToggle.bind(this);

  }

  handleItemExpandScreenToggle(itemId) {
    this.setState({
      expandItem: !this.state.expandItem
    });

  }

  handleItemAdditionScreenToggle(mealId) {
    this.setState({
      showItemAddition: !this.state.showItemAddition
    });
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

    if(this.state.showItemAddition === true || this.state.expandItem === true ) {
      return (
        <div className="App">
          <div className="ContainerDark">
            <div className="Header">
              <h1>FoodTracker</h1>
              <img className="Logo" src={logo}></img>
            </div>

            <DatePicker currentDate={this.state.selectedDate}
              handleDateChange={this.handleDateChange}
              handleDateIncrement={this.handleDateIncrement}
              handleDateDecrement={this.handleDateDecrement}
            />

            <MealContainer
              handleItemAdditionScreenToggle={this.handleItemAdditionScreenToggle}
              handleItemExpandScreenToggle={this.handleItemExpandScreenToggle}
              showItemAddition={this.state.showItemAddition}
            />
          </div>


          {this.state.showItemAddition === true &&
            <ItemAdditionScreen
              userInput={this.state.userInput}
              handleItemAdditionScreenToggle={this.handleItemAdditionScreenToggle}
              handleItemExpandScreenToggle={this.handleItemExpandScreenToggle}
            />
          }

          {this.state.expandItem === true &&
            <ItemExpandedScreen
              handleItemExpandScreenToggle={this.handleItemExpandScreenToggle}
            />
          }


        </div>
        );
    } else {


        return (
          <div className="App">
            <div className="LightContainer">
              <div className="Header">
                <h1>FoodTracker</h1>
                <img className="Logo" src={logo}></img>
              </div>

              <DatePicker currentDate={this.state.selectedDate}
                handleDateChange={this.handleDateChange}
                handleDateIncrement={this.handleDateIncrement}
                handleDateDecrement={this.handleDateDecrement}
              />

              <MealContainer
                handleItemAdditionScreenToggle={this.handleItemAdditionScreenToggle}
                handleItemExpandScreenToggle={this.handleItemExpandScreenToggle}
                showItemAddition={this.state.showItemAddition}
              />
            </div>

            {this.state.showItemAddition === true &&
              <ItemAdditionScreen
                userInput={this.state.userInput}
                handleItemAdditionScreenToggle={this.handleItemAdditionScreenToggle}
                handleItemExpandScreenToggle={this.handleItemExpandScreenToggle}

              />
            }

            {this.state.expandItem === true &&
              <ItemExpandedScreen
                handleItemExpandScreenToggle={this.handleItemExpandScreenToggle}
              />
            }

        </div>
          );

    }




  }
}
export default App;
