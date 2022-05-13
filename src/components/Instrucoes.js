import React from "react";

import "../assets/css/Instrucoes.css"

function Instrucoes(){
    return(

        <div className="instrucoes">
            <h2>🖐️Esse é um projeto feito Usando React.js e a API do site <a rel="noopener noreferrer" href="https://www.weatherapi.com/" className="link">Weatherapi</a>.</h2>

            <p>Você pode digitar o nome de sua cidade ou de qualquer uma que queira saber como está o clima, e ver como anda o clima do local :)</p>

            <p>PS: a API é de língua inglesa 🌈, se sua cidade tem alguma acentuação recomendo que digite sem a acentuação. Ex: Ribeirão Preto ficaria Ribeirao Preto.🌦️</p>

            <p>O código está no repoisitorio do Github☀️: <a  rel="noopener noreferrer" className="link" href="https://github.com/imenesg/Clima-API">github.com/imenesg/Clima-API</a>  </p>
            <p>Espero que goste :)</p>
        </div>
    );
}

export default Instrucoes;