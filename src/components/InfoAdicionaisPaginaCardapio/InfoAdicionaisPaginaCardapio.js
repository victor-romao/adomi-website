import React from 'react';
import './InfoAdicionaisPaginaCardapio.css';

class InfoAdicionaisPaginaCardapio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            meses: [
                'jan', 'fev', 'mar', 'abr', 'mai', 'jun', 
                'jul', 'ago', 'set', 'out', 'nov', 'dez'
            ]
        }
    }

    renderNecessario() {
        if(this.props.info_adicionais.necessarios.length !== 0){
            return (
                <div className = 'container'>
                    <h6>Necessário</h6>
                    <ul>
                        {this.props.info_adicionais.necessarios.map(necessario => {
                            return <li>{necessario}</li>;
                        })}
                    </ul>
                </div>
            );
        }
    }

    renderPoliticasCancelamento() {
        if(this.props.info_busca.data_e_hora===''){
            return (
                <div className = 'container'>
                    <h6>Política de Cancelamento</h6>
                    <ul>
                        <li>Mais de 30 dias antes do evento: cobrado apenas o custo operacional da transação.</li>
                        <li>Menos de 30 dias antes do evento: cobrança de 30% do valor da reserva.</li>
                        <li>Menos de 5 dias úteis antes do evento: cobrança de 70% do valor da reserva.</li>
                        <li>Menos de 2 dias úteis antes do evento: cobrança de 100% do valor da reserva.</li>
                    </ul>
                </div>
            );
        } else {
            const data_evento = new Date(this.props.info_busca.data_e_hora);
            const primeiro_limite = new Date (data_evento.getTime() - 31*24*60*60*1000);
            const segundo_limite = new Date (data_evento.getTime() - 8*24*60*60*1000);
            const terceiro_limite = new Date (data_evento.getTime() - 3*24*60*60*1000);
            const quarto_limite = new Date (data_evento.getTime() -1*24*60*60*1000)
            return (
                <div className = 'container'>
                    <h6>Política de Cancelamento</h6>
                    <ul>
                        <li>Até {primeiro_limite.getDate()}/{this.state.meses[primeiro_limite.getMonth()]}: cobrado apenas o custo operacional da transação.</li>
                        <li>Até {segundo_limite.getDate()}/{this.state.meses[segundo_limite.getMonth()]}: cobrança de 30% do valor da reserva.</li>
                        <li>Até {terceiro_limite.getDate()}/{this.state.meses[terceiro_limite.getMonth()]}: cobrança de 70% do valor da reserva.</li>
                        <li>Até {quarto_limite.getDate()}/{this.state.meses[quarto_limite.getMonth()]}: cobrança de 100% do valor da reserva.</li>
                    </ul>
                </div>
            );
        }
    }

    render() {
        return (
            <div id = 'informacoes_adicionais_cardapio' className = 'informacoes_adicionais_cardapio'>
                <h4 className = 'bold'>O que você deve saber</h4>
                <div className = 'container'>
                    <h6 className = 'bold'>Sobre o Serviço</h6>
                    <ul>
                        <li>Chegada do Prestador: {this.props.info_adicionais.antecedencia_chegada} hora antes do evento.</li>
                        <li>Tempo estimado do serviço: {this.props.info_adicionais.duracao_evento} horas de evento.</li>
                        <li>Equipe: {this.props.info_adicionais.equipe}</li>
                        <li>Itens não consumidos: propriedade do {this.props.info_adicionais.itens_nao_consumidos}.</li>
                        <li>Outros: {this.props.info_adicionais.outros}</li>
                    </ul>
                </div>
                {this.renderNecessario()}
                {this.renderPoliticasCancelamento()}
                    
                
            </div>
        );
    }
}

export default InfoAdicionaisPaginaCardapio;