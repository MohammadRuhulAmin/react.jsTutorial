import React from 'react' ;

const Parent = (props)=>{
	return (
		<div>
			<h1>Hi Parent ! </h1>
			<h1>Father is {props.Fname}</h1>
			<h1>Mother is {props.Mname}</h1>
			<h1>{props.children}</h1>
		</div>
	);
}

export default Parent;