import React from 'react';

function Button(props) {
    var class_name = "ButtonOutside";
    var outerColor = "white";
    if(props.styleClassNameOuter != null) {
        class_name = props.styleClassNameOuter;
    }
    if(props.outerColor != null) {
        outerColor = props.outerColor;
    }

    if(props.edit === true) {
        return(

            <div className={class_name} onClick={ () => props.actionHandler(props.fieldName)} style={{width: props.containerSize, height: props.containerSize, background: outerColor, borderRadius: "50%", transitionDuration: "0s"}} >
                <img
                className={props.styleClassName}
                src={props.imageSource}
                style={{width: props.imageSize, height: props.imageSize}}
                >
                </img>
            </div>
        );
    } else {
        return(

            <div className={class_name} onClick={props.actionHandler} style={{width: props.containerSize, height: props.containerSize, background: outerColor, borderRadius: "50%", transitionDuration: "0s"}} >
                <img
                className={props.styleClassName}
                src={props.imageSource}
                style={{width: props.imageSize, height: props.imageSize}}
                >
                </img>
            </div>
        );
    }
}


export default Button;