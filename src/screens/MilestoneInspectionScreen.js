import React from 'react';
import '../style/MilestoneInspectionScreen.css';
import Button from '../components/Button';
import ProfileItem from '../components/ProfileItem';
import ExternalScreenTop from '.././components/ExternalScreenTop';
import ExternalScreenBottom from '../components/ExternalScreenBottom';
import exit from '.././assets/ui/cross-white.svg';
import can from '.././assets/ui/can.svg';
import ExternalScreenLoading from '../components/ExternalScreenLoading';

function formatDate(d) {
    var eventYear = d.substring(0,4);
    var eventMonth = d.substring(5,7);
    var eventDay = d.substring(8,10);
    var eventDate = eventMonth + '/' + eventDay + '/'+eventYear;
    return eventDate;
}

function MilestoneInspectionScreen(props) {

    var url = props.currentMilestone["pic"];

    return(
    <div className="DarkBackground">
        <div className="ExternalScreenContainer">
            <ExternalScreenTop screenTitle="Profile" exitHandler={props.handleMilestoneInspectExit}/>

            <div className="ExternalScreenPicture">
                <div className="MilestoneInspectionPic" style={{backgroundImage: "url(\" "+ url +"\")"}}>

                </div>

            </div>
            <div className="MilestoneExpansionBottom">
                {props.loadingExternal === false &&
                    <Button
                        styleClassNameOuter="EditOuterQuit"
                        outerColor="var(--light-background-color)"
                        containerSize="32px"
                        imageSize="18px"
                        imageSource={can}
                        actionHandler={props.handleMilestoneDeletion}
                    />
                }
                {props.loadingExternal === true &&
                    <ExternalScreenLoading />
                }

            </div>

            {/* <ExternalScreenBottom buttonText="Sign Out" loadingExternal={props.loadingExternal} actionHandler={props.handleSignOff} /> */}
        </div>
    </div>
    );
}


export default MilestoneInspectionScreen; 

