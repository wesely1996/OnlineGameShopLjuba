import React from 'react';

const ConfirmationButton = ({OrderAction}) => {
	return(
		<div className="ma1">
			<button
			onClick = {() => OrderAction}
			type="button" 
			className="b--white f3 br-pill grow bg-black-90 white">
				CONFIRM
			</button>
		</div>
	);
}

export default ConfirmationButton;