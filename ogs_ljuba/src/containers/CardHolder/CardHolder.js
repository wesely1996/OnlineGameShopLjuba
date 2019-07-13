import React from 'react';
import GameCard from '../../components/GameCard/GameCard';
import {Games} from '../../props/Games.js';

const CardHolder = () => {
	return (
		<div style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap'}}>
			{
				Games.map((game, id) => {
					return (<GameCard 
						key={id} 
						imageLink={Games[id].imageLink} 
						gameName = {Games[id].gameName} 
						price = {Games[id].price}
						/>);
				})
			}
		</div>
	);
}

export default CardHolder;