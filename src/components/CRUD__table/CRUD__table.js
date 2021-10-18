import React from 'react';
import './CRUD__table.scss';
import TableRow from './Table__Row/Table__Row';

const Table = ({ data, setDataToEdit, deleteData }) => {

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
      !data.length > 0 
	? <tr><td className='noData' colSpan='5'>Sin datos...</td></tr>
	: data.map( el => <TableRow key={ el.id } calzado={ el } setDataToEdit={ setDataToEdit } deleteData={ deleteData }/> )
    }
	
      </tbody>
    </table>

    </section>
  );
}

export default Table;
