
import React from 'react'
import IconDisplay from "../components/icons/IconDisplay";
import Graph from "../assets/images/Graph.png";
import Users from "../assets/images/2_User.png";
import Bag from "../assets/images/Bag.png"; 


const HeaderdashboardData = [
    {
      icon: <IconDisplay className="icon-instance-node" imageSrc={Graph} alt="Graph" />,
      text: "Sales",
      text1: "₦0.00",
      text2: "Volume",
      type: "double",
      showFilter: true
    },
    {
      icon: <IconDisplay className="icon-instance-node" imageSrc={Users} alt="Users" />,
      text: "Customers",
      text1: "0",
      text2: "Active",
      type: "double",
      showFilter: true
    },
    {
      icon: <IconDisplay className="icon-instance-node" imageSrc={Bag} alt="Bag" />,
      text1: "0",
      type: "tripple",
      showFilter: true
    }
  ];

export default HeaderdashboardData