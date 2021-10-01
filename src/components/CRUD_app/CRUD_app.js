import React, { useEffect, useState } from 'react';
import './CRUD_app.scss';
import Form from '../CRUD_form/CRUD_form';
import Table from '../CRUD__table/CRUD__table';
import { helpHttp } from '../../helpers/helpHttp';
import Loader from '../Loader/loader';
import Message from '../Message/message';

export default function CRUD_APP () {
  const [ db, setDb ] = useState( null );
  const [ dataToEdit, setDataToEdit ] = useState( null );
  const [ error, setError ] = useState( null );
  const [ loading, setLoading ] = useState( true );
  const url = 'http://localhost:5000/calzados';
  const api = helpHttp();

  useEffect(() => {
    helpHttp().GET( url )
      .then( res => {
	if( !res.err ) {
	  setLoading( false )
	  setError( null );
	  setDb( res );
	}
	else {
	  setLoading( false );
	  setDb( null );
	  setError( res );
	}
      })
      .catch( err => console.error( err ) );
  },[ url ]);

  const createData = data => {
    data.id = Date.now();

    const options = { 
      body: data,
      headers: { 'content-type': 'application/json' },
    }

    api.POST( url,options )
      .then( res => {
	if( !res.err ) setDb([ ...db, data]);
	else setError( res );
      } )
  }
  
  const updateData = data => {
    const endPoint = `${ url }/${ data.id }`;

    const options = { 
      body: data,
      headers: { 'content-type': 'application/json' },
    }

    api.PUT( endPoint, options )
      .then( res => {
	if( !res.err ){
	  const new_db = db.map( el => el.id === data.id ? data : el );
	  setDb( new_db );
	}
	else setError( res );
      })
  }
  
  const deleteData = id => {
    const endPoint = `${ url }/${ id }`;
    const options = { 
      headers: { 'content-type': 'application/json' },
    }

    api.DEL( endPoint, options )
      .then( res => {
	if( !res.err ){
	  const newDb = db.filter( el => el.id !== id );
	  setDb( newDb );
	}
	else setError( res );
      })
  }
  
  return(
    <section className='CRUD'>
    <Form 
      createData={ createData }
      updateData={ updateData }
      dataToEdit={ dataToEdit }
      setDataToEdit={ setDataToEdit }
    />
    { loading && <Loader /> }
    { error && <Message msg={ `Error: ${ error.status } - ${ error.statusText }.` } color={ 'err' } /> }
    { 
      db && ( 
      <Table 
	data={ db }
	setDataToEdit={ setDataToEdit }
	deleteData={ deleteData }
      /> 
    )}
    </section>
  );
}
