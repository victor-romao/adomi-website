import React from 'react';
import './AdicionarCardapioCesta.css';
import BotaoAlteracaoQuantidade from '../BotaoAlteracaoQuantidade/BotaoAlteracaoQuantidade';
import PopUpAdicaoEdicaoCardapio from '../PopUpAdicaoEdicaoCardapio/PopUpAdicaoEdicaoCardapio';

class AdicionarCardapioCesta extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formato: this.props.formato,
            pop_up_ativo: false
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStatusPopUp = this.handleStatusPopUp.bind(this);
    }

    async handleInputChange(param, newValue) {
        if(this.props.cardapio_na_cesta) {
            await this.props.handleQuantidadeChange(newValue);
        } else {
            await this.props.handleSearchInputChange('numero_convidados', newValue);
        }
        this.props.calcularValores();
    }

    handleStatusPopUp(e) {
        e.preventDefault();
        const newValue = !this.state.pop_up_ativo
        this.setState({
            pop_up_ativo: newValue
        })
    }

    renderAdicionarCardapio() {
        if(this.state.formato !== 'reduzido') {
            return (
                <div className = 'adicionar_cardapio_cesta'>
                    <div className = 'container'>
                        <BotaoAlteracaoQuantidade 
                            handleInputChange = {this.handleInputChange} 
                            quantidade = {this.props.quantidade}
                        />
                        <div className = 'valor_por_pessoa'>
                            <span className = 'bold span_adicionar'>R$</span>
                            <p className = 'bold'>{this.props.info_cardapio.valor_por_pessoa}</p>
                            <p className = 'por_pessoa'>/pessoa</p>
                        </div>
                    </div>
                    <div className = 'container space'>
                        <p>R${this.props.info_cardapio.valor_por_pessoa} x {this.props.quantidade} convidados</p>
                        <p>R$ {this.props.valor_total_cardapio}</p>
                    </div>
                    <div className = 'container'>
                        <p>Taxa de Deslocamento</p>
                        <p>R$ {this.props.info_cardapio.custo_logistico}</p>
                    </div>
                    <div className = 'container space total'>
                        <p className = 'bold'>Valor Total</p>
                        <p className = 'bold'>R$ {this.props.valor_total}</p>
                    </div>
                    <button id = 'adicionar_cardapio_principal' onClick = {this.handleStatusPopUp} className = 'adicionar space'>{this.props.cardapio_na_cesta ? 'Alterar' : 'Adicionar'}</button>
                </div>
            );
        } else {
            return (
                <div className = 'adicionar_cardapio_cesta_reduzido'>
                    <div className = 'container'>
                        <BotaoAlteracaoQuantidade 
                            handleInputChange = {this.handleInputChange} 
                            quantidade = { this.props.quantidade }
                        />
                        <p className = 'total'>R$ {this.props.valor_total}</p>
                        <button id = 'adicionar_cardapio_nav_aux' onClick = {this.handleStatusPopUp} className = 'adicionar space'>{this.props.cardapio_na_cesta ? 'Alterar' : 'Adicionar'}</button>
                    </div>
                </div>
            );
        }
    }

    renderPopUpAdicao() {
        if(this.state.pop_up_ativo) {
            return (
                <PopUpAdicaoEdicaoCardapio 
                    quantidade = {this.props.quantidade}
                    handleSearchInputChange = {this.props.handleSearchInputChange}
                    info_cardapio = {this.props.info_cardapio}
                    info_itens = {this.props.info_itens}
                    id_prestador = {this.props.id_prestador}
                    info_busca = { this.props.info_busca }
                    handleStatusPopUp = {this.handleStatusPopUp}
                    cesta = {this.props.cesta}
                    handleAdicaoEdicaoCesta = {this.props.handleAdicaoEdicaoCesta}
                    cardapio_na_cesta = {this.props.cardapio_na_cesta}
                    handleStatusCardapio = {this.props.handleStatusCardapio}
                    valor_total = {this.props.valor_total}
                    calcularValores = {this.props.calcularValores}
                />
            );
        }
    }

    render() {
        return (
            <div className = 'adicionar_cardapio'>
                { this.renderAdicionarCardapio() }
                { this.renderPopUpAdicao() }
            </div>
        );
    }
}

export default AdicionarCardapioCesta;