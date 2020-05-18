import React from 'react';
import '../style/MilestoneInspectionScreen.css';
import Button from '../components/Button';
import ProfileItem from '../components/ProfileItem';
import ExternalScreenTop from '.././components/ExternalScreenTop';
import ExternalScreenBottom from '../components/ExternalScreenBottom';
import exit from '.././assets/ui/cross-white.svg';
import add from '.././assets/ui/edit-light.svg';
import ExternalScreenLoading from '../components/ExternalScreenLoading';
function MilestoneAddScreen(props) {

    // var url = props.currentMilestone["pic"];

    return(
    <div className="DarkBackground">
        <div className="ExternalScreenContainer">
            <ExternalScreenTop screenTitle="Profile" exitHandler={props.toggleshowMilestoneAddScreen}/>

            <div className="MilestoneExternalScreenMiddleContainer" >

                <div className="MilestoneAddScreenMiddle">
                    <div className="MilestoneAddScreenTitle">Milestone</div>
                    
                    <ProfileItem 
                        fieldName="Weight"
                        fieldContent={props.user["weight"] + " lbs."}
                        handleEditFieldNameToggle={props.handleEditFieldNameToggle}
                        currentFieldEditName={props.currentFieldEditName}
                        handleEditProfile={props.handleEditProfile}
                        handleEditInputChange={props.handleEditInputChange}
                        handleQuitEditProfile={props.handleQuitEditProfile}
                    />

                    <div className="EditProfilePicCContainerOuter">                        

                        <div className="EditProfilePicCContainer">
                            <input className="PicUploader" type="file" accept="image/png, image/jpeg, image/jpg" onChange={props.handleMilestonePicInput} />
                        </div> 
                    </div>
                </div>

            </div>

            <div className="MilestoneExpansionBottom">
                {props.loadingExternal === false &&
                    <Button
                        styleClassNameOuter="ExitMilestoneOuter"
                        outerColor="var(--light-background-color)"
                        containerSize="32px"
                        imageSize="18px"
                        imageSource={add}
                        actionHandler={props.handleMilestoneAdd}
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


export default MilestoneAddScreen; 

