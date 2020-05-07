import React from 'react';
import ExternalScreenTop from '.././components/ExternalScreenTop';
import ExternalScreenBottom from '../components/ExternalScreenBottom';
import logo from '.././assets/ui/logo.svg';

function SignInScreen(props) {
    if( props.haveAccount === true ) {
        return(
            <div className="DarkBackground">
                    <div className="ExternalScreenContainer" >
                        <ExternalScreenTop screenTitle="Welcome" exitHandler={null}/>
                        <div className="ExternalScreenMiddleContainer">
                                
                                <div className="Buffer"></div>
                                
                                <div className="LogoIsolatedContainer">
                                    <img className="LogoIsolated" src={logo}></img>
                                </div>
                        
                                <div className="InfoContainer">
                                    {/* <img className="UserNameIcon" src={user}></img> */}
                                    <input className="InfoInput" type="text" placeholder="Email" onChange={props.handleEmailInputChange}/>
                                </div>
                        
                                <div className="InfoContainer">
                                    {/* <img className="UserNameIcon" src={lock}></img> */}
                                    <input className="InfoInput" type="password" placeholder="Password" onChange={props.handlePasswordInputChange} />
                                </div>

                                <div className="GoogleButtonContainer" style={{width: "50%", background: "white", margin: "auto"}} onClick={props.handleGoogleSignIn}>
                                    sign in with google
                                </div>
                        
                                <p className="NoAccountText" onClick={props.handleHaveAccountToggle} >Don't have an account? Sign up here!</p>
                        
                                { props.error != '' &&
                                    <p className="LoginError">{props.error}</p>
                                }
                        
                                {props.successMessage != '' &&
                                    <p className="SuccessMessage">{props.successMessage}</p>
                                }
                        </div>
                    
                        <ExternalScreenBottom buttonText="Sign In" loadingExternal={props.loadingExternal} actionHandler={props.handleSignIn} />
                
                    </div>
                </div>
        );
    } else {
        return(
            <div className="DarkBackground">
    
                <div className="ExternalScreenContainer">
                    <ExternalScreenTop screenTitle="Welcome" exitHandler={null}/>
            
                    <div className="ExternalScreenMiddleContainer">
                        <div className="Buffer">

                        </div>
                        <div className="LogoIsolatedContainer">
                            <img className="LogoIsolated" src={logo}></img>
                        </div>
                
                
                        <div className="InfoContainer">
                            <input className="InfoInput" type="text" placeholder="First Name" onChange={props.handleFirstNameInputChange}/>
                        </div>
                
                        <div className="InfoContainer">
                            <input className="InfoInput" type="text" placeholder="Last Name" onChange={props.handleLastNameInputChange}/>
                        </div>
                
                        <div className="InfoContainer">
                            <input className="InfoInput" type="text" placeholder="Email" onChange={props.handleEmailInputChange}/>
                        </div>
                
                        <div className="InfoContainer">
                            <input className="InfoInput" type="password" placeholder="Password" onChange={props.handlePasswordInputChange}/>
                        </div>
                
                        <div className="PicUploaderContainer">
                            <input className="PicUploader" type="file" accept="image/png, image/jpeg, image/jpg" onChange={props.handleProfilePicUpload} />
                        </div>
                
                        <p className="NoAccountText" onClick={props.handleHaveAccountToggle} >Already have an account? Sign in here!</p>
                
                        { props.error !== '' &&
                            <p className="LoginError">{props.error}</p>
                        }
                
                        {props.successMessage !== '' &&
                            <p className="SuccessMessage">{props.successMessage}</p>
                        }
            
                    </div>
                    <ExternalScreenBottom buttonText="Sign Up" loadingExternal={props.loadingExternal} actionHandler={props.handleSignUp} />
            
                </div>
            </div>
        );
    }
}

export default SignInScreen;
