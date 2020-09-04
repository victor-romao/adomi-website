import React from 'react';
import { Link } from 'react-router-dom';
import './PopUpAdicaoEdicaoItemAdicional.css';
import BotaoAlteracaoQuantidade from '../BotaoAlteracaoQuantidade/BotaoAlteracaoQuantidade';

class PopUpAdicaoEdicaoItemAdicional extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            informacoes_adicao_item_adicional: {
                id_prestador: this.props.id_prestador,
                id_item_adicional: this.props.info_item_adicional.id_item,
                info_item_adicional: {
                    quantidade: this.props.quantidade,
                    comentario: ''
                }
            }
        }
        this.handleQuantidadeChange = this.handleQuantidadeChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleAdicaoEdicaoCesta = this.handleAdicaoEdicaoCesta.bind(this);
    }

    definirStatusItemAdicional() {
        let item_adicional_na_cesta = false;
        Object.keys(this.props.cesta).map(id_prestador => {
            if(id_prestador===this.props.id_prestador) {
                Object.keys(this.props.cesta[id_prestador].itens_adicionais).map(id_item_adicional => {
                    if(Number(id_item_adicional) === Number(this.props.info_item_adicional.id_item)) {
                        item_adicional_na_cesta = true;
                    }
                })
            }
        });
        return item_adicional_na_cesta;
    }

    async definirStatusInicialItens() {
        if(this.definirStatusItemAdicional()) {
            let info_previa_item_adicional = this.props.cesta[this.props.id_prestador].itens_adicionais[this.props.info_item_adicional.id_item];
            await this.setState(prevState => ({
                informacoes_adicao_item_adicional: {
                    ...prevState.informacoes_adicao_item_adicional,
                    info_item_adicional: info_previa_item_adicional
                }
            }));
        }
    }

    componentWillMount() {
        this.props.atualizarValores();
        this.definirStatusInicialItens();
        this.handleQuantidadeChange('quantidade', this.props.quantidade);
    }

    async handleQuantidadeChange(param, newValue) {
        await this.props.handleQuantidadeChange('quantidade', newValue);
        this.setState(prevState => ({
            informacoes_adicao_item_adicional: {
                ...prevState.informacoes_adicao_item_adicional,
                info_item_adicional: {
                    ...prevState.informacoes_adicao_item_adicional.info_item_adicional,
                   quantidade: newValue
                }

            }
        }));
        this.props.atualizarValores();
    }

    async handleInputChange(e) {
        let paramValue = e.target.value;
        await this.setState(prevState => ({
            informacoes_adicao_item_adicional: {
                ...prevState.informacoes_adicao_item_adicional,
                info_item_adicional: {
                    ...prevState.informacoes_adicao_item_adicional.info_item_adicional,
                    comentario: paramValue
                }
            }
        }));
    }

    async handleAdicaoEdicaoCesta(e) {
        await this.props.handleAdicaoEdicaoCesta('itens_adicionais', this.state.informacoes_adicao_item_adicional);
        this.props.handleStatusItemAdicional();
        this.props.handleStatusPopUp(e);
        this.props.handleQuantidadeChange('quantidade',this.state.informacoes_adicao_item_adicional.info_item_adicional.quantidade);
    }

    renderBotaoAdicaoEdicao() {
        if(this.props.info_item_adicional.editavel) {
            return (
                <div className = 'botoes'>
                    <BotaoAlteracaoQuantidade 
                        quantidade = { this.state.informacoes_adicao_item_adicional.info_item_adicional.quantidade }
                        handleInputChange = { this.handleQuantidadeChange}
                    />
                    <button className = 'botao_central' onClick = {this.handleAdicaoEdicaoCesta}>{this.props.item_adicional_na_cesta ? "Alterar" : "Adicionar"} R$ {this.props.valor_total}</button>
                </div>
            );
        } else {
            return (
                <div className = 'botoes'>
                    <button className = 'botao_central' onClick = {this.handleAdicaoEdicaoCesta}>{this.props.item_adicional_na_cesta ? "Alterar" : "Adicionar"} R$ {this.props.valor_total}</button>
                </div>
            );
        }
    }
    
    render() {
        return (
            <div className = 'pop_up_adicao_edicao_item_adicional'>
                <div className = 'fundo' onClick = {this.props.handleStatusPopUp}>
                </div>
                <div className = 'item_adicional'>
                    <div className = 'box topo'>
                        <h2>{this.props.info_item_adicional.titulo}</h2>
                        <img className = 'fechar' src = {require('../../resources/icons/fechar.png')} alt = 'fechar' onClick = {this.props.handleStatusPopUp}/>
                    </div>
                    <div className = 'box meio'>
                        <img src = {require('../../resources/imagens/itens/item_' + this.props.info_item_adicional.id_item + '/' + this.props.info_item_adicional.imagens[0]) } alt = {this.props.info_item_adicional.tipo_de_comida}/>
                        <div className = 'input'>
                                <p className = 'label'>Algum Comentário?</p>
                                <input 
                                    id = 'comentario' 
                                    className = 'comentario' 
                                    type = 'text' 
                                    placeholder = 'Escreva alguma observação adicional para o prestador.' 
                                    name = 'comentario' 
                                    defaultValue = {this.state.informacoes_adicao_item_adicional.info_item_adicional.comentario}
                                    onChange = {this.handleInputChange} 
                                />
                        </div>
                    </div>
                    <div className = 'box baixo'>
                        {this.renderBotaoAdicaoEdicao()}
                    </div>
                </div>
            </div>
        );
    }
}

export default PopUpAdicaoEdicaoItemAdicional;