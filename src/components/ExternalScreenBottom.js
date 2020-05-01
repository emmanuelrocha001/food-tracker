import React from 'react';
import ExternalScreenLoading from './ExternalScreenLoading';

function ExternalScreenBottom(props) {

    if(props.loadingExternal === true) {
        return(
            <div className="ExternalButtonLoading" onClick={props.actionHandler}>
                <ExternalScreenLoading />
            </div>
        );
    } else {
        return(
            <div className="ExternalButton" onClick={props.actionHandler}>
                <p className="ExternalButtonText">{props.buttonText}</p>
            </div>
        );
    }
}

export default ExternalScreenBottom;
