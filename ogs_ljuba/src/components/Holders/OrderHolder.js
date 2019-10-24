import React from 'react';
import OrderCard from '../Cards/OrderCard';

const OrderHolder = ({Orders}) => {
	console.log("ok");
	return (
		<div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
			{
				Orders.map((order, id) => {
					return (
						<OrderCard 
						key={id} 
						orderName = {order.gameName} 
						orderStatus = {order.status}
						/>
					);
				})
			}
		</div>
	);
}

export default OrderHolder;