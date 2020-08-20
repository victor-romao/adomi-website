import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Link } from 'react-router-dom';
import './BarraNavegacaoPrestador.css';


class BarraDeNavegacaoPrestador extends React.Component {
    constructor(props) {
        super(props);
    }

    handleScrollCall(hash) {
        function handleScrollTo() {
            const element = document.getElementById(hash)
            const yPosition = element.getBoundingClientRect().top + window.pageYOffset - 60;
            window.scrollTo({
                behavior: "smooth",
                top: yPosition,
            });
        }
        return handleScrollTo;
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
                            <a onClick = { this.handleScrollCall('faq_prestador') }>Ajuda</a>
                            <Link to = 'parceiros/login'>Já sou Parceiro</Link>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default BarraDeNavegacaoPrestador;