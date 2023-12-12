import React from 'react'
import Bag2 from "../../../assets/svg/Bag.svg";
import { EmptyState } from "../../common/EmptyState/EmptyState";
import "./OrderSummary.css";
const OrderSummary = () => {
  return (
       <div className="order-summary">
                    <div className="frame-6">
                        <div className="text-wrapper-13">Recent Orders</div>
                        <EmptyState
                            buttonsTypePrimaryStyleClassName="empty-state-2"
                            className="empty-state-instance"
                            iconlyBulkBag={Bag2}
                        />
                    </div>
         </div>
  )
}

export default OrderSummary