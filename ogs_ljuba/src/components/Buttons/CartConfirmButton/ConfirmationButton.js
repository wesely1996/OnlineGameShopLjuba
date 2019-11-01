import React from 'react';

const ConfirmationButton = ({OrderAction}) => {

	const action = () =>{
		console.log('ok');
	}

	return(
		<div className="ma1">
			<button
			onClick = {() => action}
			type="button" 
			className="b--white f3 br-pill grow bg-black-90 white">
				CONFIRM
			</button>
		</div>
	);
}

export default ConfirmationButton;