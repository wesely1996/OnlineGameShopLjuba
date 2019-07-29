import React from 'react';
import GameCard from '../GameCard/GameCard';

const CardHolder = ({Games, OrderAdded}) => {
	return (
		<div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
			{
				Games.map((game, id) => {
					return (<GameCard 
						key={id} 
						gameId={Games[id].id}
						imageLink={Games[id].imageLink} 
						gameName = {Games[id].gameName} 
						price = {Games[id].price}
						OrderAdded = {OrderAdded}
						/>);
				})
			}
		</div>
	);
}

export default CardHolder;