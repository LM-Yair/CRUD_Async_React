import React, {useContext} from 'react';
import './CRUD_app.scss';
import Form from '../CRUD_form/CRUD_form';
import Table from '../CRUD__table/CRUD__table';
import Loader from '../Loader/loader';
import Message from '../Message/message';
import CrudContext from '../../Context/CrudContext';

export default function CRUD_APP () {
  const { db, loading, error } = useContext( CrudContext );
  return(
    <section className='CRUD'>
    <Form />
    { loading && <Loader /> }
    { 
      error && 
	<Message 
	msg={ `Error: ${ error.status } - ${ error.statusText }.` } 
	color={ 'err' } 
	/>
    }
    { db && <Table /> }
    </section>
  );
}
