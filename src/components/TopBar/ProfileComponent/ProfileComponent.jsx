import React from 'react';
import './ProfileComponent.css';
import NotificationButton from '../NotificationButton/NotificationButton';
import UserProfile from '../UserProfile/UserProfile';

const ProfileComponent = ({ User, icon }) => {
  
  const { name, company, brand, notificationNumber } = User;

  return (
    <>
      {/* Use the NotificationButton component */}
      <NotificationButton icon={icon} notificationNumber={notificationNumber} />
      
      {/* Use the UserProfile component */}
      <UserProfile name={name} company={company} brand={brand} />
    </>
  );
};

export default ProfileComponent;
