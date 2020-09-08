import React from 'react';
import './InformacoesDaReserva.css';
import ExibirDataELocal from '../../components/ExibirDataEHora/ExibirDataELocal';

class InformacoesDaReserva extends React.Component {
    render() {
        return (
            <div className = 'informacoes_da_reserva'>
                <h2>Informações da Reserva</h2>
                <ExibirDataELocal 
                    info_busca = {this.props.info_busca}
                    handleSearchInputChange = {this.props.handleSearchInputChange}
                    complemento = {true}
                />
                <label>Alguma observação adicional?</label>
                <input type = 'text' placeholder = 'Ex: Alergias, pedidos especiais, informações adicionais sobre o espaço do evento, etc. ular' name = 'observacao_adicional' id = 'observacao_adicional' onChange = {this.handleChange} />
            </div>
        );
    }
}

export default InformacoesDaReserva;