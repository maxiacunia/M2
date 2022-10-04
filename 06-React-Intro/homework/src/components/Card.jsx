import React from 'react';
import s from '../styles/Card.module.css'

//Aqui estamos creando una funcion que devuelve un solo componente
export default function Card(props) {
  // acá va tu código
  //props = {max, min, name, img, onclose}
  return ( 
  <div className={s.card}>
    <button onClick={props.onClose} className={`${s.btn} ${s.btnColor}`}>X</button>
    <h4>{props.name}</h4>
    <div className={s.middleDiv}>
      <div className={s.info}>
        <p>Min</p>
        <p>{props.min}</p>
        <p>Max</p>
        <p>{props.max}</p>
      </div>
    </div>
    <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="{img}"/>
  </div>
  )
};