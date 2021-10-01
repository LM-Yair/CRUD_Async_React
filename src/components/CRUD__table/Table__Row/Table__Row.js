import React from 'react';
import './Table__Row.scss';

const TableRow = ({ calzado, setDataToEdit, deleteData }) => {
  const { id, tipo, marca, pais, precio }= calzado;
  return(
    <tr>
      <td>{ tipo }</td>
      <td>{ marca }</td>
      <td>{ pais }</td>
      <td>{ precio }</td>
      <td className='td__btns'>
	<button className='td__btn' onClick={ () => setDataToEdit( calzado ) }>Editar</button>
	<button className='td__btn' onClick={ () => deleteData( id ) }>Eliminar</button>
      </td>
    </tr>
  );
}

export default TableRow;
