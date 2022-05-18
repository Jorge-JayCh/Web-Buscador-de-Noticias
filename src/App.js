import React, { Fragment, useState } from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';

function App() {

  // definir state de la categoria y las noticias
  const [ categoria, guardarCategoria ] = useState('');
  return (
    <Fragment>
      <Header 
        titulo='Buscador de Noticias'
      />
      <div className='container white'>
        <Formulario 
            guardarCategoria={ guardarCategoria }
        />
      </div>
    </Fragment>    
  );
}

export default App;
