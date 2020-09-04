import React from 'react';
import { Link } from 'react-router-dom';
import './ApresentacaoServicos.css';
import BarraDeBusca from '../BarraDeBusca/BarraDeBusca';
import SelecaoServico from '../SelecaoServico/SelecaoServico';

class ApresentacaoServicos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            servico: this.props.info_busca.servico,
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
        this.handleServicoChange = this.handleServicoChange.bind(this);
    }

    async handleServicoChange (servico) {
        await this.props.handleSearchInputChange('servico', servico);
        this.setState({
            servico: this.props.info_busca.servico
        })
        console.log(this.props.info_busca);
    }

    renderServico (servico) {
        return (
            <div>
                <div className = 'barra_de_busca' id = 'barra_de_busca_principal'>
                    <img src = {require('../../resources/imagens/'+this.state.info_servicos[servico].img_name+'.jpg')} alt = {this.state.info_servicos[servico].titulo}/>
                    <BarraDeBusca 
                        formato = 'normal' 
                        campos = 'padrao' 
                        handleSearchInputChange = {this.props.handleSearchInputChange} 
                        info_busca = { this.props.info_busca }
                        {...this.props}
                    />
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
                            <h1 id = 'titulo'>O seu evento a domicílio</h1>
                            <h2>Encontre e contrate sem complicações</h2>
                        </div>
                        <SelecaoServico handleServicoChange = { this.handleServicoChange } info_busca = { this.props.info_busca }/>
                    </div>
                    <img className = 'laranja sorriso' src = {require('../../resources/logo/sorriso-laranja-direita-apresentacao-servicos.png')} alt = 'sorriso laranja'/>
                </div>
                { this.renderServico(this.state.servico) }
            </header>
        );
    }
}

export default ApresentacaoServicos;