import React from 'react';
import GameCard from '../GameCard/GameCardCart';

const CardHolder = ({Games, OrderAction}) => {
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
						OrderAction = {OrderAction}
					/>);
				})
			}
		</div>
	);
}

export default CardHolder;