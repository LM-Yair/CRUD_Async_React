import React,{ useEffect, useState } from 'react';
import './Dark_mode.scss';

// #fff542

const DarkMode = () => {
  const [ fillMoon, setFillMoon ] = useState( '#333' )
  const [ darkMode, setDarkMode ] = useState( localStorage.getItem('theme') );
  const darkModeInitialCheck = darkMode;

  useEffect(() => {
    if( darkModeInitialCheck ){
      document.body.classList.add( 'dark' );
      localStorage.setItem('theme', 'dark');
      setFillMoon( '#fff542' );
      setDarkMode( 'dark' );
      return
    }
  }, [ darkModeInitialCheck ]);

  const handleDarkMode = () => {
    if( darkMode ){
      document.body.classList.remove( 'dark' );
      localStorage.removeItem('theme');
      setFillMoon( '#333' );
      setDarkMode( null );
      return
    }
    else{
      document.body.classList.add( 'dark' );
      localStorage.setItem('theme', 'dark');
      setFillMoon( '#fff542' );
      setDarkMode( 'dark' );
      return
    }
  }

  return(
    <aside className='DarkMode'>
      <div className='DarkMode__btn' onClick={ handleDarkMode }>
	<svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">     
	  <g>
	    <path className='btnMoon' stroke={ fillMoon } fill={ fillMoon } d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
	  </g>
	</svg>
      </div>
    </aside>
  );
}

export default DarkMode;
