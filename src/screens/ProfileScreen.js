import React from 'react';
import ExternalScreenTop from '.././components/ExternalScreenTop';
import ExternalScreenBottom from '../components/ExternalScreenBottom';
import ProfileItem from '../components/ProfileItem';
import Button from '.././components/Button';
import '.././style/ProfileScreen.css';
import edit from '.././assets/ui/edit-dark.svg'


function ProfileScreen(props) {


    var url = props.user["avatar"];
    return(
        <div className="DarkBackground">
            <div className="ExternalScreenContainer">
                <ExternalScreenTop screenTitle="Profile" exitHandler={props.handleShowProfile}/>
                <div className="ExternalScreenMiddleContainer">

                    <div className="Buffer"></div>

                    <div className="ProfileScreenPicContainer">
                        <div className="ProfileScreenPic" style={{backgroundImage: "url(\" "+ url +"\")"}}></div>
                    </div>

                    <div className="ProfileContentContainer">
                        <ProfileItem 
                            fieldName="First"
                            fieldContent={props.user["name"]}
                            handleEditFieldNameToggle={props.handleEditFieldNameToggle}
                            currentFieldEditName={props.currentFieldEditName}
                            handleEditProfile={props.handleEditProfile}
                            handleEditInputChange={props.handleEditInputChange}
                        />
                        <ProfileItem 
                            fieldName="Last"
                            fieldContent={props.user["lastName"]}
                            handleEditFieldNameToggle={props.handleEditFieldNameToggle}
                            currentFieldEditName={props.currentFieldEditName}
                            handleEditProfile={props.handleEditProfile}
                            handleEditInputChange={props.handleEditInputChange}


                        /> 
                        <ProfileItem 
                            fieldName="Email"
                            fieldContent={props.user["email"]}
                            handleEditFieldNameToggle={props.handleEditFieldNameToggle}
                            currentFieldEditName={props.currentFieldEditName}
                            handleEditProfile={props.handleEditProfile}
                            handleEditInputChange={props.handleEditInputChange}

                        
                        /> 

                        <div className="ProfileInfoContainer">
                            <div className="LeftProfile">ID</div>
                            <p className="RightProfile">{props.user["userId"]}</p>
                        </div>
                    </div>
                
                </div>

                <ExternalScreenBottom buttonText="Sign Out" loadingExternal={props.loadingExternal} actionHandler={props.handleSignOff} />
            </div>
        </div>
    );
}

export default ProfileScreen;