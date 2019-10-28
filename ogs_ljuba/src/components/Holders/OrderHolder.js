import React from 'react';
import OrderCard from '../Cards/OrderCard';

const OrderHolder = ({Orders, AllGames}) => {

	const nameOfGame = (id) =>{
		const index = AllGames.findIndex(x => x._id === id);
		return AllGames[index].gameName;
	}

	return (
		<div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
			{
				Orders.map((order, id) => {
					return (
						<OrderCard 
						key={id} 
						orderName = {nameOfGame(order[0])} 
						orderNumber = {order[1]}
						orderStatus = {order[2]}
						/>
					);
				})
			}
		</div>
	);
}

export default OrderHolder;