import React from 'react';
import './App.css';

import logo from './diet.png'

function MealContainer(){
  return (
    <div className="MealContainer">
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
  }
  render() {


    return (
    <div className="App">
      <div className="Header">
        <h1>FoodTracker</h1>
        <img className="Logo" src={logo}></img>
      </div>
      <Greeting userName="Emmanuel"/>
      <MealContainer />
      <MealContainer />
      <MealContainer />
      <MealContainer />


    </div>
    );



  }
}
export default App;
