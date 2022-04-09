import React from 'react';
import order from './order.svg';
import tracking from './tracking.svg';
import fastdelivery from './fast-delivery.svg';

const Features =()=>{
	return(
		<div>
			<div className="features">
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-md-4">
                        <div className="order-item">
                            <img src={order} alt="order" />
                            <h4>No Minimum Order</h4>
                            <p>Order in for yourself or for the group with no restrictions on order value</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="order-item">
                            <img src={tracking} alt="order" />
                            <h4>Live Order Tracking</h4>
                            <p>Know where your order is all times from the restaurant to your doorstep</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="order-item">
                            <img src={fastdelivery} alt="order" />
                            <h4>Lightning-Fast Delivery</h4>
                            <p>Experience Hooha superfast delivery for food delivery fresh & on time</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
		</div>
	);
}
export default Features;