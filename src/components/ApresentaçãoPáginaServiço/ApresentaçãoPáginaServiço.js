import React from 'react';
import { Link } from 'react-router-dom';
import './ApresentaçãoPáginaServiço.css';
import BarraDeBusca from '../BarraDeBusca/BarraDeBusca';

class ApresentaçãoPáginaServiço extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            serviço: this.props.serviço,
            info_serviços: {
                serviço_presencial: {
                    título: 'Serviço Presencial',
                    descrição: 'Os prestadores vão até o local do evento e preparam tudo na hora, fornecendo uma experiência única e diferenciada para você e seus convidados.',
                    ícone_name: 'cozinheiro_amarelo.png'
                },
                entrega_no_evento: {
                    título: 'Entrega no Evento',
                    descrição: 'Os prestadores preparam todos os itens para a sua festa, embalam e nós entregamos tudo pronto na hora do seu evento.',
                    ícone_name: 'entrega_amarelo.png'
                },
                soluções_covid: {
                    título: 'Soluções Especiais Covid',
                    descrição: 'Soluções pensadas especialmente para você poder comemorar com amigos e familiares sem sair de casa. Ache soluções criativas oferecidas pelos nossos prestadores e nós entregamos.',
                    ícone_name: 'ideia_amarelo.png'
                }
            }
        }
    }

    renderServiço (serviço) {
        return (
            <div>
                <div className = 'barra_de_busca' id = 'barra_de_busca_principal'>
                    <img src = {require('../../mídia/imagens/'+this.state.info_serviços[serviço].título+'.jpg')} alt = {this.state.info_serviços[serviço].título}/>
                    <BarraDeBusca formato = 'normal' campos = 'padrão' serviço = { this.props.serviço } />
                </div>
            </div>
        );
    }

    render () {
        return (
            <header>
                <div className = 'título_e_serviço'>
                    <img className = 'amarelo sorriso' src = {require('../../mídia/logo/sorriso-amarelo-esquerda-apresentação-serviços.png')} alt = 'sorriso amarelo'/>
                    <div>
                        <div className = 'título'>
                            <h1>O seu evento a domicílio</h1>
                        </div>
                        <div className = 'serviço'>
                            <img src = {require('../../mídia/ícones/' + this.state.info_serviços[this.state.serviço].ícone_name)}/> 
                            <h2>{this.state.info_serviços[this.state.serviço].título}</h2>
                        </div>
                    </div>
                    <img className = 'laranja sorriso' src = {require('../../mídia/logo/sorriso-laranja-direita-apresentação-serviços.png')} alt = 'sorriso laranja'/>
                </div>
                { this.renderServiço(this.state.serviço) }
            </header>
        );
    }
}

export default ApresentaçãoPáginaServiço;