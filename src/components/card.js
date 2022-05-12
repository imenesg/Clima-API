import React from "react";
import { useState } from "react";

import "../assets/css/card.css";

function Card() {
  const [cidade, setCidade] = useState("");
  const [tempo, setTempo] = useState(null);


  function funOnchange(cidadeDoinput){
    console.log(cidadeDoinput.target.value);
    setCidade(cidadeDoinput.target.value)
  }
  function funOnclick() {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=bb36b42150f244a7a3b142301221205&q=${cidade}&aqi=no&lang=pt`
    )
      .then((resposta) => {
        if (resposta.status === 200) {
          return resposta.json();
        }
      })
      .then((dados) => {
        setTempo(dados);

        console.log(dados);

        console.log(tempo);
      });
  }

  return (
    <>
      {tempo ? (
        <div className="container">
          <div className={`card horario${tempo.current.is_day}`}>
            <div className="cardTop">
              <h2>{tempo.location.name}</h2>

              <h1 className="Temperatura-icon">
                <img src={tempo.current.condition.icon} alt=""></img>
                <span>{tempo.current.temp_c}</span>°C
              </h1>
            </div>
            <div>
              <h2 className="condicao">{tempo.current.condition.text}</h2>

              <ul>
                <li>
                  Umidade: <span>{tempo.current.humidity}</span>%
                </li>
                <li>
                  Vento: <span>{tempo.current.wind_kph}</span>Km
                </li>
              </ul>
            </div>
          </div>
          
        </div>
      ) : null}

      <div className="input-botao"><input value={cidade} onChange={funOnchange}></input> <div className="button" onClick={funOnclick}> Pesquisar</div></div>
      
       
    </>
  );
}

export default Card;
