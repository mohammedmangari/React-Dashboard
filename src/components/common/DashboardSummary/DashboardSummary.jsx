import PropTypes from "prop-types";
import React from "react";
import "./DashboardSummary.css";
import  IconDisplay  from "../../icons/IconDisplay";
import  chevronDown from "../../../assets/svg/fi_chevron-down.svg";

const DashboardSummary = ({
    type,
    className,
    iconClassName,
    icon = <IconDisplay className="iconly-light-user" imageSrc={chevronDown} alt="chevron Down" color="#1C1D22" />,
    text = "Customers",
    text1 = "0",
    text2 = "Active",
    divClassName,
    showFilter = true,
}) => {
    return (
        <div className={`dashboard-summary ${className}`}>
            <div className="summary-container">
                <div className="summary-heading">
                    <div className={`icon ${type} ${iconClassName}`}>{icon}</div>
                    {showFilter && ( // Utilisation de showFilter pour conditionner l'affichage de la section
                        <div className="filter">
                            <div className="text-wrapper">This Week</div>
                            <IconDisplay className="fi-chevron-down" imageSrc={chevronDown} alt="Chevron Down" color="#BEC0CA" />
                        </div>
                    )}
                </div>
                <div className={`frame type-${type}`}>
                    {["double", "single"].includes(type) && (
                        <>
                            <div className="total-sales">
                                {type === "single" && <>Total Sales</>}

                                {type === "double" && (
                                    <>
                                        <div className="div">{text}</div>
                                        <div className="frame-2">
                                            <div className="element">{text1}</div>
                                            <div className="text-wrapper-2">+0.00%</div>
                                        </div>
                                    </>
                                )}
                            </div>
                            <div className="frame-3">
                                <div className="element-2">
                                    {type === "single" && <>₦0.00</>}

                                    {type === "double" && <>{text2}</>}
                                </div>
                                <div className="element-3">
                                    {type === "single" && <>+0.00%</>}

                                    {type === "double" && (
                                        <>
                                            <div className="element">{text1}</div>
                                            <div className={`text-wrapper-2 ${divClassName}`}>+0.00%</div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </>
                    )}

                    {type === "tripple" && (
                        <>
                            <div className="frame-4">
                                <div className="div">All Orders</div>
                                <div className="frame-2">
                                    <div className="element">{text1}</div>

                                </div>
                            </div>
                            <div className="frame-4">
                                <div className="div">Pending</div>
                                <div className="frame-2">
                                    <div className="element">{text1}</div>

                                </div>
                            </div>
                            <div className="frame-4">
                                <div className="div">Completed</div>
                                <div className="frame-2">
                                    <div className="element">{text1}</div>
                                    <div className="text-wrapper-2">+0.00%</div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

DashboardSummary.propTypes = {
    type: PropTypes.oneOf(["double", "single", "tripple"]),
    text: PropTypes.string,
    text1: PropTypes.string,
    text2: PropTypes.string,
};


export default DashboardSummary;