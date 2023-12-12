import React from 'react';
import DashboardSummary from '../../common/DashboardSummary/DashboardSummary';
import "./DashboardHeader.css";
import HeaderdashboardData from '../../../Data/HeaderdashboardData';

const DashboardHeader = () => {

  return (
    <div className="frame-3"> {/* Main container div */}
      {HeaderdashboardData.map((item, index) => {
        let classNames = "dashboard-summary-card";
        // Vérifie si c'est la troisième instance et ajoute la classe spécifique
        if (index === 2) {
          classNames += " design-component-instance-node";
        }

        return (
          <DashboardSummary
            key={index}
            className={classNames}
            divClassName={item.divClassName}
            iconClassName={item.iconClassName}
            {...item}
          />
        );
      })}
    </div>
  );
};

export default DashboardHeader;
