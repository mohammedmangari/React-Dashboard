import React from "react";

const IconDisplay = ({ imageSrc, className = "" }) => {
    return (
        <div className={`icon-display-screen ${className}`}>
            <img className="vector" alt="Vector" src={imageSrc} />
        </div>
    );
};


export default IconDisplay;