import Noticia from "./Noticia";
import PropTypes from 'prop-types';
import styled from "styled-components";

const NoticiasGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const ListadoNoticias = ({noticias}) => {
    return ( 
        <NoticiasGrid className="row">
            {noticias.map( noticia => (
                <Noticia 
                    key = {noticia.url}
                    noticia = {noticia}
                />
            ))}
        </NoticiasGrid>
     );
}

ListadoNoticias.propTypes = {
    noticias : PropTypes.array.isRequired
}
export default ListadoNoticias;