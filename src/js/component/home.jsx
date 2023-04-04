import React, { useState } from "react";

//create your first component
const Home = () => {
	const [color, setColor]=useState("")
	return (
		<div>
			<div className="
				trafic-light
				rounded-3
				d-flex
				flex-column
				justify-content-evenly
				align-items-center
				py-3
			">
			<div onClick={()=>setColor('red')} className={`${color=="red" ? "glow":""} rounded-circle ligth red`}></div>
            <div onClick={()=>setColor('yellow')} className={`${color=="yellow" ? "glow":""} rounded-circle ligth yellow`}></div>
			<div onClick={()=>setColor('green')} className={`${color=="green" ? "glow":""} rounded-circle ligth green`}></div>
			</div>
		</div>
	);
};

export default Home;
