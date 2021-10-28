import React, { createContext, useEffect, useState } from 'react';
import {helpHttp} from '../helpers/helpHttp';

const CrudContext = createContext();

const CrudContextProvider = ({ children }) => {
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
 
  const data = { db, createData, updateData, deleteData, dataToEdit, setDataToEdit, error, loading };
  return(
    <CrudContext.Provider value={ data }>
      { children }
    </CrudContext.Provider>
  );
}

export { CrudContextProvider };
export default CrudContext;
