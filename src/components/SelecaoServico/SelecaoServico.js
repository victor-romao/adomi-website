import React from 'react';
import './SelecaoServico.css';

class SelecaoServico extends React.Component {
    constructor(props){
        super(props);
    }
    
    servicoAtivo (servico) {
        if(servico === this.props.info_busca.servico) {
            return 'ativo';
        } else {
            return 'inativo';
        }
    }

    render(){
        return (
            <div className = 'selecao_servico'>
                <div className = { this.servicoAtivo('servico_presencial') } id = 'servico_presencial' onClick = { this.props.handleServicoChange.bind(this, 'servico_presencial') }>
                    <img src = {require('../../resources/icons/cozinheiro.png')} alt = 'cozinheiro'/>
                    <h3>Serviço Presencial</h3>
                </div>
                <div className = { this.servicoAtivo('entrega_no_evento') } id = 'entrega_no_evento' onClick = { this.props.handleServicoChange.bind(this, 'entrega_no_evento') }>
                    <img src = {require('../../resources/icons/entrega.png')} alt = 'entrega'/>
                    <h3>Entrega no Evento</h3>
                </div>
                <div className = { this.servicoAtivo('solucoes_covid') } id = 'solucoes_covid' onClick = { this.props.handleServicoChange.bind(this, 'solucoes_covid') }>
                    <img src = {require('../../resources/icons/ideia.png')} alt = 'ideia'/>
                    <h3>Soluções Especiais Covid</h3>
                    <span>NOVO</span>
                </div>
            </div>
        );
    }
}

export default SelecaoServico;