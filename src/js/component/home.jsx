
import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
const [abrir, Setabrir]=useState("")

	return ( 
		<div className="text-center ">

			<h1>Semaforo</h1>
			<button className={abrir==="rojo"?"rojo encendido":"rojo"} onClick={()=>{
				Setabrir("rojo")
			}}>Rojo</button>


			<button className="yellow">Amarillo</button>
			<button className="green">Verde</button>
			
		</div>
	);
};

export default Home;
