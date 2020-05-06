import React from 'react';
import Button from './Button';

import edit from '.././assets/ui/edit-dark.svg'
import check from '.././assets/ui/check-green.svg'
import cross from '.././assets/ui/cross-red.svg'

function ProfileItem(props) {


    return(
        <div className="ProfileInfoContainer">
            <div className="LeftProfile">{props.fieldName}</div>
            {props.currentFieldEditName !== props.fieldName &&

                <p className="RightProfile">{props.fieldContent} </p>
            }

            {props.currentFieldEditName === props.fieldName && props.currentFieldEditName !== "Weight"&&
                <div className="EditInputFieldContainer">
                    <input className="EditInputField" type="text" onBlur={props.handleEditProfile} placeholder="" onChange={props.handleEditInputChange}/>
                </div>

            }

            {props.currentFieldEditName === props.fieldName && props.currentFieldEditName === "Weight" &&
                <div className="EditInputFieldContainer">
                    <input className="EditInputField" type="text" onBlur={props.handleQuitEditProfile} inputmode="numeric" placeholder="" onChange={props.handleEditInputChange}/>
                </div>

            }


            {props.currentFieldEditName === "" &&
                <Button
                    styleClassNameOuter="EditOuter"
                    outerColor="white"
                    containerSize="32px"
                    imageSize="18px"
                    imageSource={edit}
                    actionHandler={props.handleEditFieldNameToggle}
                    edit={true}
                    fieldName={props.fieldName}
                />
            }

            {props.currentFieldEditName === props.fieldName &&
                <div className="ProfileEditActionContainer">

                    <Button
                        styleClassNameOuter="EditOuterQuit"
                        outerColor="white"
                        containerSize="32px"
                        imageSize="18px"
                        imageSource={cross}
                        actionHandler={props.handleQuitEditProfile}
                    />
                    <Button
                        styleClassNameOuter="EditOuterCheck"
                        outerColor="white"
                        containerSize="32px"
                        imageSize="18px"
                        imageSource={check}
                        actionHandler={props.handleEditProfile}
                    />

                </div>
            }
            
        </div>


    );

}
{/* <input className="InfoInput" type="text" placeholder="Email" onChange={props.handleEmailInputChange}/> */}


export default ProfileItem;