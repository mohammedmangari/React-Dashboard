import React from 'react';
import './UserProfile.css';

const UserProfile = ({ name, company, brand }) => {
  return (
    <div className="frame">
      <div className="group">
        <div className="div">
          <div className="text-wrapper-2">{name}</div>
          <div className="text-wrapper-3">{company}</div>
        </div>
      </div>
      <div className="avatar-image">
        {/* Display the 'brand' image */}
        <img className="WING" alt="Wing" src={brand} />
        <div className="base" />
      </div>
    </div>
  );
};

export default UserProfile;
