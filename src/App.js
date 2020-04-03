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
        mealName={props.mealTitle}
        isStatic={false}
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
    if( props.isStatic === false) {

      return(
        <div className="Item" onClick={() =>{props.handleItemExpandScreenToggle(props.mealName)}}>
          <p className="ItemName">Potato</p>
          <div className="ItemDescription">
            <p className="LeftItemDescription">generic, 1 potato</p>
            <p className="RightItemDescription">30</p>
          </div>
        </div>

      );

    } else{
      return(
        <div className="ItemStatic" >
          <p className="ItemName">Potato</p>
          <div className="ItemDescription">
            <p className="LeftItemDescription">generic, 1 potato</p>
            <p className="RightItemDescription">30 cal</p>
          </div>
        </div>

      );
    }

}

function Macro(props) {
  return(
    <div className="Macro">
    <p className="MacroName">{props.percent}%</p>
    <p className="MacroGrams">{props.grams} g</p>
    <p className="MacroName">{props.name}</p>

    </div>
  );
}
function ItemExpandedScreen(props) {

  return(
    <div className="ExternalScreen">
      <img className="ExitButton" src={cross} onClick={props.handleItemExpandScreenToggle}></img>
      {props.showItemAddition === false && props.currentMeal !== "" &&
        <div className="ItemInput">
          <p className="ItemInputLeft">Meal</p>
          <p className="ItemInputRight">{props.currentMeal}</p>
        </div>
      }
      <Item
        mealName=""
        isStatic={true}
      />
      <div className="MacrosContainer">
        <Macro name="Carbs" grams={40} percent={77}/>
        <Macro name="Fat" grams={10} percent={20}/>
        <Macro name="Protein" grams={2} percent={3}/>
      </div>


      <div className="ItemInput">
          <p className="ItemInputLeft">Serving size</p>
          <p className="ItemInputRight">1 Potato</p>
      </div>

      <div className="ItemInput">
          <p className="ItemInputLeft">Number of Servings</p>
          <p className="ItemInputRight">1</p>
      </div>

      <div className="ExternalButton" onClick={props.handleItemExpandScreenToggle}>
        {props.showItemAddition === false &&
        <p className="ExternalButtonText">Update</p>
        }

        {props.showItemAddition === true &&
        <p className="ExternalButtonText">Add</p>
        }

      </div>



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
        mealName=""
        isStatic={false}
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
      userInput: "",
      currentMeal: ""
    }


    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleDateDecrement = this.handleDateDecrement.bind(this);
    this.handleDateIncrement = this.handleDateIncrement.bind(this);
    this.handleItemAdditionScreenToggle = this.handleItemAdditionScreenToggle.bind(this);
    this.handleItemExpandScreenToggle = this.handleItemExpandScreenToggle.bind(this);

  }

  handleItemExpandScreenToggle(mealTitle) {
    if(mealTitle != null && this.state.expandItem === false){
      this.setState({
        currentMeal: mealTitle
      });
    }

    this.setState({
      expandItem: !this.state.expandItem,
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
              currentMeal={this.state.currentMeal}
              showItemAddition={this.state.showItemAddition}
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
                currentMeal={this.state.currentMeal}
                showItemAddition={this.state.showItemAddition}
              />
            }

        </div>
          );

    }




  }
}
export default App;
