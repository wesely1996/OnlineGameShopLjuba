import React from 'react';
import OrderCard from '../Cards/OrderCard';

const OrderHolder = ({Orders, AllGames}) => {

	const nameOfGame = (order) =>{
		let NandN = [];
		order.map(order=>{
			NandN.push([AllGames[AllGames.findIndex(x => x._id === order.orderId)].gameName, order.num]);
		})
		return NandN;
	}

	return (
		<div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
			{
				Orders.map((order, id) => {
					return (
						<OrderCard 
						key={id} 
						orderNameAndNumber = {nameOfGame(order.order)}
						orderStatus = {order.stat}
						/>
					);
				})
			}
		</div>
	);
}

export default OrderHolder;