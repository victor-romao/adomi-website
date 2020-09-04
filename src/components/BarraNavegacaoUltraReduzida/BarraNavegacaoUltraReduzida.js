import React from 'react';
import { Link } from 'react-router-dom';
import './BarraNavegacaoUltraReduzida.css';

class BarraNavegacaoUltraReduzida extends React.Component {
    
    
    handleVoltar() {
        window.history.back();
    }
    
    render() {
        return (
            <nav className = 'barra_navegacao_ultra_reduzida'>
                <img className = 'voltar' src = {require('../../resources/icons/seta_laranja.png') } alt = 'seta' onClick = {this.handleVoltar} />
                <Link to = '/'><img className = 'logo' src={require('../../resources/logo/adomi-o-seu-evento-a-domicilio.png')} alt='Adomi, o seu evento a domicílio'/></Link>
            </nav>
        );
    }
}

export default BarraNavegacaoUltraReduzida;