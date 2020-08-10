import React from 'react';
import { Link } from 'react-router-dom';
import './ApresentacaoPaginaServico.css';
import BarraDeBusca from '../BarraDeBusca/BarraDeBusca';

class ApresentacaoPaginaServico extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            servico: this.props.servico,
            info_servicos: {
                servico_presencial: {
                    img_name: 'servico_presencial',
                    titulo: 'Serviço Presencial',
                    descricao: 'Os prestadores vão até o local do evento e preparam tudo na hora, fornecendo uma experiência única e diferenciada para você e seus convidados.',
                    icon_name: 'cozinheiro_amarelo.png'
                },
                entrega_no_evento: {
                    img_name: 'entrega_no_evento',
                    titulo: 'Entrega no Evento',
                    descricao: 'Os prestadores preparam todos os itens para a sua festa, embalam e nós entregamos tudo pronto na hora do seu evento.',
                    icon_name: 'entrega_amarelo.png'
                },
                solucoes_covid: {
                    img_name: 'solucoes_covid',
                    titulo: 'Soluções Especiais Covid',
                    descricao: 'Soluções pensadas especialmente para você poder comemorar com amigos e familiares sem sair de casa. Ache soluções criativas oferecidas pelos nossos prestadores e nós entregamos.',
                    icon_name: 'ideia_amarelo.png'
                }
            }
        }
    }

    renderServico (servico) {
        return (
            <div className = 'barra_de_busca' id = 'barra_de_busca_principal'>
                <img src = {require('../../resources/imagens/'+this.state.info_servicos[servico].img_name +'.jpg')} alt = {this.state.info_servicos[servico].titulo}/>
                <BarraDeBusca formato = 'normal' campos = 'padrao' servico = { this.props.servico } />
            </div>
        );
    }

    render () {
        return (
            <header className = 'pagina_servicos'>
                <div className = 'titulo_e_servico'>
                    <img className = 'amarelo sorriso' src = {require('../../resources/logo/sorriso-amarelo-esquerda-apresentacao-servicos.png')} alt = 'sorriso amarelo'/>
                    <div>
                        <div className = 'titulo'>
                            <h1>O seu evento a domicílio</h1>
                        </div>
                        <div className = 'servico'>
                            <img src = {require('../../resources/icons/' + this.state.info_servicos[this.state.servico].icon_name)}/> 
                            <h2>{this.state.info_servicos[this.state.servico].titulo.toUpperCase()}</h2>
                        </div>
                    </div>
                    <img className = 'laranja sorriso' src = {require('../../resources/logo/sorriso-laranja-direita-apresentacao-servicos.png')} alt = 'sorriso laranja'/>
                </div>
                { this.renderServico(this.state.servico) }
            </header>
        );
    }
}

export default ApresentacaoPaginaServico;