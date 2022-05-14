import React from "react";
import { useState } from "react";

import "../assets/css/Instrucoes.css"

function Instrucoes(){
    const [visibilidade, setVisibilidade] = useState("inicio")
    function mostraEscondeinstrucoes(){
        
        if(visibilidade == "inicio"  || visibilidade == "invisivel"  ){
            setVisibilidade("instrucoes")
            
        }else{
            setVisibilidade("invisivel")
        
        }
        
    }
    return(
        <>
        <div className={`${visibilidade}`}>
            <h2>🖐️Esse é um projeto feito Usando React.js e a API do site <a target="_blank" rel="noopener noreferrer" href="https://www.weatherapi.com/" className="link">Weatherapi</a>.</h2>
            
            <ol>
                <h3>🤔 Como usar? 🤔</h3>
                <li>Digite o nome da cidade que deseja saber o clima</li>
                <li>clique em "Pesquisar"</li>
            </ol>

            <p className="ps">📢PS: a API é de língua inglesa, se sua cidade tem alguma acentuação recomendo que digite sem a acentuação. Ex: Ribeirão Preto ficaria Ribeirao Preto.🌦️</p>

            <p>O código está no repositório  do Github☀️: <a target="_blank" rel="noopener noreferrer" className="link" href="https://github.com/imenesg/Clima-API">github.com/imenesg/Clima-API</a>  </p>
            <p>Espero que goste :)</p>
        </div>

        <div className="divDuvida"><i className='bx bxs-help-circle botaoDuvida' onClick={mostraEscondeinstrucoes}></i></div>
        </>

        
        
    );
}

export default Instrucoes;