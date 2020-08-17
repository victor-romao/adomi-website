import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Link } from 'react-router-dom';
import './BarraNavegacaoPrestador.css';


class BarraDeNavegacaoPrestador extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <nav className = 'barra_navegacao_prestador'>
                <div className = 'navbar'>
                    <div className = 'container'>
                        <div className = 'logo'>
                            <Link to = '/'><img src={require('../../resources/logo/adomi-o-seu-evento-a-domicilio.png')} alt='Adomi, o seu evento a domicílio'/></Link>
                        </div>
                        <div className = 'links'>
                            <Link to = 'parceiros/ajuda'>Ajuda</Link>
                            <Link to = 'parceiros/login'>Já sou Parceiro</Link>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default BarraDeNavegacaoPrestador;