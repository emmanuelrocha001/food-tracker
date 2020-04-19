import React from 'react';
import './App.css';
/*char api*/
import {
  PieChart, Pie, Sector, Cell,
} from 'recharts';
import $ from 'jquery';
// app assets
import logo from './diet.png'
import left from './left-arrow.svg'
import right from './right-arrow.svg'
import plus from './plus.png'
// import cross from './cross.png'
import cross from './close.svg'

import search from './search.png'
import user from './user.jpg'
import lock from './lock.png'
import {createUseStyles} from 'react-jss'
const foodAPIURL = 'https://food-tracker-api.herokuapp.com'
// const foodAPIURL = 'https://localhost:5000'

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
    
    <div className="CalendarDateContainer">
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

      </div>
        <div className="CalendarContainer">
          <input onChange={props.handleDateChange} className="Calendar" type="date"/>
        </div>
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
      <Item
        handleItemExpandScreenToggle={props.handleItemExpandScreenToggle}
        mealName={props.mealTitle}
        isStatic={false}
      />
      <Item
        handleItemExpandScreenToggle={props.handleItemExpandScreenToggle}
        mealName={props.mealTitle}
        isStatic={false}
      />
      <div className="AddButtonContainer">
        <div className="AddButtonOuter">
          <img
            className="AddButton"
            src={cross}
            onClick={props.handleItemAdditionScreenToggle}
          >
          </img>
        </div>

      </div>

    </div>
  );
}



