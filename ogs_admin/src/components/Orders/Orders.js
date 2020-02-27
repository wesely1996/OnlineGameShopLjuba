import React from 'react';
import OrderCard from './OrderCard';

const Orders = ({FilteredOrders}) => {
	return (
		<div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
			{
				FilteredOrders.map((order, id) => {
					return (
						<OrderCard 
						key={id} 
                        orderId={order._id}
                        userId={order.UserId}
                        orders={order.Orders}
						/>
					);
				})
			}
		</div>
	);
}

export default Orders;