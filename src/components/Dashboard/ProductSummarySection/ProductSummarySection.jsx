import React from 'react';
import DashboardSummary from '../../common/DashboardSummary/DashboardSummary';
import IconDisplay from '../../icons/IconDisplay';
import Folder from '../../../assets/images/folder.png';
import ShoppingCart from '../../../assets/svg/fi_shopping-cart.svg';
import "./ProductSummarySection.css";

const ProductSummarySection = () => {
  // Array containing data for each summary card
  const summaryData = [
    {
      className: 'dashboard-summary-4',
      divClassName: 'dashboard-summary-2',
      divClassName2: 'dashboard-summary-2',
      divClassName3: 'dashboard-summary-3',
      divClassName4: 'dashboard-summary-3',
      divClassName5: 'dashboard-summary-2',
      divClassName6: 'dashboard-summary-3',
      divClassName7: 'dashboard-summary-3',
      texts:'all-products',
      filterClassName: 'dashboard-summary-card-instance',
      icon: <IconDisplay className="icon-instance-node" imageSrc={Folder} alt="Folder" />,
      iconClassName: 'dashboard-summary-5',
      text: 'All Products',
      text1: '0',
      text2: 'Active',
      type: 'double',
      showFilter: false, // Choisissez ici si vous voulez afficher ou non le filtre pour le premier élément
    },
    {
      className: 'dashboard-summary-6',
      divClassName: 'dashboard-summary-card-instance',
      divClassName3: 'dashboard-summary-7',
      
      icon: <IconDisplay className="icon-instance-node" imageSrc={ShoppingCart} alt="Shopping Cart" />,
      text: 'Abandoned Cart',
      text1: '0',
      text2: 'Customers',
      type: 'double',
      showFilter: true, // Choisissez ici si vous voulez afficher ou non le filtre pour le deuxième élément
    },
  ];

  return (
    <>
      {/* Rendering DashboardSummary components using map */}
      {summaryData.map((summary, index) => (
        <DashboardSummary
          key={index}
          className={summary.className}
          divClassName={summary.divClassName}
          divClassName2={summary.divClassName2}
          divClassName3={summary.divClassName3}
          divClassName4={summary.divClassName4}
          divClassName5={summary.divClassName5}
          divClassName6={summary.divClassName6}
          divClassName7={summary.divClassName7}
          filterClassName={summary.filterClassName}
          icon={summary.icon}
          iconClassName={summary.iconClassName}
          text={summary.text}
          text1={summary.text1}
          text2={summary.text2}
          type={summary.type}
          showFilter={summary.showFilter} // Utilisez la propriété showFilter pour contrôler l'affichage du filtre pour chaque élément
        />
      ))}
    </>
  );
};

export default ProductSummarySection;
