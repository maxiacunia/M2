import React from 'react';

//Aqui estamos creando una funcion que devuelve un solo componente
export default function Card(props) {
  // acá va tu código
  //props = {max, min, name, img, onclose}
  return ( 
  <div>
    <button onClick={props.onClose}>X</button>
    <h4>{props.name}</h4>
    <div>
      <p>Min</p>
      <p>{props.min}</p>
      <p>Max</p>
      <p>{props.max}</p>
    </div>
    <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="{img}"/>
  </div>
  )
};