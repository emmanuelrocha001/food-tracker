import React from 'react';
import ExternalScreenTop from '.././components/ExternalScreenTop';
import ExternalScreenBottom from '../components/ExternalScreenBottom';
import logo from '.././assets/ui/logo.svg';
import googleIcon from '.././assets/ui/google-icon.svg'
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}
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

                                <div className="InfoContainer">
                                    or
                                </div>

                                <div className="GoogleButtonContainer" onClick={props.handleGoogleSignIn} >
                                    <img className="GoogleIcon" src={googleIcon} ></img>
                                    Sign in with Google
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

                        <div className="InfoContainer">
                            or
                        </div>

                        <div className="GoogleButtonContainer" onClick={props.handleGoogleSignUp} >
                            <img className="GoogleIcon" src={googleIcon}  ></img>
                            Sign up with Google
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
