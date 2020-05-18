import React from 'react';
import '.././style/ItemScreen.css';
/*char api*/
import {
    PieChart, Pie, Sector, Cell,
} from 'recharts';

import ExternalScreenTop from '.././components/ExternalScreenTop';
import ExternalScreenBottom from '../components/ExternalScreenBottom';
import ExternalScreenLoading from '../components/ExternalScreenLoading';

import Helper from '../helper.js';
import Item from '../components/Item';
import Button from '../components/Button';

import left from '../assets/ui/left-arrow.svg';
import right from '../assets/ui/right-arrow.svg';
import search from '../assets/ui/search.svg';

import edit from '../assets/ui/edit-light.svg';
const helper = new Helper();


function NutritionScreen(props) {
    return(
        
        <div className="ExternalScreen">
            <div className="HideNutritionButton" onClick={props.handleNutritionScreenToggle}>
            Hide Nutrition &#9650;
            </div>

            <div className="Nutrient">
                <p className="NutrientLeft">Saturated Fat</p>
                <p className="NutrientRight">2.5 g</p>
            </div>

            <div className="Nutrient">
                <p className="NutrientLeft">Trans Fat</p>
                <p className="NutrientRight">0 g</p>
            </div>

            <div className="Nutrient">
                <p className="NutrientLeft">Polyunsaturated Fat</p>
                <p className="NutrientRight">0 g</p>
            </div>

            <div className="Nutrient">
                <p className="NutrientLeft">Monounsaturated Fat</p>
                <p className="NutrientRight">0 g</p>
            </div>

            <div className="Nutrient">
                <p className="NutrientLeft">Cholesterol</p>
                <p className="NutrientRight">0 mg</p>
            </div>

            <div className="Nutrient">
                <p className="NutrientLeft">Sodium</p>
                <p className="NutrientRight">225 mg</p>
            </div>

            <div className="Nutrient">
                <p className="NutrientLeft">Dietary Fiber</p>
                <p className="NutrientRight">1 g</p>
            </div>

            <div className="Nutrient">
                <p className="NutrientLeft">Sugar</p>
                <p className="NutrientRight">20 g</p>
            </div>

            <div className="Nutrient">
                <p className="NutrientLeft">Vitamin D</p>
                <p className="NutrientRight">0 %</p>
            </div>

            <div className="Nutrient">
                <p className="NutrientLeft">Calcium</p>
                <p className="NutrientRight">0 %</p>
            </div>

            <div className="Nutrient">
                <p className="NutrientLeft">Iron</p>
                <p className="NutrientRight">0 %</p>
            </div>

            <div className="Nutrient">
                <p className="NutrientLeft">Pottasium</p>
                <p className="NutrientRight">0 mg</p>
            </div>

            <div className="Nutrient">
                <p className="NutrientLeft">Vitamin A</p>
                <p className="NutrientRight">0 %</p>
            </div>

            <div className="Nutrient">
                <p className="NutrientLeft">Vitamin C</p>
                <p className="NutrientRight">0 %</p>
            </div>

        </div>
        );
}

function MacrosVisual(props) {
    const data = [{name: 'Carbs', value: 40}, {name: 'Fat', value: 10},
                    {name: 'Protein', value: 2}];
    const COLORS = ['#848484', '#f64b3c', '#8cba51'];

    return (
        <div className="CalMacroContainer">
            <PieChart className="Pie" width={90} height={90}>
                <Pie
                animationDuration={900}
                animationBegin={100}
                data={data}
                innerRadius={22}
                outerRadius={30}
                fill="#FFFFFF"
                paddingAngle={5}
                >
                {
                    data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
                }
                </Pie>
            </PieChart>

        </div>
    );
}

function Macro(props) {
    return(
        <div className="Macro">
            {props.name === "Carbs" &&
                <p className="MacroPercentageCarbs">{props.percent}%</p>
        
            }
            {props.name === "Protein" &&
                <p className="MacroName">{props.percent}%</p>
        
            }
            {props.name === "Fat" &&
                <p className="MacroPercentageProtein">{props.percent}%</p>
            }
            <p className="MacroGrams">{props.grams} g</p>
            <p className="MacroName">{props.name}</p>
        </div>
    );
}

