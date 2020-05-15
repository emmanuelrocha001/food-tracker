

import React from 'react';
import '../style/Progress.css';
import Helper from '../helper.js';
import Button from '../components/Button';
import check from '../assets/ui/check-green.svg'
import cross from '../assets/ui/cross-red.svg'
import add from '../assets/ui/add-dark.svg'

const helper = new Helper();

function formatDate(d) {
    var eventYear = d.substring(0,4);
    var eventMonth = d.substring(5,7);
    var eventDay = d.substring(8,10);
    var eventDate = eventMonth + '/' + eventDay + '/'+eventYear;
    return eventDate;
}
function Milestone(props) {

    var url = props.info["pic"];

    return(
        <div className="Milestone">
            <div className="MileStoneMainInfoContainer">
                <div className="IndicatorContainer">
                    {props.indicator === "down" &&
                        <div className="IndicatorDown" > </div>
                    }
                    {props.indicator === "up" &&
                        <div className="IndicatorUp" > </div>

                    }
                </div>
                <div className="MilestoneWeight">
                    {props.info["weight"]} lbs.
                </div>
                <div className="MilestoneDate">
                    {formatDate(props.info["date"])}
                </div>

            </div>
            {props.info["pic"] &&
                <div className="MileStonePicContainer">
                    <div className="MileStonePic" style={{backgroundImage: "url(\" "+ url +"\")"}}>

                    </div>
                </div>

            }
            <div className="LineContainer">
                <div className="Line">
                    
                </div>
            </div>

        </div>
    );

}

function MilestoneContainer(props) {
    const listMilestones =  props.milestones.map( (milestone, index) => {
        var indicator = "";
        if(index < props.milestones.length - 1) {
            if(props.milestones[index]["weight"] < props.milestones[index+1]["weight"]) {
                indicator = "down"
            } else if(props.milestones[index]["weight"] > props.milestones[index+1]["weight"]) {
                indicator = "up"
            }
        }
        return (
        <div key={milestone["_id"]}>
            <Milestone
                info={milestone}
                index={index}
                indicator={indicator}
            />
        </div>
        );

    });

    return(
        <div>
            <div className="AddMilestoneContainer">
                <div style={{color: "var(--gray-color", fontSize: "var(--medium-font-size)"}}>Add Weight</div>
                {props.expandAddMenu === false &&
                    <div className="MilestoneAdditionExpand">
                        <Button
                                styleClassNameOuter="AddOuterMilestone"
                                outerColor="white"
                                containerSize="32px"
                                imageSize="18px"
                                imageSource={add}
                                actionHandler={props.toggleExpandAddMenu}
                        />
                    </div>
                }
                {props.expandAddMenu === true &&
                <div>
                    <div className="EditMilestoneWeightContainer">
                        <input className="EditMilestoneWeightInput" type="text" inputMode="numeric" placeholder="" />
                        <div className="MilestoneWeightText">lbs.</div>
                    </div>
                    <div className="MilestonePictureInputContainer">
                            <div className="EditProfilePicCContainerOuter">                        
                                <div className="EditProfilePicCContainer">
                                    <input className="PicUploader" type="file" accept="image/png, image/jpeg, image/jpg" onChange={props.handleProfilePicEdit} />
                                </div>
                            </div>
                    </div>

                    <div className="MilestoneConfirmationContainer">
                        <div className="ProfileEditActionContainer">

                            <Button
                                styleClassNameOuter="EditOuterQuit"
                                outerColor="white"
                                containerSize="32px"
                                imageSize="18px"
                                imageSource={cross}
                                actionHandler={props.toggleExpandAddMenu}

                            />
                            <Button
                                styleClassNameOuter="EditOuterCheck"
                                outerColor="white"
                                containerSize="32px"
                                imageSize="18px"
                                imageSource={check}
                            />

                        </div>
                    </div>
                </div>
                }
            </div>
            {listMilestones}
        </div>
    )
}

class Progress extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedMilestone: "",
            milestones: props.milestones,
            expandAddMenu: false
        }

    this.toggleExpandAddMenu = this.toggleExpandAddMenu.bind(this);
        
    }

    toggleExpandAddMenu() {
        var n = !(this.state.expandAddMenu);
        // alert("heloi");
        this.setState({
            expandAddMenu: n
        });
    }


    render() {



        return(

            <MilestoneContainer 
            toggleExpandAddMenu={this.toggleExpandAddMenu}
            expandAddMenu={this.state.expandAddMenu}
            milestones={this.state.milestones} />
        );
    }
}



export default Progress;