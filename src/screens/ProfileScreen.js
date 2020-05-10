import React from 'react';
import ExternalScreenTop from '.././components/ExternalScreenTop';
import ExternalScreenBottom from '../components/ExternalScreenBottom';
import ProfileItem from '../components/ProfileItem';
import Button from '.././components/Button';
import '.././style/ProfileScreen.css';
import edit from '.././assets/ui/edit-dark.svg'
import googleIcon from '.././assets/ui/google-icon.svg'


function ProfileScreen(props) {


    var url = props.user["avatar"];
    return(
        <div className="DarkBackground">
            <div className="ExternalScreenContainer">
                <ExternalScreenTop screenTitle="Profile" exitHandler={props.handleShowProfile}/>
                <div className="ExternalScreenMiddleContainer">

                    <div className="Buffer"></div>

                    <div className="ProfileScreenPicContainer">
                        {props.user["avatar"] !== "" &&
                            <div className="ProfileScreenPic" style={{backgroundImage: "url(\" "+ url +"\")"}}></div>

                        }   

                        {props.user["avatar"] === "" &&
                            <p className="profilePicletters">{props.user.firstName.charAt(0) + props.user.lastName.charAt(0) }</p>
                        }
                    </div>

                    <div className="ProfileContentContainer">
                        <ProfileItem 
                            fieldName="First"
                            fieldContent={props.user["firstName"]}
                            handleEditFieldNameToggle={props.handleEditFieldNameToggle}
                            currentFieldEditName={props.currentFieldEditName}
                            handleEditProfile={props.handleEditProfile}
                            handleEditInputChange={props.handleEditInputChange}
                            handleQuitEditProfile={props.handleQuitEditProfile}
                        />
                        <ProfileItem 
                            fieldName="Last"
                            fieldContent={props.user["lastName"]}
                            handleEditFieldNameToggle={props.handleEditFieldNameToggle}
                            currentFieldEditName={props.currentFieldEditName}
                            handleEditProfile={props.handleEditProfile}
                            handleEditInputChange={props.handleEditInputChange}
                            handleQuitEditProfile={props.handleQuitEditProfile}


                        />

                        <ProfileItem 
                            fieldName="Weight"
                            fieldContent={props.user["weight"] + " lbs."}
                            handleEditFieldNameToggle={props.handleEditFieldNameToggle}
                            currentFieldEditName={props.currentFieldEditName}
                            handleEditProfile={props.handleEditProfile}
                            handleEditInputChange={props.handleEditInputChange}
                            handleQuitEditProfile={props.handleQuitEditProfile}


                        /> 

                        <div className="ProfileInfoContainer">
                            <div className="LeftProfile">Email</div>
                            <p className="RightProfile">{props.user["email"]}</p>
                        </div>

                        {props.user["googleId"] &&
                            <div className="ProfileInfoContainer">
                                <div className="InfoContainer">Google account linked</div>
                                <img className="ProfileGoogleIcon" src={googleIcon}  ></img>
                            </div>
                        }
                    </div>
                
                </div>

                <ExternalScreenBottom buttonText="Sign Out" loadingExternal={props.loadingExternal} actionHandler={props.handleSignOff} />
            </div>
        </div>
    );
}

export default ProfileScreen;