import React, {useContext} from 'react';
import CrudContext from '../../../Context/CrudContext';
import './Table__Row.scss';

const TableRow = ({ calzado }) => {
  const { setDataToEdit, deleteData } = useContext( CrudContext );
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
