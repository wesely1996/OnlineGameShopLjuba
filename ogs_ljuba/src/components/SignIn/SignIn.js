import React from 'react';

const SignIn = ({onRouteChange}) =>{
	return (
		<article className="w-30 center b--transparent br3 pa3 pa3-ns mv4 ba b--black-10 shadow-3">
			<main className="pa4 black-80">
			  <div className="measure">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="f3 fw6 ph0 mh0">Sign In</legend>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
			        <input className="pa2 input-reset ba bg-white hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
			      </div>
			      <div className="mv3">
			        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
			        <input className="b pa2 input-reset ba bg-white hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
			      </div>
			    </fieldset>
			    <div className="">
			      <input 
			      onClick={() => onRouteChange('main')}
			      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
			      type="submit" 
			      value="Sign in"/>
			    </div>
			    <div className="lh-copy mt3">
			      <p onClick={() => onRouteChange('register')} 
			      className="f6 link dim black db pointer">Sign up</p>
			      <p onClick={() => onRouteChange('register')} 
			      className="f6 link dim black db pointer">Forgot your password?</p>
			    </div>
			  </div>
			</main>
		</article>
	);
}

export default SignIn;