(this["webpackJsonpfood-tracker"]=this["webpackJsonpfood-tracker"]||[]).push([[0],{147:function(e,t,a){e.exports=a.p+"static/media/refresh.70a48665.svg"},178:function(e,t,a){e.exports=a(360)},183:function(e,t,a){},184:function(e,t,a){},25:function(e,t,a){e.exports=a.p+"static/media/left-arrow.d5f28d66.svg"},26:function(e,t,a){e.exports=a.p+"static/media/right-arrow.03316393.svg"},31:function(e,t,a){e.exports=a.p+"static/media/logo.53faf3a1.svg"},35:function(e,t,a){e.exports=a.p+"static/media/close.7c7b7d1e.svg"},360:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(52),s=a.n(r),i=(a(183),a(53)),c=a(54),o=a(7),m=a(148),u=a(149),d=(a(184),a(37)),h=a(31),g=a.n(h),p=a(25),E=a.n(p),N=a(26),S=a.n(N),f=a(35),I=a.n(f);var v=function(e){var t="ButtonOutside",a="white";return null!=e.styleClassNameOuter&&(t=e.styleClassNameOuter),null!=e.outerColor&&(a=e.outerColor),l.a.createElement("div",{className:t,onClick:e.actionHandler,style:{width:e.containerSize,height:e.containerSize,background:a,borderRadius:"50%",transitionDuration:"0s"}},l.a.createElement("img",{className:e.styleClassName,src:e.imageSource,style:{width:e.imageSize,height:e.imageSize}}))};var C=function(e){return!1===e.isStatic?l.a.createElement("div",{className:"Item",onClick:function(){e.handleItemScreenToggle(e.mealName)}},l.a.createElement("p",{className:"ItemName"},"Potato"),l.a.createElement("div",{className:"ItemDescription"},l.a.createElement("p",{className:"LeftItemDescription"},"Generic, 1 Potato"),l.a.createElement("p",{className:"RightItemDescription"},"30"))):l.a.createElement("div",{className:"ItemStatic"},l.a.createElement("p",{className:"ItemName"},"Potato"),l.a.createElement("div",{className:"ItemDescription"},l.a.createElement("p",{className:"LeftItemDescription"},"generic, 1 potato"),l.a.createElement("p",{className:"RightItemDescription"},"30 cal")))},T=a(147),P=a.n(T);var x=function(e){return l.a.createElement("div",{className:"LoadingIconContainer"},l.a.createElement("img",{src:P.a,className:"LoadingIcon"}))};var D=function(e){return l.a.createElement("div",{className:"ExternalScreenTop"},l.a.createElement("p",{className:"ExternalScreenTitle"},e.screenTitle),null!==e.exitHandler&&l.a.createElement("div",{className:"ExitButtonContainer"},l.a.createElement(v,{styleClassName:"Exit",containerSize:"32px",imageSize:"16px",imageSource:I.a,actionHandler:e.exitHandler})))};var b=function(e){return!0===e.loadingExternal?l.a.createElement("div",{className:"ExternalButtonLoading",onClick:e.actionHandler},l.a.createElement(x,null)):l.a.createElement("div",{className:"ExternalButton",onClick:e.actionHandler},l.a.createElement("p",{className:"ExternalButtonText"},e.buttonText))},w=function(){function e(){Object(i.a)(this,e)}return Object(c.a)(e,[{key:"shorten",value:function(e){return e.length>40?e.substring(0,40)+"...":e}},{key:"formatDate",value:function(e){return((e.getMonth()+1).toString().length<2?"0"+(e.getMonth()+1).toString():(e.getMonth()+1).toString())+"/"+(e.getDate().toString().length<2?"0"+e.getDate().toString():e.getDate().toString())+"/"+e.getFullYear().toString()}},{key:"toTitleCase",value:function(e){var t=e.toLowerCase().split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" ");return t.length>35?t.substring(0,35):t}},{key:"toNumberWithCommas",value:function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}}]),e}(),y=new w;var k=function(e){var t=new Date,a=t.getTime();a-=864e5;var n=new Date(a);a+=1728e5;var r=new Date(a),s=y.formatDate(t),i=y.formatDate(n),c=y.formatDate(r),o=y.formatDate(e.currentDate),m="";return m=o===s?"Today":o===i?"Yesterday":o===c?"Tomorrow":o,l.a.createElement("div",{className:"CalendarDateContainer"},l.a.createElement("div",{className:"DateContainer"},l.a.createElement("div",{className:"ArrowButtonContainer"},l.a.createElement(v,{containerSize:"32px",imageSize:"16px",imageSource:E.a,actionHandler:e.handleDateDecrement})),l.a.createElement("div",{className:"CurrentDate"},m),l.a.createElement("div",{className:"ArrowButtonContainer"},l.a.createElement(v,{containerSize:"32px",imageSize:"16px",imageSource:S.a,actionHandler:e.handleDateIncrement}))),l.a.createElement("div",{className:"CalendarContainer"},l.a.createElement("input",{onChange:e.handleDateChange,className:"Calendar",type:"date"})))};function L(e){return l.a.createElement("div",{className:"MealContainer"},l.a.createElement("div",{className:"LeftTitle"},e.mealTitle),l.a.createElement(C,{handleItemScreenToggle:e.handleItemScreenToggle,mealName:e.mealTitle,isStatic:!1}),l.a.createElement(C,{handleItemScreenToggle:e.handleItemScreenToggle,mealName:e.mealTitle,isStatic:!1}),l.a.createElement(C,{handleItemScreenToggle:e.handleItemScreenToggle,mealName:e.mealTitle,isStatic:!1}),l.a.createElement("div",{className:"AddButtonContainer"},l.a.createElement(v,{outerColor:"#F2F2F2",styleClassName:"Add",containerSize:"32px",imageSize:"16px",imageSource:I.a,styleClassNameOuter:"AddButtonOuter",actionHandler:e.handleSearchScreenToggle})))}var H=function(e){return l.a.createElement("div",{className:"Body"},l.a.createElement(L,{mealTitle:"Breakfast",handleSearchScreenToggle:e.handleSearchScreenToggle,handleItemScreenToggle:e.handleItemScreenToggle}),l.a.createElement(L,{mealTitle:"Lunch",handleSearchScreenToggle:e.handleSearchScreenToggle,handleItemScreenToggle:e.handleItemScreenToggle}),l.a.createElement(L,{mealTitle:"Dinner",handleSearchScreenToggle:e.handleSearchScreenToggle,handleItemScreenToggle:e.handleItemScreenToggle}),l.a.createElement(L,{mealTitle:"Other",handleSearchScreenToggle:e.handleSearchScreenToggle,handleItemScreenToggle:e.handleItemScreenToggle}))};var M=function(e){var t=e.user.avatar;return l.a.createElement("div",{className:"ExternalScreen"},l.a.createElement(D,{screenTitle:"Profile",exitHandler:e.handleShowProfile}),l.a.createElement("div",{className:"ProfileScreenPicContainer"},l.a.createElement("div",{className:"ProfileScreenPic",style:{backgroundImage:'url(" '+t+'")'}})),l.a.createElement("div",{className:"ProfileContentContainer"},l.a.createElement("div",{className:"ProfileInfoContainer"},l.a.createElement("div",{className:"LeftProfile"},"Name"),l.a.createElement("p",{className:"RightProfile"},e.user.name," ",e.user.lastName)),l.a.createElement("div",{className:"ProfileInfoContainer"},l.a.createElement("div",{className:"LeftProfile"},"Email"),l.a.createElement("p",{className:"RightProfile"},e.user.email)),l.a.createElement("div",{className:"ProfileInfoContainer"},l.a.createElement("div",{className:"LeftProfile"},"ID"),l.a.createElement("p",{className:"RightProfile"},e.user.userId))),l.a.createElement(b,{buttonText:"Sign Out",loadingExternal:e.loadingExternal,actionHandler:e.handleSignOff}))};var A=function(e){return!0===e.haveAccount?l.a.createElement("div",{className:"ExternalScreen"},l.a.createElement(D,{screenTitle:"Sign In",exitHandler:null}),l.a.createElement("div",{className:"ExternalCenter"},l.a.createElement("div",{className:"LogoIsolatedContainer"},l.a.createElement("img",{className:"LogoIsolated",src:g.a})),l.a.createElement("div",{className:"InfoContainer"},l.a.createElement("input",{className:"InfoInput",type:"text",placeholder:"Email",onChange:e.handleEmailInputChange})),l.a.createElement("div",{className:"InfoContainer"},l.a.createElement("input",{className:"InfoInput",type:"password",placeholder:"Password",onChange:e.handlePasswordInputChange})),l.a.createElement("p",{className:"NoAccountText",onClick:e.handleHaveAccountToggle},"Don't have an account? Sign up here!"),""!=e.error&&l.a.createElement("p",{className:"LoginError"},e.error),""!=e.successMessage&&l.a.createElement("p",{className:"SuccessMessage"},e.successMessage)),l.a.createElement(b,{buttonText:"Sign In",loadingExternal:e.loadingExternal,actionHandler:e.handleSignIn})):l.a.createElement("div",{className:"ExternalScreen"},l.a.createElement(D,{screenTitle:"Sign Up",exitHandler:null}),l.a.createElement("div",{className:"ExternalCenter"},l.a.createElement("div",{className:"LogoIsolatedContainer"},l.a.createElement("img",{className:"LogoIsolated",src:g.a})),l.a.createElement("div",{className:"InfoContainer"},l.a.createElement("input",{className:"InfoInput",type:"text",placeholder:"First Name",onChange:e.handleFirstNameInputChange})),l.a.createElement("div",{className:"InfoContainer"},l.a.createElement("input",{className:"InfoInput",type:"text",placeholder:"Last Name",onChange:e.handleLastNameInputChange})),l.a.createElement("div",{className:"InfoContainer"},l.a.createElement("input",{className:"InfoInput",type:"text",placeholder:"Email",onChange:e.handleEmailInputChange})),l.a.createElement("div",{className:"InfoContainer"},l.a.createElement("input",{className:"InfoInput",type:"password",placeholder:"Password",onChange:e.handlePasswordInputChange})),l.a.createElement("div",{className:"PicUploaderContainer"},l.a.createElement("input",{className:"PicUploader",type:"file",accept:"image/png, image/jpeg, image/jpg",onChange:e.handleProfilePicUpload})),l.a.createElement("p",{className:"NoAccountText",onClick:e.handleHaveAccountToggle},"Already have an account? Sign in here!"),""!==e.error&&l.a.createElement("p",{className:"LoginError"},e.error),""!==e.successMessage&&l.a.createElement("p",{className:"SuccessMessage"},e.successMessage)),l.a.createElement(b,{buttonText:"Sign Up",loadingExternal:e.loadingExternal,actionHandler:e.handleSignUp}))},O=a(80),R=a.n(O),j=new w;function U(e){return l.a.createElement("div",{className:"Item"},void 0!==e.topLeft&&l.a.createElement("p",{className:"ItemName"},e.topLeft),l.a.createElement("div",{className:"ItemDescription"},void 0!==e.bottomLeft&&l.a.createElement("p",{className:"LeftItemDescription"},j.shorten(e.bottomLeft)),l.a.createElement("p",{className:"RightItemDescription"},Math.round(e.bottomRight))))}function z(e){var t=e.results.map((function(e){return l.a.createElement("div",null,!0===isNaN(e)&&l.a.createElement(U,{topLeft:e.topLeft,bottomLeft:e.bottomLeft,bottomRight:e.bottomRight,fdcId:e.fdcId,key:e.fdcId}))}));return l.a.createElement("div",null,l.a.createElement("div",{className:"LeftTitle",style:{fontSize:"15px",marginBottom:"30px"}},"Top Results (",j.toNumberWithCommas(e.totalHits.toString())," total results)"),t)}var F=function(e){return l.a.createElement("div",{className:"ExternalScreen"},l.a.createElement(D,{screenTitle:"Search",exitHandler:e.handleSearchScreenToggle}),l.a.createElement("div",{className:"SearchBarContainer"},l.a.createElement("img",{className:"SearchIcon",src:R.a}),l.a.createElement("input",{className:"SearchBar",type:"text",onChange:e.handleQueryChange,onKeyPress:e.handleEnterSearch})),void 0!==e.results&&e.results.length>0&&l.a.createElement(z,{results:e.results,topResults:e.topResults,pageSize:e.pageSize,currentPage:e.currentPage,totalHits:e.totalHits}),void 0!==e.results&&e.results.length>0&&l.a.createElement("div",{className:"resultPagePicker"},l.a.createElement("div",{className:"DateContainer"},l.a.createElement("div",{className:"ArrowButtonContainer"},l.a.createElement(v,{containerSize:"32px",imageSize:"16px",imageSource:E.a,actionHandler:e.handlePageDecrement})),l.a.createElement("div",{className:"CurrentDate"},e.currentPage),l.a.createElement("div",{className:"ArrowButtonContainer"},l.a.createElement(v,{containerSize:"32px",imageSize:"16px",imageSource:S.a,actionHandler:e.handlePageIncrement})))),l.a.createElement(b,{buttonText:"Search",loadingExternal:e.loadingExternal,actionHandler:e.handleQuery}))};new w;function B(e){return l.a.createElement("div",{className:"ExternalScreen"},l.a.createElement("div",{className:"HideNutritionButton",onClick:e.handleNutritionScreenToggle},"Hide Nutrition \u25b2"),l.a.createElement("div",{className:"Nutrient"},l.a.createElement("p",{className:"NutrientLeft"},"Saturated Fat"),l.a.createElement("p",{className:"NutrientRight"},"2.5 g")),l.a.createElement("div",{className:"Nutrient"},l.a.createElement("p",{className:"NutrientLeft"},"Trans Fat"),l.a.createElement("p",{className:"NutrientRight"},"0 g")),l.a.createElement("div",{className:"Nutrient"},l.a.createElement("p",{className:"NutrientLeft"},"Polyunsaturated Fat"),l.a.createElement("p",{className:"NutrientRight"},"0 g")),l.a.createElement("div",{className:"Nutrient"},l.a.createElement("p",{className:"NutrientLeft"},"Monounsaturated Fat"),l.a.createElement("p",{className:"NutrientRight"},"0 g")),l.a.createElement("div",{className:"Nutrient"},l.a.createElement("p",{className:"NutrientLeft"},"Cholesterol"),l.a.createElement("p",{className:"NutrientRight"},"0 mg")),l.a.createElement("div",{className:"Nutrient"},l.a.createElement("p",{className:"NutrientLeft"},"Sodium"),l.a.createElement("p",{className:"NutrientRight"},"225 mg")),l.a.createElement("div",{className:"Nutrient"},l.a.createElement("p",{className:"NutrientLeft"},"Dietary Fiber"),l.a.createElement("p",{className:"NutrientRight"},"1 g")),l.a.createElement("div",{className:"Nutrient"},l.a.createElement("p",{className:"NutrientLeft"},"Sugar"),l.a.createElement("p",{className:"NutrientRight"},"20 g")),l.a.createElement("div",{className:"Nutrient"},l.a.createElement("p",{className:"NutrientLeft"},"Vitamin D"),l.a.createElement("p",{className:"NutrientRight"},"0 %")),l.a.createElement("div",{className:"Nutrient"},l.a.createElement("p",{className:"NutrientLeft"},"Calcium"),l.a.createElement("p",{className:"NutrientRight"},"0 %")),l.a.createElement("div",{className:"Nutrient"},l.a.createElement("p",{className:"NutrientLeft"},"Iron"),l.a.createElement("p",{className:"NutrientRight"},"0 %")),l.a.createElement("div",{className:"Nutrient"},l.a.createElement("p",{className:"NutrientLeft"},"Pottasium"),l.a.createElement("p",{className:"NutrientRight"},"0 mg")),l.a.createElement("div",{className:"Nutrient"},l.a.createElement("p",{className:"NutrientLeft"},"Vitamin A"),l.a.createElement("p",{className:"NutrientRight"},"0 %")),l.a.createElement("div",{className:"Nutrient"},l.a.createElement("p",{className:"NutrientLeft"},"Vitamin C"),l.a.createElement("p",{className:"NutrientRight"},"0 %")))}function Q(e){var t=[{name:"Carbs",value:40},{name:"Fat",value:10},{name:"Protein",value:2}],a=["#393E46","#f3c623","#848484"];return l.a.createElement("div",{className:"CalMacroContainer"},l.a.createElement(d.c,{className:"Pie",width:90,height:90},l.a.createElement(d.b,{animationDuration:900,animationBegin:100,data:t,innerRadius:22,outerRadius:30,fill:"#FFFFFF",paddingAngle:5},t.map((function(e,t){return l.a.createElement(d.a,{fill:a[t%a.length]})})))))}function J(e){return l.a.createElement("div",{className:"Macro"},"Carbs"===e.name&&l.a.createElement("p",{className:"MacroPercentageCarbs"},e.percent,"%"),"Protein"===e.name&&l.a.createElement("p",{className:"MacroName"},e.percent,"%"),"Fat"===e.name&&l.a.createElement("p",{className:"MacroPercentageProtein"},e.percent,"%"),l.a.createElement("p",{className:"MacroGrams"},e.grams," g"),l.a.createElement("p",{className:"MacroName"},e.name))}function W(e){return l.a.createElement("div",{className:"MacrosContainer"},l.a.createElement(Q,null),l.a.createElement(J,{name:"Carbs",grams:40,percent:77}),l.a.createElement(J,{name:"Fat",grams:10,percent:20}),l.a.createElement(J,{name:"Protein",grams:2,percent:3}))}var V=function(e){return!1===e.showNutrition?l.a.createElement("div",{className:"ExternalScreen"},""===e.currentMeal&&l.a.createElement(D,{screenTitle:"Add Entry",exitHandler:e.handleItemScreenToggle}),""!==e.currentMeal&&l.a.createElement(D,{screenTitle:"Edit Entry",exitHandler:e.handleItemScreenToggle}),l.a.createElement("div",{className:"ExternalScreenContent"},!1===e.showItemAddition&&""!==e.currentMeal&&l.a.createElement("div",{className:"ItemInput"},l.a.createElement("p",{className:"ItemInputLeft"},"Meal"),l.a.createElement("select",{className:"MealSelector"},l.a.createElement("option",{className:"MealSelectorChoice",value:"breakfast"},"Breakfast"),l.a.createElement("option",{className:"MealSelectorChoice",value:"lunch"},"Lunch"),l.a.createElement("option",{className:"MealSelectorChoice",value:"dinner"},"Dinner"),l.a.createElement("option",{className:"MealSelectorChoice",value:"other"},"Other"))),l.a.createElement(C,{mealName:"",isStatic:!0}),l.a.createElement(W,null),l.a.createElement("div",{className:"ItemInput"},l.a.createElement("p",{className:"ItemInputLeft"},"Serving size"),l.a.createElement("select",{className:"MealSelector"},l.a.createElement("option",{className:"MealSelectorChoice",value:"breakfast"},"1 g"),l.a.createElement("option",{className:"MealSelectorChoice",value:"lunch"},"1 cup, diced"),l.a.createElement("option",{className:"MealSelectorChoice",value:"dinner"},"1 oz"),l.a.createElement("option",{className:"MealSelectorChoice",value:"other"},"1 kg"),l.a.createElement("option",{className:"MealSelectorChoice",value:"other"},"1 large"),l.a.createElement("option",{className:"MealSelectorChoice",value:"other"},"1 small"))),l.a.createElement("div",{className:"ItemInput"},l.a.createElement("p",{className:"ItemInputLeft"},"Number of Servings"),l.a.createElement("input",{className:"NumberInput",value:1,type:"text",name:"token",id:"token",inputmode:"numeric",pattern:"[0-9]*",autocomplete:"one-time-code"})),l.a.createElement("div",{className:"ShowNutritionButton",onClick:e.handleNutritionScreenToggle},"Show Nutrition \u25bc")),!1===e.showItemAddition&&l.a.createElement(b,{buttonText:"Update",loadingExternal:e.loadingExternal,actionHandler:e.handleItemScreenToggle}),!0===e.showItemAddition&&l.a.createElement(b,{buttonText:"Add",loadingExternal:e.loadingExternal,actionHandler:e.handleItemScreenScreenToggle})):l.a.createElement(B,{handleNutritionScreenToggle:e.handleNutritionScreenToggle})},q="https://food-tracker-api.herokuapp.com",G=(new w,function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={loadingExternal:!1,results:[],detailedResults:[],currentPage:1,pageSize:5,totalHits:0,selectedDate:new Date,showItemAddition:!1,expandItem:!1,showNutrition:!1,currentUser:null,userInput:"",searchInput:"",emailInput:"",passwordInput:"",firstNameInput:"",lastNameInput:"",profilePicInput:null,currentMeal:"",loginError:"",successMessage:"",haveAccount:!0,showProfile:!1},n.handleDateChange=n.handleDateChange.bind(Object(o.a)(n)),n.handleDateDecrement=n.handleDateDecrement.bind(Object(o.a)(n)),n.handleDateIncrement=n.handleDateIncrement.bind(Object(o.a)(n)),n.handlePageIncrement=n.handlePageIncrement.bind(Object(o.a)(n)),n.handlePageDecrement=n.handlePageDecrement.bind(Object(o.a)(n)),n.handleSearchScreenToggle=n.handleSearchScreenToggle.bind(Object(o.a)(n)),n.handleItemScreenToggle=n.handleItemScreenToggle.bind(Object(o.a)(n)),n.handleNutritionScreenToggle=n.handleNutritionScreenToggle.bind(Object(o.a)(n)),n.handleHaveAccountToggle=n.handleHaveAccountToggle.bind(Object(o.a)(n)),n.handleShowProfile=n.handleShowProfile.bind(Object(o.a)(n)),n.handleEmailInputChange=n.handleEmailInputChange.bind(Object(o.a)(n)),n.handlePasswordInputChange=n.handlePasswordInputChange.bind(Object(o.a)(n)),n.handleFirstNameInputChange=n.handleFirstNameInputChange.bind(Object(o.a)(n)),n.handleLastNameInputChange=n.handleLastNameInputChange.bind(Object(o.a)(n)),n.handleProfilePicUpload=n.handleProfilePicUpload.bind(Object(o.a)(n)),n.handleQueryChange=n.handleQueryChange.bind(Object(o.a)(n)),n.handleSignIn=n.handleSignIn.bind(Object(o.a)(n)),n.handleSignOff=n.handleSignOff.bind(Object(o.a)(n)),n.handleSignUp=n.handleSignUp.bind(Object(o.a)(n)),n.handleQuery=n.handleQuery.bind(Object(o.a)(n)),n.handleEnterSearch=n.handleEnterSearch.bind(Object(o.a)(n)),n.setDetailedResults=n.setDetailedResults.bind(Object(o.a)(n)),n}return Object(c.a)(a,[{key:"setDetailedResults",value:function(){for(var e=this,t=this.state.pageSize*(this.state.currentPage-1),a=t+this.state.pageSize,n=this.state.results.slice(t,a),l="",r=0;r<n.length;r++)l=0===r?l+"?fdcids="+n[r]:l+"&fdcids="+n[r];this.setState({loadingExternal:!0});fetch(q+"/search/foods/"+l,{method:"POST",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(a){if(a.detailedResults.length<1){var n=e.state.results;n.splice(t,e.state.pageSize),e.setState({detailedResults:n}),e.setDetailedResults()}else e.setState({detailedResults:a.detailedResults,loadingExternal:!1})})).catch((function(e){console.log(e)}))}},{key:"handlePageDecrement",value:function(){if(this.state.currentPage-1>0){var e=this.state.currentPage-1;this.setState({currentPage:e}),this.setDetailedResults()}}},{key:"handlePageIncrement",value:function(){if(void 0!==this.state.results&&this.state.currentPage+1<=Math.ceil(this.state.results.length/this.state.pageSize)){var e=this.state.currentPage+1;this.setState({currentPage:e}),this.setDetailedResults()}}},{key:"handleEnterSearch",value:function(e){"Enter"===e.key&&this.handleQuery()}},{key:"handleQuery",value:function(){var e=this;if(""!==this.state.searchInput){this.setState({loadingExternal:!0});var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:this.state.searchInput,pageSize:"150",pageNumber:"1"})};fetch(q+"/search/",t).then((function(e){return e.json()})).then((function(t){for(var a=0;a<e.state.pageSize;a++);t.results?(e.setState({results:t.results,totalHits:t.totalHits,loadingExternal:!1,currentPage:1}),e.setDetailedResults()):e.setState({results:[],totalHits:0,loadingExternal:!1,currentPage:1})})).catch((function(e){console.log(e),console.log("something went wrong with query")}))}}},{key:"handleQueryChange",value:function(e){this.setState({searchInput:e.target.value})}},{key:"handleSignOff",value:function(){this.setState({loadingExternal:!1,selectedDate:new Date,showItemAddition:!1,expandItem:!1,showNutrition:!1,currentUser:null,userInput:"",searchInput:"",currentPage:1,results:[],detailedResults:[],totalHits:0,emailInput:"",passwordInput:"",firstNameInput:"",lastNameInput:"",profilePicInput:null,currentMeal:"",loginError:"",successMessage:"",haveAccount:!0,showProfile:!1})}},{key:"handleSignIn",value:function(){var e=this;if(""===this.state.emailInput||""===this.state.passwordInput)this.setState({loginError:"Please make sure all fields are filled in"});else{var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:this.state.emailInput,password:this.state.passwordInput})};this.setState({loadingExternal:!0}),fetch(q+"/user/login",t).then((function(e){return e.json()})).then((function(t){e.setState({loadingExternal:!1}),!1===t.successful?e.setState({loginError:t.message}):e.setState({currentUser:t.user})})).catch((function(e){return console.log(e)}))}}},{key:"handleSignUp",value:function(){var e=this;if(""===this.state.firstNameInput||""===this.state.lastNameInput||""===this.state.emailInput||""===this.state.passwordInput||null===this.state.profilePicInput)this.setState({loginError:"Please make sure all fields are filled in"});else{this.setState({loadingExternal:!0});var t=new FormData;t.append("email",this.state.emailInput),t.append("password",this.state.passwordInput),t.append("firstName",this.state.firstNameInput),t.append("lastName",this.state.lastNameInput),t.append("avatar",this.state.profilePicInput),fetch(q+"/user/signup",{method:"POST",body:t,mode:"cors"}).then((function(e){return e.json()})).then((function(t){e.setState({loadingExternal:!1}),!1===t.successful?null!==t.message?e.setState({loginError:t.message,loadingExternal:!1}):e.setState({loginError:"Account failed to be created."}):(console.log(t),e.setState({successMessage:t.message,loginError:"",haveAccount:!0}))}))}}},{key:"handleProfilePicUpload",value:function(e){console.log(e.target.files[0]),this.setState({profilePicInput:e.target.files[0]})}},{key:"handleFirstNameInputChange",value:function(e){this.setState({firstNameInput:e.target.value})}},{key:"handleLastNameInputChange",value:function(e){this.setState({lastNameInput:e.target.value})}},{key:"handleEmailInputChange",value:function(e){this.setState({emailInput:e.target.value})}},{key:"handlePasswordInputChange",value:function(e){this.setState({passwordInput:e.target.value})}},{key:"handleShowProfile",value:function(){this.setState({showProfile:!this.state.showProfile})}},{key:"handleHaveAccountToggle",value:function(){this.setState({haveAccount:!this.state.haveAccount,loginError:"",successMessage:"",emailInput:"",passwordInput:"",firstNameInput:"",lastNameInput:""})}},{key:"handleNutritionScreenToggle",value:function(){this.setState({showNutrition:!this.state.showNutrition})}},{key:"handleItemScreenToggle",value:function(e){null!=e&&!1===this.state.expandItem&&this.setState({currentMeal:e}),this.setState({expandItem:!this.state.expandItem})}},{key:"handleSearchScreenToggle",value:function(e){this.setState({showItemAddition:!this.state.showItemAddition})}},{key:"handleDateIncrement",value:function(){var e=this.state.selectedDate.getTime(),t=new Date(e+=864e5);this.setState({selectedDate:t})}},{key:"handleDateDecrement",value:function(){var e=this.state.selectedDate.getTime(),t=new Date(e-=864e5);this.setState({selectedDate:t})}},{key:"handleDateChange",value:function(e){var t=e.target.value.substring(0,4),a=e.target.value.substring(5,7),n=e.target.value.substring(8,10),l=new Date(a+"/"+n+"/"+t);this.setState({selectedDate:l})}},{key:"render",value:function(){return!0===this.state.showItemAddition||!0===this.state.expandItem||null===this.state.currentUser||!0===this.state.showProfile?l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"ContainerDark"},l.a.createElement("div",{className:"Header"},l.a.createElement("img",{className:"Logo",src:g.a}),l.a.createElement("h1",null,"FoodPal"),null===this.state.currentUser&&l.a.createElement("div",{className:"UserIconHeader",style:{background:"grey"}}),null!==this.state.currentUser&&l.a.createElement("div",{className:"UserIconHeader",style:{backgroundImage:'url(" '+this.state.currentUser.avatar+'")'}}),null!==this.state.currentUser&&l.a.createElement("p",{className:"UserNameHeader"},this.state.currentUser.name)),l.a.createElement(k,{currentDate:this.state.selectedDate,handleDateChange:this.handleDateChange,handleDateIncrement:this.handleDateIncrement,handleDateDecrement:this.handleDateDecrement}),l.a.createElement(H,{handleSearchScreenToggle:this.handleSearchScreenToggle,handleItemScreenToggle:this.handleItemScreenToggle,showItemAddition:this.state.showItemAddition})),null===this.state.currentUser&&l.a.createElement(A,{haveAccount:this.state.haveAccount,handleHaveAccountToggle:this.handleHaveAccountToggle,handleFirstNameInputChange:this.handleFirstNameInputChange,handleLastNameInputChange:this.handleLastNameInputChange,handleEmailInputChange:this.handleEmailInputChange,handlePasswordInputChange:this.handlePasswordInputChange,handleProfilePicUpload:this.handleProfilePicUpload,handleSignIn:this.handleSignIn,handleSignUp:this.handleSignUp,loadingExternal:this.state.loadingExternal,error:this.state.loginError,successMessage:this.state.successMessage}),!0===this.state.showItemAddition&&l.a.createElement(F,{userInput:this.state.userInput,handleSearchScreenToggle:this.handleSearchScreenToggle,handleItemScreenToggle:this.handleItemScreenToggle,loadingExternal:this.state.loadingExternal,searchInput:this.state.searchInput,handleQueryChange:this.handleQueryChange,handleQuery:this.handleQuery,handleEnterSearch:this.handleEnterSearch,results:this.state.detailedResults,totalHits:this.state.totalHits,currentPage:this.state.currentPage,handlePageDecrement:this.handlePageDecrement,handlePageIncrement:this.handlePageIncrement}),!0===this.state.expandItem&&l.a.createElement(V,{handleItemScreenToggle:this.handleItemScreenToggle,currentMeal:this.state.currentMeal,showItemAddition:this.state.showItemAddition,handleNutritionScreenToggle:this.handleNutritionScreenToggle,showNutrition:this.state.showNutrition,loadingExternal:this.state.loadingExternal}),!0===this.state.showProfile&&l.a.createElement(M,{user:this.state.currentUser,handleShowProfile:this.handleShowProfile,handleSignOff:this.handleSignOff,loadingExternal:this.state.loadingExternal})):l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"LightContainer"},l.a.createElement("div",{className:"Header"},l.a.createElement("img",{className:"Logo",src:g.a}),l.a.createElement("h1",null,"FoodPal"),null!==this.state.currentUser&&l.a.createElement("div",{className:"UserIconHeader",onClick:this.handleShowProfile,style:{backgroundImage:'url(" '+this.state.currentUser.avatar+'")'}}),null!==this.state.currentUser&&l.a.createElement("p",{className:"UserNameHeader"},this.state.currentUser.name)),l.a.createElement(k,{currentDate:this.state.selectedDate,handleDateChange:this.handleDateChange,handleDateIncrement:this.handleDateIncrement,handleDateDecrement:this.handleDateDecrement}),l.a.createElement(H,{handleSearchScreenToggle:this.handleSearchScreenToggle,handleItemScreenToggle:this.handleItemScreenToggle,showItemAddition:this.state.showItemAddition})))}}]),a}(l.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},80:function(e,t,a){e.exports=a.p+"static/media/search.4a745d6e.svg"}},[[178,1,2]]]);
//# sourceMappingURL=main.de4a82ac.chunk.js.map