import PropTypes from "prop-types";
import React from "react";
import "./Badge.css";

export const Badge = ({ number = "1", text = "BADGE", type, size, corner, style, className, BADGEClassName }) => {
   console.log(number)
    return (
        <div className={`badge ${corner} ${style} ${size} ${type} ${className}`}>
            <div className={`BADGE ${BADGEClassName}`}>
                {type === "default" && <>{text}</>}

                {type === "square" && <>{number}</>}
            </div>
        </div>
    );
};

Badge.propTypes = {
    number: PropTypes.string,
    text: PropTypes.string,
    type: PropTypes.oneOf(["square", "default"]),
    size: PropTypes.oneOf(["large", "small"]),
    corner: PropTypes.oneOf(["rounded", "rectangle"]),
    style: PropTypes.oneOf(["primary", "dark", "light"]),
};
