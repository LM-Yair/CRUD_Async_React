import React, { useState, useEffect } from 'react';
import './CRUD_form.scss';

const initialForm = {
  id: null,
  tipo: '',
  marca: '',
  pais: '',
  precio: '',
}

const Form = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [ form, setForm ] = useState( initialForm );

  useEffect(() => {
    if( dataToEdit ) setForm( dataToEdit );
    else setForm( initialForm );
  }, [ dataToEdit ]);

  const handleChange = e => setForm(
    { 
      ...form, 
      [ e.target.name ]:e.target.value 
    }
  );
  
  const handleSubmit = e => {
    e.preventDefault();
    
    if( !form.tipo || !form.marca || !form.pais || !form.precio ) {
      alert( 'completa los campos correctamente.' );
      return
    }

    form.id === null 
      ? createData( form )
      : updateData( form );

    handleReset();
  };
  
  const handleReset = () => {
    setForm( initialForm );
    setDataToEdit( null );
  };

  return(
    <section className='CRUD__form'>
    <h3 className='CRUD__title'>{ dataToEdit ? 'Editando' : 'Agregar' }</h3>
      <form className='CRUD__form__container' onSubmit={ handleSubmit } >
        <input name='tipo' placeholder='Tipo de calzado' onChange={ handleChange } value={ form.tipo } />
        <input name='marca' placeholder='Marca' onChange={ handleChange } value={ form.marca }/>
        <input name='pais' placeholder='País de origen' onChange={ handleChange } value={ form.pais }/>
        <input name='precio' placeholder='Precio' onChange={ handleChange } value={ form.precio }/>
	<nav className='CRUD__btns'>
	  <input className='CRUD__btn--send' type="submit" value={ dataToEdit ? 'Editar' : 'Agregar' } />
	  <input className='CRUD__btn--reset' type="reset" value='Limpiar' onClick={ handleReset }/>
	</nav>
      </form>
    </section>
  );
}

export default Form;
