import React from 'react';

const Notification = ({massage}) =>{
	return (
        <div id='notification' className="bg-transparent"
        style={{position: "absolute", top:'30%', width:'100%', display:'flex', justifyContent:'center', zIndex: 1000}}>
            <div className="f2 bold pill bg-white shadow3 pa4">{massage}</div>
        </div>
	);
}

export default Notification;