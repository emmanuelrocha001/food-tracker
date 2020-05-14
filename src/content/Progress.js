

import React from 'react';
import '../style/Progress.css';
import Helper from '../helper.js';

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
            {/* <div className="AddMilestoneContainer">

            </div> */}
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
        }
    }


    render() {



        return(

            <MilestoneContainer milestones={this.state.milestones} />
        );
    }
}



export default Progress;