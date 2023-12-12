import React, { useState } from 'react';
import { Badge } from "../../common/Badge/Badge";
import IconDisplay from '../../icons/IconDisplay';


const NotificationButton = ({ icon, notificationNumber }) => {
  // State to manage visibility of the notification pop-up
  const [showNotifications, setShowNotifications] = useState(false);

  // Function to toggle visibility of the notification pop-up
  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  return (
    <div className="buttom" onClick={toggleNotifications}>
      <div className="button">
        <IconDisplay className='notification-instance' imageSrc={icon} />
      </div>
      <Badge
        BADGEClassName="design-component-instance-node"
        className="badge-instance"
        corner="rounded"
        number={notificationNumber}
        size="small"
        style="primary"
        type="square"
      />
    
    </div>
  );
};

export default NotificationButton;