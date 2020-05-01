import refresh from '.././assets/ui/refresh.svg';
import React from 'react';

function ExternalScreenLoading(props) {
    return(
        <div className="LoadingIconContainer">
            <img src={refresh} className="LoadingIcon">
            </img>
        </div>
    )
}



export default ExternalScreenLoading;