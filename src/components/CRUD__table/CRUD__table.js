import React, { useContext } from 'react';
import './CRUD__table.scss';
import TableRow from './Table__Row/Table__Row';
import CrudContext from '../../Context/CrudContext';

const Table = () => {
  const { db } = useContext( CrudContext );
  return(
    <section className='container__table'>
    <table className='table__dats'>
      <thead>
        <tr>
	  <th>Tipo</th>
	  <th>Marca</th>
	  <th>Lugar</th>
	  <th>Precio</th>
	  <th>Acciones</th>
	</tr>
      </thead>
      <tbody>
    {
      !db.length > 0 
	? <tr><td className='noData' colSpan='5'>Sin datos...</td></tr>
	: db.map( el => <TableRow key={ el.id } calzado={ el } /> )
    }
	
      </tbody>
    </table>
    </section>
  );
}

export default Table;
