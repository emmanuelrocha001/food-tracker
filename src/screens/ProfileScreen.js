import React from 'react';
import ExternalScreenTop from '.././components/ExternalScreenTop';
import ExternalScreenBottom from '../components/ExternalScreenBottom';
import ProfileItem from '../components/ProfileItem';
import Button from '.././components/Button';
import '.././style/ProfileScreen.css';
import edit from '.././assets/ui/edit-dark.svg'
import googleIcon from '.././assets/ui/google-icon.svg'
import power from '../assets/ui/power-light.svg'
import ExternalScreenLoading from '../components/ExternalScreenLoading';

function ProfileScreen(props) {


    var url = props.user["avatar"];
    return(
        <div className="DarkBackground">
            <div className="ExternalScreenContainer">
                <ExternalScreenTop screenTitle="Profile" exitHandler={props.handleShowProfile}/>
                <div className="ExternalScreenMiddleContainer">

                    <div className="Buffer"></div>

                    <div className="ProfileContentContainer">
                        <div className="ProfileScreenPicContainer">
                            {props.user["avatar"] !== "" &&
                                <div className="ProfileScreenPic" style={{backgroundImage: "url(\" "+ url +"\")"}}></div>
                            }   

                            {props.user["avatar"] === "" &&
                                <p className="profilePicletters">{props.user.firstName.charAt(0) + props.user.lastName.charAt(0) }</p>
                            }
                            
                        </div>
                        <div className="EditProfilePicCContainerOuter">                        
                            <div className="EditProfilePicCContainer">
                                <input className="PicUploader" type="file" accept="image/png, image/jpeg, image/jpg" onChange={props.handleProfilePicEdit} />
                            </div>
                        </div>

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
                                {/* <div className="InfoContainer">Google account linked</div> */}
                                <img className="ProfileGoogleIcon" src={googleIcon}  ></img>
                            </div>
                        }
                    </div>
                
                </div>

                <div className="MilestoneExpansionBottom">
                    {props.loadingExternal === false &&

                        <Button
                            styleClassNameOuter="ExitMilestoneOuter"
                            outerColor="var(--light-background-color)"
                            containerSize="32px"
                            imageSize="18px"
                            imageSource={power}
                            actionHandler={props.handleSignOff}
                        />
                    }

                    {props.loadingExternal === true &&
                        <ExternalScreenLoading />
                    }

                </div>

            </div>
        </div>
    );
}

export default ProfileScreen;