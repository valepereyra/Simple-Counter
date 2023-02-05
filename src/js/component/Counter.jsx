import React from "react";

//create your first component
const Counter = (props) => {
	return (
		<>

			<div class="card-header card text-bg-dark mb-3">Simple Counter</div>
			<div class="card-body">
				<h1 class="card-title">{props.numero6}{props.numero5}{props.numero4}{props.numero3}{props.numero2}{props.numero1}</h1>
			</div>
		</>
	);
};

export default Counter;


