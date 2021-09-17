import React from 'react';

const Children =(props)=>{
	return (

		<div>
			<h1>Hi Dear ! Whats app ! {props.name} </h1>
			<b>{props.children}</b>
		</div>


	)
}


export default Children;