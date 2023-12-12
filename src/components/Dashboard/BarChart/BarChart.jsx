import PropTypes from "prop-types";
import React from "react";
import IconDisplay from "../../icons/IconDisplay";
import chevronDown from "../../../assets/svg/fi_chevron-down.svg";
import "./BarChart.css";

const BarChart = ({ state, className, rectangleClassName, groupClassName }) => {
    return (
        <div className={`bar-chart ${className}`}>
            <div className="content">
                <div className="top">
                    <div className="div">
                        <div className="text-wrapper">Marketting</div>
                        <div className="filter">
                            <div className="text-wrapper-2">This Week</div>
                            <IconDisplay className="fi-chevron-down" imageSrc={chevronDown} color="#BEC0CA" />
                        </div>
                    </div>
                    <div className="div">
                        <div className="key">
                            <div className={`rectangle ${rectangleClassName}`} />
                            <div className="text-wrapper-3">Acquisition</div>
                        </div>
                        <div className="key">
                            <div className="rectangle-2" />
                            <div className="text-wrapper-3">Purchase</div>
                        </div>
                        <div className="key">
                            <div className="rectangle-3" />
                            <div className="text-wrapper-3">Retention</div>
                        </div>
                    </div>
                </div>
                <div className={`group ${state} ${groupClassName}`}>
                    {state === "plus-data" && (
                        <div className="overlap-group">
                            <img className="ellipse" alt="Ellipse" src="ellipse-3.svg" />
                            <img className="img" alt="Ellipse" src="ellipse-4.svg" />
                            <img className="ellipse-2" alt="Ellipse" src="ellipse-2.svg" />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

BarChart.propTypes = {
    state: PropTypes.oneOf(["plus-data", "empty"]),
};


export default BarChart;