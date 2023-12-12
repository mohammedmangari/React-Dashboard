
import React from 'react';
import BarChart from '../BarChart/BarChart';
import ProductSummarySection from '../ProductSummarySection/ProductSummarySection'; 
import SalesGraphSection from '../SalesGraphSection/SalesGraphSection'; 
import OrderSummary from '../OrderSummary/OrderSummary'; 
import './DashboardContent.css'; 

const DashboardContent = () => {
  return (
    <div className="main-content">
      <div className="left">
        <div className="top-2">
          <BarChart
            className="bar-chart-instance"
            groupClassName="bar-chart-3"
            rectangleClassName="bar-chart-2"
            state="empty"
          />
          <div className="right">
            <ProductSummarySection />
          </div>
        </div>
        <div className="bottom">
          <SalesGraphSection />
        </div>
      </div>
      <OrderSummary />
    </div>
  );
};

export default DashboardContent;
