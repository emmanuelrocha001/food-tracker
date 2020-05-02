import React from 'react';
import ExternalScreenLoading from './ExternalScreenLoading';

function ExternalScreenBottom(props) {

    if(props.loadingExternal === true) {
        return(
            <div className="ExternalScreenBottom">
                <div className="ExternalButtonLoading" onClick={props.actionHandler}>
                    <ExternalScreenLoading />
                </div>
            </div>
        );
    } else {
        return(
            <div className="ExternalScreenBottom">
                <div className="ExternalButton" onClick={props.actionHandler}>
                    <p className="ExternalButtonText">{props.buttonText}</p>
                </div>
            </div>

        );
    }
}

export default ExternalScreenBottom;
