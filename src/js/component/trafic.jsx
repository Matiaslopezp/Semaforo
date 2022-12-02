import React, { useState } from "react";

const Trafic = () => {
    const [abrir, Setabrir]=useState("")
    
        return ( 
            <div className="header">
    
                <h1>Semaforo: {abrir}</h1>
                
                <div className="semaforo">
    
                <div className={abrir==="luzroja"?"red encendido":"red"} onClick={()=>{
                    if (abrir==="luzroja"){
                        Setabrir("")
                    }
                    else{
                    Setabrir("luzroja")}
                }}>R</div>
    
    
                <div className={abrir==="luzamarilla"?"yellow encendido":"yellow"} onClick={()=>{
                    if (abrir==="luzamarilla"){
                        Setabrir("")
                    }
                    else{
                    Setabrir("luzamarilla")}
                }}>A</div>
    
                <div className={abrir==="luzverde"?"green encendido":"green"} onClick={()=>{
                        if (abrir==="luzverde"){
                            Setabrir("")
                        }
                        else{
                        Setabrir("luzverde")}
                }}>V</div>
    
         </div>
            </div>
        );
    };
    
    export default Trafic;
    