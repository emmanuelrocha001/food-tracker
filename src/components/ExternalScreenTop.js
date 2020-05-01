
import React from 'react';
import Button from './Button';
import cross from '.././assets/ui/close.svg';

function ExternalScreenTop(props) {
    return(
        <div className="ExternalScreenTop">
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
        </div>
    );
}


export default ExternalScreenTop;
