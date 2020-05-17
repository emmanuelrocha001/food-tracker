
import React from 'react';
import Button from './Button';
import cross from '.././assets/ui/cross-white.svg';

function ExternalScreenTop(props) {
    return(
        <div className="MilestoneExpansionTop">
            {props.exitHandler !== null &&
                <Button
                    styleClassNameOuter="ExitMilestoneOuter"
                    outerColor="var(--light-background-color)"
                    containerSize="32px"
                    imageSize="15px"
                    imageSource={cross}
                    actionHandler={props.exitHandler}
                />
            }
        </div>
    );
}


export default ExternalScreenTop;

        // <div className="ExternalScreenTopContainer">
        //     <p className="ExternalScreenTitleText">{props.screenTitle}</p>
        //     {props.exitHandler !== null &&
        //         <div className="ExitButtonContainer">
        //             <Button
        //                 styleClassNameOuter="ExitOuter"
        //                 styleClassName="Exit"
        //                 outerColor="#393e46"
        //                 containerSize="32px"
        //                 imageSize="14px"
        //                 imageSource={cross}
        //                 actionHandler={props.exitHandler}
        //             />
        //         </div>
        //     }
        // </div>