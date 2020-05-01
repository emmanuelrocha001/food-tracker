import React from 'react';

function Item(props){
    if( props.isStatic === false) {
        return(
            <div className="Item" onClick={() =>{props.handleItemScreenToggle(props.mealName)}}>
            <p className="ItemName">Potato</p>
            <div className="ItemDescription">
                <p className="LeftItemDescription">Generic, 1 Potato</p>
                <p className="RightItemDescription">30</p>
            </div>
            </div>

        );

    } else{
        return(
            <div className="ItemStatic" >
            <p className="ItemName">Potato</p>
            <div className="ItemDescription">
                <p className="LeftItemDescription">generic, 1 potato</p>
                <p className="RightItemDescription">30 cal</p>
            </div>
            </div>

        );
    }

}


export default Item;