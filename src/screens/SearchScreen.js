import React from 'react';
import '.././style/SearchScreen.css';

import ExternalScreenTop from '.././components/ExternalScreenTop';
import ExternalScreenBottom from '../components/ExternalScreenBottom';
import Helper from '../helper.js';
import Button from '../components/Button';

import left from '../assets/ui/left-arrow-dark.svg';
import right from '../assets/ui/right-arrow-dark.svg';
import search from '../assets/ui/search.svg';
const helper = new Helper();

function Result(props) {
    return(
        <div className="Item" >
            {props.topLeft !== undefined &&
                <p className="ItemName">{props.topLeft}</p>
    
            }
            <div className="ItemDescription">
                {props.bottomLeft !== undefined &&

                    <p className="LeftItemDescription">{helper.shorten(props.bottomLeft)}</p>
                }
                <p className="RightItemDescription">{Math.round(props.bottomRight)}</p>
            </div>
        </div>
    );
}


function Results(props) {
    const listResults =  props.results.map( result =>
        <div>
            {isNaN(result) === true &&
                <Result
                topLeft={result["topLeft"]}
                bottomLeft={result["bottomLeft"]}
                bottomRight={result["bottomRight"]}
                fdcId={result["fdcId"]}
                key={result["fdcId"]}
                />
            }
        </div>
    );

    return(
        <div>
            <div className="LeftTitle" style={{fontSize: "15px", marginBottom: "30px"}}>Top Results ({helper.toNumberWithCommas(props.totalHits.toString())} total results)</div>
            {listResults}
        </div>
    )
}


function SearchScreen(props) {
    return(

        <div className="DarkBackground">
            <div className="ExternalScreenContainer">
                <ExternalScreenTop screenTitle="Powered by FoodData Central" exitHandler={props.handleSearchScreenToggle} />
                <div className="ExternalScreenMiddleContainer">
                    <div className="Buffer"></div>

                    <div className="SearchBarContainer">
                        <input className="SearchBar" type="text" onChange={props.handleQueryChange} onKeyPress={props.handleEnterSearch} />
                        <img className="SearchIcon" src={search}></img>
                    </div>
            
                    {props.results !== undefined && props.results.length > 0 &&
                        <Results
                            results={props.results}
                            topResults={props.topResults}
                            pageSize={props.pageSize}
                            currentPage={props.currentPage}
                            totalHits={props.totalHits}
                        />
                    }
            
                    {props.results !== undefined && props.results.length > 0 &&
                        <div className="resultPagePicker">
                            <div className="DateContainer">
                                <div className="ArrowButtonContainer">
                                    <Button
                                    outerColor="white"
                                    containerSize="32px"
                                    imageSize="16px"
                                    imageSource={left}
                                    actionHandler={props.handlePageDecrement}
                                    />
                                </div>
                                <div className="CurrentDate">{props.currentPage}</div>
                                <div className="ArrowButtonContainer">
                                    <Button
                                    outerColor="white"
                                    containerSize="32px"
                                    imageSize="16px"
                                    imageSource={right}
                                    actionHandler={props.handlePageIncrement}
                                    />
                                </div>
                            </div>
                        </div>
                    }
                </div>
                <ExternalScreenBottom buttonText="Search" loadingExternal={props.loadingExternal} actionHandler={props.handleQuery} />
            </div>
        </div>
    );
}

export default SearchScreen;