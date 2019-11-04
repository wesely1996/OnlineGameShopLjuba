import React from 'react';

class OrderCard extends React.Component{
	render (){
		const {orderNameAndNumber, orderStatus} = this.props;
		return(
            <div 
            className="f5 b card shadow-5 ba br4 bw1 grow pa1 tc ma2 bg-black-50 white"
            style={{display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap',
                minWidth: '70%'}}
            >
				<div style={{display: 'flex', flexDirection: 'column'}}>
				{
					orderNameAndNumber.map(order => {
						return(
							<div className="b-white b-solid">
								<div>Game name:		{order[0]} x{order[1]}</div>
							</div>
						)
					})
				}
				</div>
				<div className="b-white b-solid" style={{alignSelf:'center'}}>Status: {orderStatus}</div>
			</div>
		);
	}
}

export default OrderCard;