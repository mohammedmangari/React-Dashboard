import React from 'react';
import IconDisplay from '../../icons/IconDisplay';
import Home_icon from  '../../../assets/images/Home.png';

const Breadcrumbs = ({ currentPage, pageNames }) => {
  const renderPageNames = () => {
    return pageNames.map((pageName, index) => (
      <div className="div-2" key={index}>
        {index > 0 && <div className="text-wrapper-4">/</div>}
        <div className="text-wrapper-5">{pageName}</div>
      </div>
    ));
  };

  return (
      <div className="div-2">
        <IconDisplay className="iconly-bulk-home" imageSrc={Home_icon} color="#D23565" />
        {renderPageNames()}
      </div>
    
  );
};

export default Breadcrumbs;
