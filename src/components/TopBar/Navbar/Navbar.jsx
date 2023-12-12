import React from "react";
import PropTypes from "prop-types";
import ProfileComponent from "../../../components/TopBar/ProfileComponent/ProfileComponent";
import ProfileData from "../../../Data/profileData";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import notification from "../../../assets/svg/notification.svg";
import "./Navbar.css";

/**
 * Functional component representing the Top Navigation bar.
 * @param {string} title - The title to be displayed in the navigation bar.
 * @param {string} classname - Additional class name for the top navigation bar.
 * @param {string} brand - URL or source of the brand icon/image.
 */
const Navbar = ({ title, classname = "top-nav", brand = notification }) => {
  // List of page names for breadcrumbs
  const pageNames = ["Home", "Products", "About", "Contact"];
  

  return (
    <div className={classname}>
      <div className="nav-container-wrapper">
        <div className="nav-container">
          {/* Display the title */}
          <div className="text-wrapper">{title}</div>
          {/* Display user profile information */}
          <div className="profile">
            <ProfileComponent User={ProfileData} icon={brand} />
          </div>
        </div>
      </div>
      {/* Display breadcrumbs */}
      <div className="breadcrumbs">
        <Breadcrumbs currentPage={title} pageNames={pageNames} />
      </div>
    </div>
  );
};

// Prop types definition
Navbar.propTypes = {
  // Prop for the brand image URL or source
  brand: PropTypes.string,
};

export default Navbar;
