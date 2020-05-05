import React from 'react';
import './App.css';
import './style/MainApp.css';
import './style/ExternalScreen.css';
/*char api*/
import {
  PieChart, Pie, Sector, Cell,
} from 'recharts';
// app assets
import logo from './assets/ui/logo.svg';
import left from './assets/ui/left-arrow.svg';
import right from './assets/ui/right-arrow.svg';
import cross from './assets/ui/close.svg';

// import components
import Button from './components/Button';
import Item from './components/Item';
import ExternalScreenLoading from './components/ExternalScreenLoading';
import ExternalScreenTop from './components/ExternalScreenTop';
import ExternalScreenBottom from './components/ExternalScreenBottom';
import ExternalScreen from './components/ExternalScreen';
import DatePicker from './components/DatePicker';
import MealContainer from './components/MealContainer';
// import screens
import ProfileScreen from './screens/ProfileScreen';
import SignInScreen from './screens/SignInScreen';
import SearchScreen from './screens/SearchScreen';
import ItemScreen from './screens/ItemScreen';
import Helper from './helper.js';

// const foodAPIURL = 'https://localhost:5000'
const foodAPIURL = 'https://food-tracker-api.herokuapp.com'


// helper functions
const helper = new Helper();

//--------------------------------------------------------------------------------------------------->

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loadingExternal: false,
      currentFieldEditName: "",
      editInput: "",
      results: [],
      detailedResults: [],
      currentPage: 1,
      pageSize: 5,
      totalHits: 0,
      selectedDate: new Date(),
      showItemAddition: false,
      expandItem: false,
      showNutrition: false,
      currentUser: null,
      userInput: "",
      searchInput: "",
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

    // date
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleDateDecrement = this.handleDateDecrement.bind(this);
    this.handleDateIncrement = this.handleDateIncrement.bind(this);

    // page
    this.handlePageIncrement = this.handlePageIncrement.bind(this);
    this.handlePageDecrement = this.handlePageDecrement.bind(this);


    // screen toggles
    this.handleSearchScreenToggle = this.handleSearchScreenToggle.bind(this);
    this.handleItemScreenToggle = this.handleItemScreenToggle.bind(this);
    this.handleNutritionScreenToggle = this.handleNutritionScreenToggle.bind(this);
    this.handleHaveAccountToggle = this.handleHaveAccountToggle.bind(this);
    this.handleShowProfile = this.handleShowProfile.bind(this);
    // input handlers
    this.handleEmailInputChange = this.handleEmailInputChange.bind(this);
    this.handlePasswordInputChange = this.handlePasswordInputChange.bind(this);
    this.handleFirstNameInputChange = this.handleFirstNameInputChange.bind(this);
    this.handleLastNameInputChange = this.handleLastNameInputChange.bind(this);
    this.handleProfilePicUpload = this.handleProfilePicUpload.bind(this);
    this.handleQueryChange = this.handleQueryChange.bind(this);
    this.handleEditInputChange = this.handleEditInputChange.bind(this);

    // action handlers
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignOff = this.handleSignOff.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleQuery = this.handleQuery.bind(this);
    this.handleEnterSearch = this.handleEnterSearch.bind(this);
    this.handleEditFieldNameToggle = this.handleEditFieldNameToggle.bind(this);
    this.handleEditProfile = this.handleEditProfile.bind(this);
    // block scroll
    this.handleScroll = this.handleScroll.bind(this);
    // test
    this.setDetailedResults = this.setDetailedResults.bind(this);



  }

  handleEditInputChange(event) {
    this.setState({
      editInput: event.target.value
    });

  }

  handleEditProfile() {
    if(this.state.editInput !== "") {

      var propNameDic = {First: "firstName", Last: "lastName", Email: "email"};
      var updateProps = [];
      var field_name = this.state.currentFieldEditName;
      var prop_name = propNameDic[field_name];
      var prop_value = this.state.editInput;
      updateProps.push({ propName: prop_name, value: prop_value});

      const requestOptions = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updateProps)
      };

      this.setState({
        loadingExternal: true
      });

      fetch(foodAPIURL+'/user/' + this.state.currentUser["userId"], requestOptions)
      .then(response => response.json()).then( data => {
          this.setState({
            currentUser: data["user"],
            loadingExternal: false,
            currentFieldEditName: "",
            editInput: ""
          });

      })
      .catch( error => {
        console.log(error);
        this.setState({
          loadingExternal: false
        });

      });
  
    }
  }
  handleEditFieldNameToggle(fieldName) {
    // alert(fieldName);
    this.setState({
      currentFieldEditName: fieldName
    });
  }

  setDetailedResults() {

    var start = this.state.pageSize * (this.state.currentPage-1);
    var end = start + this.state.pageSize;
    var ids = this.state.results.slice(start, end);



    var fdcids_string = "";
      for(var i=0;i<ids.length;i++) {
        if(i===0) {
          fdcids_string = fdcids_string + "?fdcids=" + ids[i];
        } else {
          fdcids_string = fdcids_string + "&fdcids=" + ids[i];
        }
      }

    this.setState({
      loadingExternal: true
    });

    const requestOps = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    };
    fetch( foodAPIURL + '/search/foods/' + fdcids_string, requestOps)
      .then(response => response.json()).then( data => {

        if(data["detailedResults"].length < 1) {

          // remove results chunk with error from list
          var workingResults = this.state.results;
          workingResults.splice(start, this.state.pageSize);
          this.setState({
            detailedResults: workingResults
          });
          // reload page from updated list
          this.setDetailedResults();
        } else {


          this.setState({
            detailedResults: data["detailedResults"],
            loadingExternal: false
          });
        }



      })
      .catch( error => {
        console.log(error);
      });


  }

  handlePageDecrement() {
    if(this.state.currentPage-1 > 0) {
      var cPage = this.state.currentPage - 1;
      this.setState({
        currentPage: cPage
      });
      this.setDetailedResults();

    }
  }

  handlePageIncrement() {
    // TODO: update condition
    if( this.state.results !== undefined) {
      if(this.state.currentPage + 1 <= Math.ceil(this.state.results.length  / this.state.pageSize)) {
        var cPage = this.state.currentPage + 1;
        this.setState({
          currentPage: cPage
        });
        this.setDetailedResults();

      }

    }
  }

  handleEnterSearch(event) {
    if( event.key === "Enter" ) {
      this.handleQuery();
    }

  }

  handleScroll(event) {
    // alert("im scrolling");
    event.preventDefault();
  }



  handleQuery() {
    if(this.state.searchInput !== "") {
      this.setState({
        loadingExternal: true
      });


      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: this.state.searchInput, pageSize: "150", pageNumber: "1" })
      };
      fetch( foodAPIURL + '/search/', requestOptions)
        .then(response => response.json()).then( data => {


          for(var i=0; i<this.state.pageSize; i++) {

          }

          if(data["results"]) {

            this.setState({
              results: data["results"],
              totalHits: data["totalHits"],
              loadingExternal: false,
              currentPage: 1
            });
            this.setDetailedResults();
          } else {
            this.setState({
              results: [],
              totalHits: 0,
              loadingExternal: false,
              currentPage: 1
            });
          }

        })
        .catch( error => {
          console.log(error);
          console.log("something went wrong with query");

        });

  }

}


  handleQueryChange(event) {

    this.setState({
      searchInput: event.target.value
    });

  }
  handleSignOff() {
    this.setState({
      loadingExternal: false,
      selectedDate: new Date(),
      currentFieldEditName: "",
      currentEditInput: "",
      showItemAddition: false,
      expandItem: false,
      showNutrition: false,
      currentUser: null,
      userInput: "",
      searchInput: "",
      currentPage: 1,
      results: [],
      detailedResults: [],
      totalHits: 0,
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
    if(this.state.emailInput === '' || this.state.passwordInput === '') {
      this.setState({
        loginError: "Please make sure all fields are filled in"
      });

    } else {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: this.state.emailInput, password: this.state.passwordInput })
      };

      this.setState({
        loadingExternal: true
      });

      fetch(foodAPIURL+'/user/login', requestOptions)
      .then(response => response.json()).then( data => {
          this.setState({
            loadingExternal: false
          });

        if(data["successful"] === false){
          this.setState({
            loginError: data["message"],
          });
        } else{
          this.setState({
            currentUser: data["user"],
          });
        }
      })
      .catch( error => console.log(error));

    }




  }

  handleSignUp() {
    if( this.state.firstNameInput === '' || this.state.lastNameInput === '' || this.state.emailInput === '' || this.state.passwordInput === '' || this.state.profilePicInput === null ) {
      this.setState({
        loginError: "Please make sure all fields are filled in"
      });

    } else {

      this.setState({
        loadingExternal: true
      });

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
        this.setState({
          loadingExternal: false
        });

        if(data["successful"] === false){
          if(data["message"] !== null) {
            this.setState({
              loginError: data["message"],
              loadingExternal: false

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
  handleItemScreenToggle(mealTitle) {
    if(mealTitle != null && this.state.expandItem === false){
      this.setState({
        currentMeal: mealTitle
      });
    }

    this.setState({
      expandItem: !this.state.expandItem,
    });

  }

  handleSearchScreenToggle(mealId) {
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

  componentDidMount() {
    document.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.handleScroll);
  }

  render() {

    return (
      <div className="App">

        <div className="Header">
          <img className="Logo" src={logo}></img>
          <h1>FoodPal</h1>


          {this.state.currentUser === null &&
            <div className="UserIconHeader" style={{background: "white"}}></div>
          }

          {this.state.currentUser !== null &&
            <div className="UserIconHeader" onClick={this.handleShowProfile} style={{backgroundImage: "url(\" "+ this.state.currentUser["avatar"] +"\")"}}></div>
          }

          {this.state.currentUser !== null &&
            <p className="UserNameHeader">{this.state.currentUser["firstName"]}</p>
          }

        </div>



        <DatePicker currentDate={this.state.selectedDate}
          handleDateChange={this.handleDateChange}
          handleDateIncrement={this.handleDateIncrement}
          handleDateDecrement={this.handleDateDecrement}
        />

        <MealContainer
          handleSearchScreenToggle={this.handleSearchScreenToggle}
          handleItemScreenToggle={this.handleItemScreenToggle}
          showItemAddition={this.state.showItemAddition}
        />


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
            loadingExternal={this.state.loadingExternal}
            error={this.state.loginError}
            successMessage={this.state.successMessage}

          />
          // <ExternalScreen />
        }


        {this.state.showItemAddition === true &&
          <SearchScreen
            userInput={this.state.userInput}
            handleSearchScreenToggle={this.handleSearchScreenToggle}
            handleItemScreenToggle={this.handleItemScreenToggle}
            loadingExternal={this.state.loadingExternal}
            searchInput={this.state.searchInput}
            handleQueryChange={this.handleQueryChange}
            handleQuery={this.handleQuery}
            handleEnterSearch={this.handleEnterSearch}
            results={this.state.detailedResults}
            totalHits={this.state.totalHits}
            currentPage={this.state.currentPage}
            handlePageDecrement={this.handlePageDecrement}
            handlePageIncrement={this.handlePageIncrement}

          />
        }

        {this.state.expandItem === true &&
          <ItemScreen
            handleItemScreenToggle={this.handleItemScreenToggle}
            currentMeal={this.state.currentMeal}
            showItemAddition={this.state.showItemAddition}
            handleNutritionScreenToggle={this.handleNutritionScreenToggle}
            showNutrition={this.state.showNutrition}
            loadingExternal={this.state.loadingExternal}

          />
        }

        {this.state.showProfile === true &&
          <ProfileScreen 
            user={this.state.currentUser}
            handleShowProfile={this.handleShowProfile}
            handleSignOff={this.handleSignOff}
            loadingExternal={this.state.loadingExternal}
            handleEditFieldNameToggle={this.handleEditFieldNameToggle}
            currentFieldEditName={this.state.currentFieldEditName}
            handleEditProfile={this.handleEditProfile}
            handleEditInputChange={this.handleEditInputChange}
          />
        }

      </div>
    );

  }
}
export default App;
