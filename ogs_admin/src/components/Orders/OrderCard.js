import React from 'react';

const GamesCard = ({orderId, userId, orders}) => {
	return (
		<div className="w-100 f5 b card shadow-5 ba br4 bw1 pa1 tc ma2 bg-black-50 white">
			<button 
			className=" red">
				Delete
			</button>
			{orderId} {userId}
			<button 
			className="">
				Complete
			</button>
		</div>
	);
}

export default GamesCard;