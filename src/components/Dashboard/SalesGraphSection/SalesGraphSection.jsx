import React from 'react';
import  IconDisplay  from '../../icons/IconDisplay';
import chevronDownPink from "../../../assets/svg/fi_chevron-down-pink.svg";
import chevronDownBlack from "../../../assets/svg/fi_chevron-down-black.svg";

import './SalesGraphSection.css'; 

const SalesGraphSection = () => {
  return (
    <div className="chart">
      <div className="summary-heading-2">
        <div className="frame-4">
          <div className="text-wrapper-7">Summary</div>
          <div className="frame-wrapper">
            <div className="frame-5">
              <div className="text-wrapper-8">Sales</div>
              <IconDisplay className="fi-chevron-down-2" imageSrc={chevronDownPink} alt="fi chevron down pink" />
            </div>
          </div>
        </div>
        <div className="filter-3">
          <div className="text-wrapper-9">Last 7 Days</div>
          <IconDisplay className="fi-chevron-down-3" imageSrc={chevronDownBlack} alt="fi chevron down black"  />
        </div>
      </div>
      <div className="graph-bar">
        <div className="x-axis">
          <div className="text-wrapper-10">100k</div>
          <div className="text-wrapper-11">80k</div>
          <div className="text-wrapper-11">60k</div>
          <div className="text-wrapper-11">40k</div>
          <div className="text-wrapper-11">20k</div>
        </div>
        <div className="bar">
          <div className="bar-2" />
          <div className="text-wrapper-12">Sept 10</div>
        </div>
        <div className="bar">
          <div className="bar-2" />
          <div className="text-wrapper-12">Sept 11</div>
        </div>
        <div className="bar">
          <div className="bar-2" />
          <div className="text-wrapper-12">Sept 12</div>
        </div>
        <div className="bar">
          <div className="bar-2" />
          <div className="text-wrapper-12">Sept 13</div>
        </div>
        <div className="bar">
          <div className="bar-2" />
          <div className="text-wrapper-12">Sept 14</div>
        </div>
        <div className="bar">
          <div className="bar-2" />
          <div className="text-wrapper-12">Sept 15</div>
        </div>
        <div className="bar">
          <div className="bar-2" />
          <div className="text-wrapper-12">Sept 16</div>
        </div>
      </div>
    </div>
  );
};

export default SalesGraphSection;
