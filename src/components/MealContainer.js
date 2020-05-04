
import React from 'react';
import '.././style/MealContainer.css';

import Item from './Item';
import Button from './Button';
import cross from '../assets/ui/add-dark.svg';
function Meal(props){
    return (
        <div className="MealContainer">
            <div className="LeftTitle">{props.mealTitle}</div>
            <Item
            handleItemScreenToggle={props.handleItemScreenToggle}
            mealName={props.mealTitle}
            isStatic={false}
            />
            <Item
            handleItemScreenToggle={props.handleItemScreenToggle}
            mealName={props.mealTitle}
            isStatic={false}
            />
            <Item
            handleItemScreenToggle={props.handleItemScreenToggle}
            mealName={props.mealTitle}
            isStatic={false}
            />


            <div className="AddButtonContainer">
                <Button
                    outerColor="white"
                    styleClassName="Add"
                    containerSize="32px"
                    imageSize="22px"
                    imageSource={cross}
                    styleClassNameOuter="AddButtonOuter"
                    actionHandler={props.handleSearchScreenToggle}
                />

            </div>

        </div>
    );
}

function MealContainer(props){
    return(
        <div className="Body">
            <Meal
            mealTitle="Breakfast"
            handleSearchScreenToggle={props.handleSearchScreenToggle}
            handleItemScreenToggle={props.handleItemScreenToggle}
            />
            <Meal
            mealTitle="Lunch"
            handleSearchScreenToggle={props.handleSearchScreenToggle}
            handleItemScreenToggle={props.handleItemScreenToggle}
            />
            <Meal
            mealTitle="Dinner"
            handleSearchScreenToggle={props.handleSearchScreenToggle}
            handleItemScreenToggle={props.handleItemScreenToggle}
    
            />
            <Meal
            mealTitle="Other"
            handleSearchScreenToggle={props.handleSearchScreenToggle}
            handleItemScreenToggle={props.handleItemScreenToggle}
            />
        </div>
    );
}


export default MealContainer;