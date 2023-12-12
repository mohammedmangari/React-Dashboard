import PropTypes from "prop-types";
import React from "react";
import "./Buttons.css";

export const Buttons = ({ type, style, state, half, size, icon, iconPosition, className, text = "Label" }) => {
    return (
        <div className={`custom-button`}>
            <div className="custom-button-inner">
                <div className="icon-wrapper">
                    <div className="heart-icon">
                        <div className="heart-shape"></div>
                        <div className="heart-line"></div>
                    </div>
                </div>
                <div className="text">
                    {text}
                </div>
            </div>
        </div>
    );
};

Buttons.propTypes = {
    type: PropTypes.oneOf(["primary", "danger", "green"]),
    style: PropTypes.oneOf(["filled", "outline"]),
    state: PropTypes.oneOf(["disabled", "pressed", "shadow", "default"]),
    half: PropTypes.bool,
    size: PropTypes.oneOf(["large", "small"]),
    icon: PropTypes.bool,
    iconPosition: PropTypes.oneOf(["none", "right", "left"]),
    text: PropTypes.string,
};
