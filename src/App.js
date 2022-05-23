import React, { Fragment, useEffect, useState } from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';
import ListadoNoticias from './components/ListadoNoticias';

function App() {

  // definir state de la categoria y las noticias
  const [ categoria, guardarCategoria ] = useState('');
  const [ noticias, guardarNoticias ] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const apikey = process.env.REACT_APP_APIKEY;
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=${apikey}`;

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      guardarNoticias(noticias.articles);
    }
    consultarAPI();
  }, [categoria]);

  return (
    <Fragment>
      <Header 
        titulo='Buscador de Noticias'
      />
      <div className='container white'>
        <Formulario 
            guardarCategoria={ guardarCategoria }
        />
        <ListadoNoticias
          noticias={noticias}
        />
      </div>
    </Fragment>    
  );
}

export default App;
