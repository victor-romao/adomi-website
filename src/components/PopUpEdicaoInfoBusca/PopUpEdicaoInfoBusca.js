import React from 'react';
import { Link } from 'react-router-dom';
import './PopUpEdicaoInfoBusca.css';
import BotaoAlteracaoQuantidade from '../BotaoAlteracaoQuantidade/BotaoAlteracaoQuantidade';

class PopUpEdicaoInfoBusca extends React.Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSalvarAlteracao = this.handleSalvarAlteracao.bind(this);
    }

    componentWillMount() {
        this.setState({
            [this.props.info_edicao]: this.props.info_busca[this.props.info_edicao]
        })
    }

    handleInputChange(e) {
        this.setState({
            [this.props.info_edicao]: e.target.value
        });
    }

    handleSalvarAlteracao() {
        this.props.handleSearchInputChange(this.props.info_edicao, this.state[this.props.info_edicao]);
        this.props.handleStatusPopUpEdicaoBusca();
    }
    
    render() {
        return (
            <div className = 'pop_up_edicao_info_busca'>
                <div className = 'fundo' onClick = {this.props.handleStatusPopUpEdicaoBusca}>
                </div>
                <div className = 'info_busca'>
                    <div className = 'box topo'>
                        <h2>{this.props.info_edicao === 'localizacao' ? 'Local' : 'Data e Hora'}</h2>
                        <img className = 'fechar' src = {require('../../resources/icons/fechar.png')} alt = 'fechar' onClick = {this.props.handleStatusPopUpEdicaoBusca}/>
                    </div>
                    <div className = 'box meio'>
                        <img src = {require('../../resources/icons/editar_' + this.props.info_edicao + '.png') } alt = {this.props.info_edicao}/>
                        <h6>{this.props.info_edicao === 'localizacao' ? 'Onde será o seu evento?' : 'Qual a data e horário do seu evento?'}</h6>
                        {
                            this.props.info_edicao === 'localizacao' ? 
                                <input className = 'input' type = 'text' placeholder = 'Qual a cidade/endereço?' name = 'localizacao' id = 'localizacao' defaultValue = { this.props.info_busca.localizacao } onChange = { this.handleInputChange }/> 
                            :                         
                                <input className = 'input' type = 'datetime-local' placeholder = 'Qual a data do evento?' name = 'data_e_hora' id = 'data_e_hora' defaultValue = { this.props.info_busca.data_e_hora } onChange = { this.handleInputChange }/>
                        }
                    </div>
                    <div className = 'box baixo'>
                    <button className = 'botao_central' onClick = {this.handleSalvarAlteracao}>Salvar Alteração</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default PopUpEdicaoInfoBusca;