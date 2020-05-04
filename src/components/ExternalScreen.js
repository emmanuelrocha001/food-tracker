
import React from 'react';
import Button from './Button';
import cross from '.././assets/ui/close.svg';
import ExternalScreenTop from './ExternalScreenTop';
import ExternalScreenBottom from './ExternalScreenBottom';

function ExternalScreen(props) {
    return(
        <div className="DarkBackground">

            <div className="ExternalScreenContainer">
                <ExternalScreenTop screenTitle="Welcome" exitHandler={5}/>
                <div className="ExternalScreenMiddleContainer">
                </div>
                <ExternalScreenBottom loadingExternal={true} buttonText="Sign In"/>
            </div>

        </div>
    );
}


export default ExternalScreen;
