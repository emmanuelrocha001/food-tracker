import React from 'react';
import '../style/ContentPicker.css';
import Button from './Button';
import add from '../assets/ui/edit-dark.svg'

function ContentPickerItem(props) {
    if(props.currentContent  === props.contentName) {
        return(
            <div className="ContentPickerItemSelected" onClick={ () => props.handleContentPicker(props.contentName)}>
                {props.contentName}
            </div>
        );
    } else {
        return (
            <div className="ContentPickerItem" onClick={ () => props.handleContentPicker(props.contentName)}>
                {props.contentName}
            </div>
        );
    }
}
function ContentPicker(props) {

    return(
        <div className="ContentPickerContainer">

            {props.currentContent === "Diary" &&

                <div className="ContentPickerItem" >
                    <Button
                        styleClassNameOuter="AddOuterMilestone"
                        outerColor="none"
                        containerSize="32px"
                        imageSize="18px"
                        imageSource={add}
                        actionHandler={props.toggleExpandAddMenu}
                    />
                </div>

            }
            <ContentPickerItem 
                currentContent={props.currentContent} 
                contentName="Diary"
                handleContentPicker={props.handleContentPicker}
            />
            <ContentPickerItem 
                currentContent={props.currentContent} 
                contentName="Progress" 
                handleContentPicker={props.handleContentPicker}
            />

            {props.currentContent === "Progress" &&

                <div className="ContentPickerItem" >
                    <Button
                        styleClassNameOuter="AddOuterMilestone"
                        outerColor="none"
                        containerSize="32px"
                        imageSize="18px"
                        imageSource={add}
                        actionHandler={props.toggleshowMilestoneAddScreen}
                    />
                </div>

            }
            

        </div>

    );
}


export default ContentPicker;