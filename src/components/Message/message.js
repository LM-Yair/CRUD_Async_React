import React from 'react';
import './message.scss';

const Message = ({ msg, color }) => {
  const bgColor = `message__container ${ color }`;
  
  return(
    <section className={ bgColor }>
      <h3 className='message'>{ msg }</h3>
    </section>
  )
}

export default Message;
