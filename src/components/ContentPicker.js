import React from 'react';
import '../style/ContentPicker.css'



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
            

        </div>

    );
}


export default ContentPicker;