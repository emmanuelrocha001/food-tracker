import React from 'react';
import ExternalScreenTop from '.././components/ExternalScreenTop';
import ExternalScreenBottom from '../components/ExternalScreenBottom';

function ProfileScreen(props) {


    var url = props.user["avatar"];
    return(
        <div className="DarkBackground">
            <div className="ExternalScreen">
                <ExternalScreenTop screenTitle="Profile" exitHandler={props.handleShowProfile}/>
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

                <ExternalScreenBottom buttonText="Sign Out" loadingExternal={props.loadingExternal} actionHandler={props.handleSignOff} />
            </div>
        </div>
    );
}

export default ProfileScreen;