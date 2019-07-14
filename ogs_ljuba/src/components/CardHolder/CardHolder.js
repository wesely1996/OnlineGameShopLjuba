import React from 'react';
import GameCard from '../GameCard/GameCard';

const CardHolder = ({Games}) => {
	return (
		<div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
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