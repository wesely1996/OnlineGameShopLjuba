import React from 'react';

const Search = ({searchfield, searchChange}) =>{
	return (
		<div className='br4 ma2'>
			<input 
			className='f4 pa1 w-70 h-5 ba bg-washed-blues center' 
			type='search' 
			placeholder='search games'
			onChange = {searchChange}/>
		</div>
	);
}

export default Search;