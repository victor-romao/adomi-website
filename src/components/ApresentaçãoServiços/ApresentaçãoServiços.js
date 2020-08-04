import React from 'react';
import { Link } from 'react-router-dom';
import './ApresentaçãoServiços.css';
import BarraDeBusca from '../BarraDeBusca/BarraDeBusca';

class ApresentaçãoServiços extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            serviço: 'serviço_presencial',
            info_serviços: {
                serviço_presencial: {
                    título: 'Serviço Presencial',
                    descrição: 'Os prestadores vão até o local do evento e preparam tudo na hora, fornecendo uma experiência única e diferenciada para você e seus convidados.',
                    link: ''
                },
                entrega_no_evento: {
                    título: 'Entrega no Evento',
                    descrição: 'Os prestadores preparam todos os itens para a sua festa, embalam e nós entregamos tudo pronto na hora do seu evento.',
                    link: ''
                },
                soluções_covid: {
                    título: 'Soluções Especiais Covid',
                    descrição: 'Soluções pensadas especialmente para você poder comemorar com amigos e familiares sem sair de casa. Ache soluções criativas oferecidas pelos nossos prestadores e nós entregamos.',
                    link: ''
                }
            }
        }
    }

    handleServiceChange (serviço) {
        this.props.handleChangeServiço(serviço);
        this.setState (
            { serviço: serviço }
        );
    }

    serviçoAtivo (serviço) {
        if(serviço === this.state.serviço) {
            return 'ativo';
        } else {
            return 'inativo';
        }
    }

    renderServiço (serviço) {
        return (
            <div>
                <div className = 'barra_de_busca' id = 'barra_de_busca_principal'>
                    <img src = {require('../../mídia/imagens/'+this.state.info_serviços[serviço].título+'.jpg')} alt = {this.state.info_serviços[serviço].título}/>
                    <BarraDeBusca formato = 'normal' campos = 'padrão' serviço = { this.props.serviço } />
                </div>
                <div className = 'descrição'>
                    <p>
                        {this.state.info_serviços[serviço].descrição}
                    </p>
                    <Link to = {'/serviços/' + serviço }>Saber mais sobre { this.state.info_serviços[serviço].título } ></ Link>
                </div>
            </div>
        );
    }

    render () {
        return (
            <header>
                <div className = 'título_e_serviços'>
                    <img className = 'amarelo sorriso' src = {require('../../mídia/logo/sorriso-amarelo-esquerda-apresentação-serviços.png')} alt = 'sorriso amarelo'/>
                    <div>
                        <div className = 'título'>
                            <h1>O seu evento a domicílio</h1>
                            <h2>Encontre e contrate sem complicações</h2>
                        </div>
                        <div className = 'serviços'>
                            <div className = { this.serviçoAtivo('serviço_presencial') } id = 'serviço_presencial' onClick = { this.handleServiceChange.bind(this, 'serviço_presencial') }>
                                <img src = {require('../../mídia/ícones/cozinheiro.png')} alt = 'cozinheiro'/>
                                <h3>Serviço Presencial</h3>
                            </div>
                            <div className = { this.serviçoAtivo('entrega_no_evento') } id = 'entrega_no_evento' onClick = { this.handleServiceChange.bind(this, 'entrega_no_evento') }>
                                <img src = {require('../../mídia/ícones/entrega.png')} alt = 'entrega'/>
                                <h3>Entrega no Evento</h3>
                            </div>
                            <div className = { this.serviçoAtivo('soluções_covid') } id = 'soluções_covid' onClick = { this.handleServiceChange.bind(this, 'soluções_covid') }>
                                <img src = {require('../../mídia/ícones/ideia.png')} alt = 'ideia'/>
                                <h3>Soluções Especiais Covid</h3>
                                <span>NOVO</span>
                            </div>
                        </div>
                    </div>
                    <img className = 'laranja sorriso' src = {require('../../mídia/logo/sorriso-laranja-direita-apresentação-serviços.png')} alt = 'sorriso laranja'/>
                </div>
                { this.renderServiço(this.state.serviço) }
            </header>
        );
    }
}

export default ApresentaçãoServiços;