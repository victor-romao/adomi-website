import React from 'react';
import { Link } from 'react-router-dom';
import './ApresentacaoServicos.css';
import BarraDeBusca from '../BarraDeBusca/BarraDeBusca';

class ApresentacaoServicos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            servico: 'servico_presencial',
            info_servicos: {
                servico_presencial: {
                    titulo: 'Serviço Presencial',
                    descricao: 'Os prestadores vão até o local do evento e preparam tudo na hora, fornecendo uma experiência única e diferenciada para você e seus convidados.',
                    img_name: 'servico_presencial',
                    link: ''
                },
                entrega_no_evento: {
                    titulo: 'Entrega no Evento',
                    descricao: 'Os prestadores preparam todos os itens para a sua festa, embalam e nós entregamos tudo pronto na hora do seu evento.',
                    img_name: 'entrega_no_evento',
                    link: ''
                },
                solucoes_covid: {
                    titulo: 'Soluções Especiais Covid',
                    descricao: 'Soluções pensadas especialmente para você poder comemorar com amigos e familiares sem sair de casa. Ache soluções criativas oferecidas pelos nossos prestadores e nós entregamos.',
                    img_name: 'solucoes_covid',
                    link: ''
                }
            }
        }
    }

    handleServiceChange (servico) {
        this.props.handleChangeServico(servico);
        this.setState (
            { servico: servico }
        );
    }

    servicoAtivo (servico) {
        if(servico === this.state.servico) {
            return 'ativo';
        } else {
            return 'inativo';
        }
    }

    renderServico (servico) {
        return (
            <div>
                <div className = 'barra_de_busca' id = 'barra_de_busca_principal'>
                    <img src = {require('../../resources/imagens/'+this.state.info_servicos[servico].img_name+'.jpg')} alt = {this.state.info_servicos[servico].titulo}/>
                    <BarraDeBusca formato = 'normal' campos = 'padrao' servico = { this.props.servico } />
                </div>
                <div className = 'descricao'>
                    <p>
                        {this.state.info_servicos[servico].descricao}
                    </p>
                    <Link to = {'/servicos/' + servico }>Saber mais sobre { this.state.info_servicos[servico].titulo } ></ Link>
                </div>
            </div>
        );
    }

    render () {
        return (
            <header>
                <div className = 'titulo_e_servicos'>
                    <img className = 'amarelo sorriso' src = {require('../../resources/logo/sorriso-amarelo-esquerda-apresentacao-servicos.png')} alt = 'sorriso amarelo'/>
                    <div>
                        <div className = 'titulo'>
                            <h1>O seu evento a domicílio</h1>
                            <h2>Encontre e contrate sem complicações</h2>
                        </div>
                        <div className = 'servicos'>
                            <div className = { this.servicoAtivo('servico_presencial') } id = 'servico_presencial' onClick = { this.handleServiceChange.bind(this, 'servico_presencial') }>
                                <img src = {require('../../resources/icons/cozinheiro.png')} alt = 'cozinheiro'/>
                                <h3>Serviço Presencial</h3>
                            </div>
                            <div className = { this.servicoAtivo('entrega_no_evento') } id = 'entrega_no_evento' onClick = { this.handleServiceChange.bind(this, 'entrega_no_evento') }>
                                <img src = {require('../../resources/icons/entrega.png')} alt = 'entrega'/>
                                <h3>Entrega no Evento</h3>
                            </div>
                            <div className = { this.servicoAtivo('solucoes_covid') } id = 'solucoes_covid' onClick = { this.handleServiceChange.bind(this, 'solucoes_covid') }>
                                <img src = {require('../../resources/icons/ideia.png')} alt = 'ideia'/>
                                <h3>Soluções Especiais Covid</h3>
                                <span>NOVO</span>
                            </div>
                        </div>
                    </div>
                    <img className = 'laranja sorriso' src = {require('../../resources/logo/sorriso-laranja-direita-apresentacao-servicos.png')} alt = 'sorriso laranja'/>
                </div>
                { this.renderServico(this.state.servico) }
            </header>
        );
    }
}

export default ApresentacaoServicos;