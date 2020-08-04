import React from 'react';
import BarraDeNavegacao from '../../components/BarraDeNavegacao/BarraDeNavegacao';
import ApresentacaoPaginaServico from '../../components/ApresentacaoPaginaServico/ApresentacaoPaginaServico';

class Servicos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            servico: this.props.match.params.id
        }
    }

    render () {
        return (
            <div className = 'Servicos'>
                <BarraDeNavegacao exibir_info_covid = { false } busca = { false } servico = { this.state.servico }/>
                <ApresentacaoPaginaServico servico = { this.state.servico } />
            </div>
        );
    }
}

export default Servicos;

