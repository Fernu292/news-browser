//Components
import Header from "./Components/Header";
import Formulario from "./Components/Formulario";
import ListadoNoticias from "./Components/ListadoNoticias";

import { Fragment, useState, useEffect } from "react";

const App = () => {

    //Definir categoria

    const [categoria, setCategoria] = useState('');

    const[noticias, setNoticias] = useState([]);

    useEffect( ()=>{
        const consultarAPI = async () =>{
            const APIKey = 'a2deb82a3dc8424ea467fad937c98bba';
            const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=${APIKey}`;

            const respuesta = await fetch(url);

            const noticias = await respuesta.json();

            setNoticias(noticias.articles);
        }

        consultarAPI();

    }, [categoria]);


    return ( 
        <Fragment >
            <Header titulo = 'Buscador de Noticias' />

            <div className="container white">
                <Formulario setCategoria = {setCategoria} />

                <ListadoNoticias noticias = {noticias} />

            </div>

            
        </Fragment>
     );
}
 
export default App;