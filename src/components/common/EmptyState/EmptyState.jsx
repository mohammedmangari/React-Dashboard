// Updated EmptyState.jsx
import PropTypes from "prop-types";
import React from "react";
import { Buttons } from "../Buttons/Buttons";
import "./EmptyState.css";

export const EmptyState = ({ iconlyBulkBag = "bag.svg", buttonsTypePrimaryStyleClassName }) => {
    return (
        <div className="empty-state">
            <div className="icon-container">
                <img className="iconly-bulk-bag" alt="Iconly bulk bag" src={iconlyBulkBag} />
            </div>
            <div className="empty-state-content">
                <div className="description">
                    <div className="text-wrapper">No Orders Yet?</div>
                    <p className="div">Add products to your store and start selling to see orders here.</p>
                </div>
                <div>
                    <Buttons
                        className={buttonsTypePrimaryStyleClassName}
                        half
                        icon
                        iconPosition="left"
                        size="small"
                        state="default"
                        style="filled"
                        text="New Product"
                        type="primary"
                    />
                </div>
            </div>
        </div>
    );
};

EmptyState.propTypes = {
    iconlyBulkBag: PropTypes.string,
};

export default EmptyState;
