import React from 'react';

const Registration = ({ onRouteChange }) =>{
	return (
		<article className="w-30 center b--transparent br3 pa3 pa3-ns mv4 ba b--black-10 shadow-3 register">
			<main className="pa2 black-80">
			  <div action="sign-up_submit" method="get" acceptCharset="utf-8">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="f3 fw6 ph0 mh0">Sign Up</legend>
			      <div className="mt3">
			        <label className="db fw4 lh-copy f6" htmlFor="name">Name</label>
			        <input className="pa2 input-reset ba bg-white hover-bg-black hover-white w-100 measure" type="text" name="name"  id="name"/>
			      </div>
			      <div className="mt3">
			        <label className="db fw4 lh-copy f6" htmlFor="phone-number">Phone number</label>
			        <input className="pa2 input-reset ba bg-white hover-bg-black hover-white w-100 measure" type="text" name="phone-number"  id="phone-number"/>
			      </div>
			      <div className="mt3">
			        <label className="db fw4 lh-copy f6" htmlFor="email-address">Email address</label>
			        <input className="pa2 input-reset ba bg-white hover-bg-black hover-white w-100 measure" type="email" name="email-address"  id="email-address"/>
			      </div>
			      <div className="mt3">
			        <label className="db fw4 lh-copy f6" htmlFor="password">Password</label>
			        <input className="b pa2 input-reset ba bg-white hover-bg-black hover-white w-100 measure" type="password" name="password"  id="password"/>
		          </div>
		          <div className="mt3">
			        <label className="db fw4 lh-copy f6" htmlFor="re-password">Re-password</label>
			        <input className="b pa2 input-reset ba bg-white hover-bg-black hover-white w-100 measure" type="password" name="re-password"  id="re-password"/>
			      </div>
			    </fieldset>
			    <div className="mt3">
			    	<input 
			    	onClick = {() => onRouteChange('main')}
			    	className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" 
			    	type="submit" 
			    	value="Sign Up"/>
		    	</div>
			  </div>
			</main>
		</article>
	);
}

export default Registration;