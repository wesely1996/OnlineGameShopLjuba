import React from 'react';

class OrderCard extends React.Component{
	render (){
		const {orderName, orderStatus} = this.props;
		return(
            <div 
            className="f5 b card shadow-5 ba br4 bw1 grow pa1 tc ma2 bg-black-50 white"
            style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap',
                minWidth: '70%'}}
            >
				<div className="b-white b-solid">Game Name: {orderName} </div>
				<div className="b-white b-solid">Status: {orderStatus} </div>
			</div>
		);
	}
}

export default OrderCard;