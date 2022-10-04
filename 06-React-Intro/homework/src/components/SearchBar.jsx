import React from 'react';

export default function SearchBar(props) {
  // acá va tu código
  return (
  <div>
    <input type="text" name="search" placeholder='Ingrese una ciudad' />
    <button onClick={() => props.onSearch("Buscando ciudad...")}>Buscar</button>
  </div>
  )
};