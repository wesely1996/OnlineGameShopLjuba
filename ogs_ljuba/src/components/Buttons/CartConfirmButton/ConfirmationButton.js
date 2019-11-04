import React from 'react';

const ConfirmationButton = ({OrderAction, cartPrice}) => {

	return(
		<div className="ma1" style={{display:'flex', flexDirection:'column'}}>
			<div className='bg-black white w-25 center pa2'>
				Total:		{cartPrice} din
			</div>
			<button
			onClick = {() => OrderAction()}
			type="button" 
			className="b--white f3 br-pill grow bg-black-90 white w-25 center">
				CONFIRM
			</button>
		</div>
	);
}

export default ConfirmationButton;