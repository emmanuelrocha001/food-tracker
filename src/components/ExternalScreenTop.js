
import React from 'react';
import Button from './Button';
import cross from '.././assets/ui/close-white.svg';

function ExternalScreenTop(props) {
    return(
        <div className="ExternalScreenTopContainer">
            <p className="ExternalScreenTitleText">{props.screenTitle}</p>
            {props.exitHandler !== null &&
                <div className="ExitButtonContainer">
                    <Button
                        styleClassName="Exit"
                        outerColor="#393e46"
                        containerSize="32px"
                        imageSize="16px"
                        imageSource={cross}
                        actionHandler={props.exitHandler}
                    />
                </div>
            }
        </div>
    );
}


export default ExternalScreenTop;

{/* <div className="ExternalScreenTop">
    <p className="ExternalScreenTitle">{props.screenTitle}</p>
    {props.exitHandler !== null &&
        <div className="ExitButtonContainer">
        <Button
            styleClassName="Exit"
            containerSize="32px"
            imageSize="16px"
            imageSource={cross}
            actionHandler={props.exitHandler}
        />
        </div>
    }
</div> */}