function Macros(props) {
    return(
        <div className="MacrosContainer">
            <MacrosVisual />
            <Macro name="Carbs" grams={40} percent={77}/>
            <Macro name="Fat" grams={10} percent={20}/>
            <Macro name="Protein" grams={2} percent={3}/>
        </div>
    );
}


function ItemScreen(props) {
    if(props.showNutrition === false){
        return(
            <div className="DarkBackground">

                <div className="ExternalScreenContainer">
        
                    {props.currentMeal === "" &&
                        <ExternalScreenTop screenTitle="Add Entry" exitHandler={props.handleItemScreenToggle}/>
                    }
            
                    {props.currentMeal !== "" &&
                        <ExternalScreenTop screenTitle="Edit Entry" exitHandler={props.handleItemScreenToggle}/>
                    }
            
                    <div className="ExternalScreenMiddleContainer">

                        <div className="Buffer"></div>
                        {props.showItemAddition === false && props.currentMeal !== "" &&
                            <div className="ItemInput">
                            <p className="ItemInputLeft">Meal</p>
                            <select className="MealSelector">
                                <option className="MealSelectorChoice" value="breakfast">Breakfast</option>
                                <option className="MealSelectorChoice" value="lunch">Lunch</option>
                                <option className="MealSelectorChoice" value="dinner">Dinner</option>
                                <option className="MealSelectorChoice" value="other">Other</option>
                            </select>
                            </div>
                        }

                        <Item
                            mealName=""
                            isStatic={true}
                        />

                        <Macros />

                        <div className="ItemInput">
                            <p className="ItemInputLeft">Serving size</p>
                            <select className="MealSelector">
                                <option className="MealSelectorChoice" value="breakfast">1 g</option>
                                <option className="MealSelectorChoice" value="lunch">1 cup, diced</option>
                                <option className="MealSelectorChoice" value="dinner">1 oz</option>
                                <option className="MealSelectorChoice" value="other">1 kg</option>
                                <option className="MealSelectorChoice" value="other">1 large</option>
                                <option className="MealSelectorChoice" value="other">1 small</option>


                            </select>
                        </div>

                        <div className="ItemInput">
                            <p className="ItemInputLeft">Number of Servings</p>
                                <input
                                className="NumberInput"
                                value={1}
                                type="text"
                                name="token"
                                id="token"
                                inputmode="numeric"
                                pattern="[0-9]*"
                                autocomplete="one-time-code"
                                />
                        </div>
                
                        <div className="ShowNutritionButton" onClick={props.handleNutritionScreenToggle}>
                            Show Nutrition &#x25BC;
                        </div>
            
                    </div>
            
            
                    {/* {props.showItemAddition === false &&


                        <ExternalScreenBottom buttonText="Update" loadingExternal={props.loadingExternal} actionHandler={props.handleItemScreenToggle} />
            
                    }
                    {props.showItemAddition === true &&
                        <ExternalScreenBottom buttonText="Add" loadingExternal={props.loadingExternal} actionHandler={props.handleItemScreenScreenToggle} />
                    } */}


                <div className="MilestoneExpansionBottom">
                    {props.loadingExternal === false &&

                        <Button
                            styleClassNameOuter="ExitMilestoneOuter"
                            outerColor="var(--light-background-color)"
                            containerSize="32px"
                            imageSize="18px"
                            imageSource={edit}
                            actionHandler={props.handleItemScreenToggle}
                        />
                    }

                    {props.loadingExternal === true &&
                        <ExternalScreenLoading />
                    }

                </div>
        
        
                </div>
            </div>
        );
    } else {
        return(
            <div className="DarkBackground">
                <NutritionScreen handleNutritionScreenToggle={props.handleNutritionScreenToggle} />
            </div>
        );
    }
    
}




export default ItemScreen;