
import styles from './Formulario.module.css';
import useSelect from './Hooks/useSelect';
import PropTypes from 'prop-types';

const Formulario = ({setCategoria}) => {


    const OPCIONES = [
        {value: 'general', label : 'General'},
        {value: 'business', label : 'Negocios'},
        {value: 'entertaiment', label : 'Entretenimiento'},
        {value: 'health', label : 'Salud'},
        {value: 'science', label : 'Ciencia'},
        {value: 'sports', label : 'Deportes'},
        {value: 'technology', label : 'Tecnologia'}
    ]
    //utilizar custom hook
    const [categoria, SelectNoticias] = useSelect('general', OPCIONES);

    //Submit al form y pasar categoria al app state

    const handleSubmit = (e)=>{
        e.preventDefault();

        setCategoria(categoria);
    }

    return ( 
        <div className={`row ${styles.buscador}`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit = {handleSubmit}
                >
                    <h2 className ={styles.heading}>Encuentra Noticias por Categoria</h2>

                        <SelectNoticias />
                    <div className="input-field col s12">
                        <input 
                            type="submit" 
                            className = {`btn-large amber darken-z ${styles.btn_block}`}
                            value = 'Buscar'
                        />
                    </div>
                </form>
            </div>
        </div>
     );
}

Formulario.propTypes = {
    setCategoria : PropTypes.func.isRequired
}
 
export default Formulario;