function Item(props){
    if( props.isStatic === false) {

      return(
        <div className="Item" onClick={() =>{props.handleItemExpandScreenToggle(props.mealName)}}>
          <p className="ItemName">Potato</p>
          <div className="ItemDescription">
            <p className="LeftItemDescription">Generic, 1 Potato</p>
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


function MacrosVisual(props) {
  const data = [{name: 'Carbs', value: 40}, {name: 'Fat', value: 10},
                  {name: 'Protein', value: 2}];
  const COLORS = ['#393E46', '#f3c623', '#848484'];


  return (

    <div className="CalMacroContainer">
      <PieChart className="Pie" width={90} height={90}>
          <Pie
            animationDuration={900}
            animationBegin={100}
            data={data}
            innerRadius={22}
            outerRadius={30}
            fill="#FFFFFF"
            paddingAngle={5}
          >
            {
              data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
            }
          </Pie>
      </PieChart>

    </div>

  );


}
function Macros(props) {

  return(
    <div className="MacrosContainer">
        <MacrosVisual />
        <Macro name="Carbs" grams={40} percent={77}/>
        <Macro name="Fat" grams={10} percent={20}/>
        <Macro name="Protein" grams={2} percent={3}/>
      </div>
  );
}

function Macro(props) {
  return(
    <div className="Macro">
    {props.name === "Carbs" &&
      <p className="MacroPercentageCarbs">{props.percent}%</p>

    }
    {props.name === "Protein" &&
      <p className="MacroName">{props.percent}%</p>

    }
    {props.name === "Fat" &&
      <p className="MacroPercentageProtein">{props.percent}%</p>
    }
    <p className="MacroGrams">{props.grams} g</p>
    <p className="MacroName">{props.name}</p>

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


function ItemExpandedScreen(props) {

  if(props.showNutrition === false){
    return(
      <div className="ExternalScreen">

        <div className="ExitButtonContainer">
          <img className="ExitButton" src={cross} onClick={props.handleItemExpandScreenToggle}></img>
        </div>

          <div className="ExternalScreenContent">

            {props.showItemAddition === false && props.currentMeal !== "" &&
              <div className="ItemInput">
                <p className="ItemInputLeft">Meal</p>
                <select className="MealSelector">
                  <option className="MealSelectorChoice" value="breakfast">Breakfast</option>
                  <option className="MealSelectorChoice" value="lunch">Lunch</option>
                  <option className="MealSelectorChoice" value="dinner">Dinner</option>
                  <option className="MealSelectorChoice" value="other">Other</option>
                </select>
              </div>
            }
            <Item
              mealName=""
              isStatic={true}
            />
            <Macros />
            <div className="ItemInput">
                <p className="ItemInputLeft">Serving size</p>
                <select className="MealSelector">
                  <option className="MealSelectorChoice" value="breakfast">1 g</option>
                  <option className="MealSelectorChoice" value="lunch">1 cup, diced</option>
                  <option className="MealSelectorChoice" value="dinner">1 oz</option>
                  <option className="MealSelectorChoice" value="other">1 kg</option>
                  <option className="MealSelectorChoice" value="other">1 large</option>
                  <option className="MealSelectorChoice" value="other">1 small</option>


                </select>
            </div>
            <div className="ItemInput">
                <p className="ItemInputLeft">Number of Servings</p>
                  <input
                    className="NumberInput"
                    value={1}
                    type="text"
                    name="token"
                    id="token"
                    inputmode="numeric"
                    pattern="[0-9]*"
                    autocomplete="one-time-code"
                  />
            </div>

            <div className="ShowNutritionButton" onClick={props.handleNutritionScreenToggle}>
              Show Nutrition &#x25BC;
            </div>

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

  } else {
    return(
      <NutritionScreen handleNutritionScreenToggle={props.handleNutritionScreenToggle} />
    );
  }

}

function ItemAdditionScreen(props) {

  return(
    <div className="ExternalScreen">
      <div className="ExitButtonContainer">
        <img className="ExitButton" src={cross} onClick={props.handleItemAdditionScreenToggle}></img>
      </div>


      <div className="ExternalScreenContent">

        <div className="SearchBarContainer">
          <img className="SearchIcon" src={search}></img>
          <input className="SearchBar" type="text" value={props.userInput}/>
        </div>
      <div className="LeftTitle">Results</div>
      <Item
        handleItemExpandScreenToggle={props.handleItemExpandScreenToggle}
        mealName=""
        isStatic={false}
      />
      <Item
        handleItemExpandScreenToggle={props.handleItemExpandScreenToggle}
        mealName=""
        isStatic={false}
      />
      <Item
        handleItemExpandScreenToggle={props.handleItemExpandScreenToggle}
        mealName=""
        isStatic={false}
      />
      <Item
        handleItemExpandScreenToggle={props.handleItemExpandScreenToggle}
        mealName=""
        isStatic={false}
      />
      <Item
        handleItemExpandScreenToggle={props.handleItemExpandScreenToggle}
        mealName=""
        isStatic={false}
      />
      <Item
        handleItemExpandScreenToggle={props.handleItemExpandScreenToggle}
        mealName=""
        isStatic={false}
      />

      </div>

    </div>
  );
}

function NutritionScreen(props) {

  return(
    <div className="ExternalScreen">
      <div className="HideNutritionButton" onClick={props.handleNutritionScreenToggle}>
        Hide Nutrition &#9650;
      </div>

      <div className="Nutrient">
        <p className="NutrientLeft">Saturated Fat</p>
        <p className="NutrientRight">2.5 g</p>
      </div>

      <div className="Nutrient">
        <p className="NutrientLeft">Trans Fat</p>
        <p className="NutrientRight">0 g</p>
      </div>

      <div className="Nutrient">
        <p className="NutrientLeft">Polyunsaturated Fat</p>
        <p className="NutrientRight">0 g</p>
      </div>

      <div className="Nutrient">
        <p className="NutrientLeft">Monounsaturated Fat</p>
        <p className="NutrientRight">0 g</p>
      </div>

      <div className="Nutrient">
        <p className="NutrientLeft">Cholesterol</p>
        <p className="NutrientRight">0 mg</p>
      </div>

      <div className="Nutrient">
        <p className="NutrientLeft">Sodium</p>
        <p className="NutrientRight">225 mg</p>
      </div>
      <div className="Nutrient">
        <p className="NutrientLeft">Dietary Fiber</p>
        <p className="NutrientRight">1 g</p>
      </div>

      <div className="Nutrient">
        <p className="NutrientLeft">Sugar</p>
        <p className="NutrientRight">20 g</p>
      </div>

      <div className="Nutrient">
        <p className="NutrientLeft">Vitamin D</p>
        <p className="NutrientRight">0 %</p>
      </div>

      <div className="Nutrient">
        <p className="NutrientLeft">Calcium</p>
        <p className="NutrientRight">0 %</p>
      </div>

      <div className="Nutrient">
        <p className="NutrientLeft">Iron</p>
        <p className="NutrientRight">0 %</p>
      </div>

      <div className="Nutrient">
        <p className="NutrientLeft">Pottasium</p>
        <p className="NutrientRight">0 mg</p>
      </div>

      <div className="Nutrient">
        <p className="NutrientLeft">Vitamin A</p>
        <p className="NutrientRight">0 %</p>
      </div>

      <div className="Nutrient">
        <p className="NutrientLeft">Vitamin C</p>
        <p className="NutrientRight">0 %</p>
      </div>





    </div>
  );


}


function ProfileScreen(props) {


  var url = props.user["avatar"];
  return(
    <div className="ExternalScreen">
      <div className="ExitButtonContainer">
          <img className="ExitButton" src={cross} onClick={props.handleShowProfile}></img>
      </div>

    <div className="ProfileScreenPicContainer">
      <div className="ProfileScreenPic" style={{backgroundImage: "url(\" "+ url +"\")"}}></div>
    </div>


    <div className="ProfileContentContainer">


      <div className="ProfileInfoContainer">
        <div className="LeftProfile">Name</div>
        <p className="RightProfile">{props.user["name"]} {props.user["lastName"]}</p>
      </div>

      <div className="ProfileInfoContainer">
        <div className="LeftProfile">Email</div>

        <p className="RightProfile">{props.user["email"]}</p>
      </div>

      <div className="ProfileInfoContainer">
        <div className="LeftProfile">ID</div>
        <p className="RightProfile">{props.user["userId"]}</p>
      </div>

      
    </div>

    <div className="ExternalButton" onClick={props.handleSignOff}>
      <p className="ExternalButtonText">Sign Out</p>
    </div>

    </div>

  );




}

function SignInScreen(props) {


  if( props.haveAccount === true ) {
    return(

      <div className="ExternalScreen" >
      <div className="ExternalTop"></div>
      <div className="ExternalCenter">
        <div className="LogoIsolatedContainer">
          <img className="LogoIsolated" src={logo}></img>
        </div>
        <p className="ExternalTitle">Sign In</p>


        <div className="InfoContainer">
          {/* <img className="UserNameIcon" src={user}></img> */}
          <input className="InfoInput" type="text" placeholder="Email" onChange={props.handleEmailInputChange}/>
        </div>

        <div className="InfoContainer">
          {/* <img className="UserNameIcon" src={lock}></img> */}
          <input className="InfoInput" type="password" placeholder="Password" onChange={props.handlePasswordInputChange} />
        </div>

        <p className="NoAccountText" onClick={props.handleHaveAccountToggle} >Don't have an account? Sign up here!</p>
        
        { props.error != '' &&
          <p className="LoginError">{props.error}</p>
        }

        {props.successMessage != '' &&
          <p className="SuccessMessage">{props.successMessage}</p>
        }

      </div>
      <div className="ExternalButton" onClick={props.handleSignIn}>
        <p className="ExternalButtonText">Sign In</p>
      </div>
    </div>

    );
  } else {
    return(

      <div className="ExternalScreen">
      <div className="ExternalTop"></div>
      <div className="ExternalCenter">
        <div className="LogoIsolatedContainer">
          <img className="LogoIsolated" src={logo}></img>
        </div>
        <p className="ExternalTitle">Sign Up</p>


        <div className="InfoContainer">
          <input className="InfoInput" type="text" placeholder="First Name" onChange={props.handleFirstNameInputChange}/>
        </div>

        <div className="InfoContainer">
          <input className="InfoInput" type="text" placeholder="Last Name" onChange={props.handleLastNameInputChange}/>
        </div>

        <div className="InfoContainer">
          <input className="InfoInput" type="text" placeholder="Email" onChange={props.handleEmailInputChange}/>
        </div>

        <div className="InfoContainer">
          <input className="InfoInput" type="password" placeholder="Password" onChange={props.handlePasswordInputChange}/>
        </div>

        <div className="PicUploaderContainer">
          <input className="PicUploader" type="file" accept="image/png, image/jpeg, image/jpg" onChange={props.handleProfilePicUpload} />
        </div>

        <p className="NoAccountText" onClick={props.handleHaveAccountToggle} >Already have an account? Sign in here!</p>

        { props.error != '' &&
          <p className="LoginError">{props.error}</p>
        }

        {props.successMessage != '' &&
          <p className="SuccessMessage">{props.successMessage}</p>
        }

      </div>
      <div className="ExternalButton" onClick={props.handleSignUp} >
        <p className="ExternalButtonText">Create Account</p>

      </div>
    </div>

    );
  }
}




class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDate: new Date(),
      showItemAddition: false,
      expandItem: false,
      showNutrition: false,
      currentUser: null,
      userInput: "",
      emailInput:"",
      passwordInput: "",
      firstNameInput: "",
      lastNameInput: "",
      profilePicInput: null,
      currentMeal: "",
      loginError: "",
      successMessage: "",
      haveAccount: true,
      showProfile: false
    }


    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleDateDecrement = this.handleDateDecrement.bind(this);
    this.handleDateIncrement = this.handleDateIncrement.bind(this);

    // screen toggles
    this.handleItemAdditionScreenToggle = this.handleItemAdditionScreenToggle.bind(this);
    this.handleItemExpandScreenToggle = this.handleItemExpandScreenToggle.bind(this);
    this.handleNutritionScreenToggle = this.handleNutritionScreenToggle.bind(this);
    this.handleHaveAccountToggle = this.handleHaveAccountToggle.bind(this);
    this.handleShowProfile = this.handleShowProfile.bind(this);
    // input handlers
    this.handleEmailInputChange = this.handleEmailInputChange.bind(this);
    this.handlePasswordInputChange = this.handlePasswordInputChange.bind(this);
    this.handleFirstNameInputChange = this.handleFirstNameInputChange.bind(this);
    this.handleLastNameInputChange = this.handleLastNameInputChange.bind(this);
    this.handleProfilePicUpload = this.handleProfilePicUpload.bind(this);

    // action handlers
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignOff = this.handleSignOff.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);


  }

  handleSignOff() {
    this.setState({
      selectedDate: new Date(),
      showItemAddition: false,
      expandItem: false,
      showNutrition: false,
      currentUser: null,
      userInput: "",
      emailInput:"",
      passwordInput: "",
      firstNameInput: "",
      lastNameInput: "",
      profilePicInput: null,
      currentMeal: "",
      loginError: "",
      successMessage: "",
      haveAccount: true,
      showProfile: false

    });

  }

  handleSignIn() {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: this.state.emailInput, password: this.state.passwordInput })
    };

    fetch(foodAPIURL+'/user/login', requestOptions)
    .then(response => response.json()).then( data => {
      if(data["successful"] === false){
        this.setState({
          loginError: data["message"]
        });
      } else{
        this.setState({
          currentUser: data["user"]
        });
      }
    })
    .catch( error => console.log(error));


  }

  handleSignUp() {
    if( this.state.firstNameInput === '' || this.state.lastNameInput === '' || this.state.emailInput === '' || this.state.passwordInput === '' || this.state.profilePicInput === null ) {
      this.setState({
        loginError: "Please make sure all fields are filled in"
      });

    } else {

      // const requestOptions = {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ 
      //     email: this.state.emailInput, 
      //     password: this.state.passwordInput, 
      //     firstName: this.state.firstNameInput, 
      //     lastName: this.state.lastNameInput,
      //     avatar: this.state.profilePicInput
      //    })
      // };

      const form = new FormData();
      form.append("email", this.state.emailInput);
      form.append("password", this.state.passwordInput);
      form.append("firstName", this.state.firstNameInput);
      form.append("lastName", this.state.lastNameInput);
      form.append("avatar", this.state.profilePicInput);

      const requestOptions = {
        method: 'POST',
        body: form,
        mode: 'cors'
      };

  
      fetch(foodAPIURL+'/user/signup', requestOptions)
      .then(response => response.json()).then( data => {
        if(data["successful"] === false){
          if(data["message"] !== null) {
            this.setState({
              loginError: data["message"]
            });
          } else {
            this.setState({
              loginError: "Account failed to be created."
            });
          }
        } else{
          console.log(data);
          this.setState({
            successMessage: data["message"],
            loginError: "",
            haveAccount: true
          });
        }
      })

    }
  }

  handleProfilePicUpload(event) {
    console.log(event.target.files[0]);
    this.setState({
      profilePicInput: event.target.files[0]
    });
  }
  handleFirstNameInputChange(event){
    this.setState({
      firstNameInput: event.target.value
    });
  }

  handleLastNameInputChange(event){
    this.setState({
      lastNameInput: event.target.value
    });
  }

  handleEmailInputChange(event){
    // alert(event.target.value);

    this.setState({
      emailInput: event.target.value
    });

  }

  handlePasswordInputChange(event){
    this.setState({
      passwordInput: event.target.value
    });
  }

  handleShowProfile() {
//    alert(thing);
    this.setState({
      showProfile: !this.state.showProfile
    });
  }

  handleHaveAccountToggle(){


    this.setState({
      haveAccount: !this.state.haveAccount,
      loginError: "",
      successMessage: "",
      emailInput: "",
      passwordInput: "",
      firstNameInput: "",
      lastNameInput: ""
    });
  }

  handleNutritionScreenToggle(){
    this.setState({
      showNutrition: !this.state.showNutrition
    });
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

    if(this.state.showItemAddition === true || this.state.expandItem === true || this.state.currentUser === null || this.state.showProfile === true) {
      return (
        <div className="App">

          <div className="ContainerDark">
            <div className="Header">
              <img className="Logo" src={logo}></img>

              {this.state.currentUser === null &&
                <div className="UserIconHeader" style={{background: "grey"}}></div>
              }
              
              {this.state.currentUser !== null &&
                <div className="UserIconHeader" style={{backgroundImage: "url(\" "+ this.state.currentUser["avatar"] +"\")"}}></div>
              }

              {this.state.currentUser !== null &&
                <p className="UserNameHeader">{this.state.currentUser["name"]}</p>
              }

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


          {this.state.currentUser === null &&
            <SignInScreen
              haveAccount={this.state.haveAccount}
              handleHaveAccountToggle={this.handleHaveAccountToggle}

              handleFirstNameInputChange={this.handleFirstNameInputChange}
              handleLastNameInputChange={this.handleLastNameInputChange}
              handleEmailInputChange={this.handleEmailInputChange}
              handlePasswordInputChange={this.handlePasswordInputChange}
              handleProfilePicUpload={this.handleProfilePicUpload}
              
              handleSignIn={this.handleSignIn}
              handleSignUp={this.handleSignUp}
              error={this.state.loginError}
              successMessage={this.state.successMessage}

            />
          }


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
              handleNutritionScreenToggle={this.handleNutritionScreenToggle}
              showNutrition={this.state.showNutrition}
            />
          }

          {this.state.showProfile === true &&
            <ProfileScreen user={this.state.currentUser} 
              handleShowProfile={this.handleShowProfile}
              handleSignOff={this.handleSignOff}
            />
          }

        </div>
        );
    } else {


        return (
          <div className="App">
            <div className="LightContainer">
              <div className="Header">
                <img className="Logo" src={logo}></img>
                <h1>FoodPal</h1>

                  {this.state.currentUser !== null &&
                    <div className="UserIconHeader" onClick={this.handleShowProfile} style={{backgroundImage: "url(\" "+ this.state.currentUser["avatar"] +"\")"}}></div>
                  }
                  {this.state.currentUser !== null &&
                    <p className="UserNameHeader">{this.state.currentUser["name"]}</p>
                  }

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

            {this.state.showProfile === true &&
              <ProfileScreen handleShowProfile={this.handleShowProfile}
                handleSignOff={this.handleSignOff}
              />
              
            }

        </div>
          );

    }




  }
}
export default App;
