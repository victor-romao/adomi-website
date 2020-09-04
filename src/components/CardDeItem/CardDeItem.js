import React from 'react';
import './CardDeItem.css';
import BotaoAlteracaoQuantidade from '../BotaoAlteracaoQuantidade/BotaoAlteracaoQuantidade';
import PopUpAdicaoEdicaoItemAdicional from '../PopUpAdicaoEdicaoItemAdicional/PopUpAdicaoEdicaoItemAdicional';

class CardDeItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quantidade: this.props.quantidade,
            valor_total: '',
            pop_up_ativo: false,
            item_adicional_na_cesta: ''
        }
        this.handleQuantidadeChange = this.handleQuantidadeChange.bind(this);
        this.atualizarValores = this.atualizarValores.bind(this);
        this.handleStatusPopUp = this.handleStatusPopUp.bind(this);
        this.handleBotaoAdicao = this.handleBotaoAdicao.bind(this);
        this.handleStatusItemAdicional = this.handleStatusItemAdicional.bind(this);
    }

    definirStatusItemAdicional() {
        let item_adicional_na_cesta = false;
        Object.keys(this.props.cesta).map(id_prestador => {
            if(id_prestador===this.props.id_prestador) {
                Object.keys(this.props.cesta[id_prestador].itens_adicionais).map(id_item_adicional => {
                    if(Number(id_item_adicional) === Number(this.props.item.id_item)) {
                        item_adicional_na_cesta = true;
                    }
                })
            }
        });
        return item_adicional_na_cesta;
    }

    componentWillMount() {
        let quantidade = this.state.quantidade;
        if(this.definirStatusItemAdicional()) {
            quantidade = this.props.cesta[this.props.id_prestador].itens_adicionais[this.props.item.id_item].quantidade;
        }
        this.setState({
            valor_total: this.calcularCustoItem(),
            quantidade: quantidade,
            item_adicional_na_cesta: this.definirStatusItemAdicional()
        });
    }

    componentWillUpdate(nextProps) {
        if(!this.definirStatusItemAdicional()) {
            if(this.props.quantidade !== nextProps.quantidade) {
                this.handleQuantidadeChange('', nextProps.quantidade);
            } 
        } else {
            if(Object.keys(this.props.cesta).length !== 0 && Object.keys(nextProps.cesta).length !== 0) {
                if(this.props.cesta[this.props.id_prestador].itens_adicionais[this.props.item.id_item].quantidade !== nextProps.cesta[this.props.id_prestador].itens_adicionais[this.props.item.id_item].quantidade) {
                    this.handleQuantidadeChange('', nextProps.cesta[this.props.id_prestador].itens_adicionais[this.props.item.id_item].quantidade);
                }
            }
        }
    }

    calcularCustoItem() {
        if(this.props.item.tipo_precificacao==='valor por pessoa') {
           return this.state.quantidade*this.props.item.valor;
        } else {
            return this.props.item.valor;
        }
    }

    atualizarValores() {
        this.setState({
            valor_total: this.calcularCustoItem()
        });
    }

    async handleQuantidadeChange(param, newValue) {
        await this.setState({
            quantidade: newValue
        });
        this.atualizarValores();
    }

    handleStatusPopUp(e) {
        e.preventDefault();
        const newValue = !this.state.pop_up_ativo
        this.setState({
            pop_up_ativo: newValue
        })
    }

    handleStatusItemAdicional() {
        this.setState({
            item_adicional_na_cesta: this.definirStatusItemAdicional()
        })
    }

    handleBotaoAdicao(e) {
        let prestador_na_cesta = false; 
        Object.keys(this.props.cesta).map(id_prestador => {
            if(id_prestador === this.props.id_prestador) {
                prestador_na_cesta = true;
            }
        });
        if(prestador_na_cesta) {
            console.log("prestador esta na cesta")
            this.handleStatusPopUp(e);
        } else {
            console.log("prestador não esta na cesta")
            setTimeout(function () {
                document.getElementById("adicionar_cardapio_nav_aux").style.backgroundColor = "rgb(255, 182, 0)";
                document.getElementById("adicionar_cardapio_principal").style.border = "rgb(255, 182, 0)";
                setTimeout(function () {
                    document.getElementById("adicionar_cardapio_nav_aux").style.backgroundColor = "rgb(239, 106, 0)";
                    document.getElementById("adicionar_cardapio_principal").style.border = "rgb(239, 106, 0)";
                }, 1000);
            }, 300);
            if(e.target.nextSibling === null) {
                let newElement = document.createElement("p");
                newElement.innerHTML = "Adicione o cardápio primeiro";
                newElement.classList.add('alerta');
                e.target.parentNode.insertBefore(newElement, e.target.nextSibling);
                e.target.style.margin = "0px" ;
            }
        }
    }

    renderCustos(type) {
        if(type === 'adicionais') {
            if(this.props.item.editavel) {
                return (
                    <div className = 'custos'>
                        <div className = 'container'>
                            <BotaoAlteracaoQuantidade quantidade = { this.state.quantidade } handleInputChange = {this.handleQuantidadeChange}/>
                            <div className = 'valor_por_pessoa'>
                                <div className = 'valor'>
                                    <span>R$</span>
                                    <p>{ this.props.item.valor }</p>
                                </div>
                                <p className = 'por_pessoa'>/pessoa</p>
                            </div>
                        </div>
                        <p className = 'valor_total valor_total_editavel'><span>Valor Total</span> R$ {this.state.valor_total}</p>
                        <button className = 'adicionar space' onClick = {this.handleBotaoAdicao}>{this.state.item_adicional_na_cesta ? "Alterar" : "Adicionar"}</button>
                    </div>
                );
            } else {
                return(
                    <div className = 'custos'>
                        <div className = 'item_card_space'>
                            <p className = 'valor_total'>Valor Total R$ {this.state.valor_total}</p>
                            <p>Valor para todos os seus convidados</p>
                        </div>
                        <button className = 'adicionar space' onClick = {this.handleBotaoAdicao}>{this.state.item_adicional_na_cesta ? "Alterar" : "Adicionar"}</button>
                    </div>
                );
            }
        }
    }

    renderPopUpAdicao() {
        if(this.state.pop_up_ativo) {
            return (
                <PopUpAdicaoEdicaoItemAdicional 
                    quantidade = {this.state.quantidade }
                    info_item_adicional = {this.props.item}
                    id_prestador = {this.props.id_prestador}
                    handleStatusPopUp = {this.handleStatusPopUp}
                    cesta = {this.props.cesta}
                    handleAdicaoEdicaoCesta = {this.props.handleAdicaoEdicaoCesta}
                    item_adicional_na_cesta = {this.state.item_adicional_na_cesta}
                    handleStatusItemAdicional = {this.handleStatusItemAdicional}
                    valor_total = {this.state.valor_total}
                    atualizarValores = {this.atualizarValores}
                    handleQuantidadeChange = {this.handleQuantidadeChange}
                />
            );
        }
    }

    render() {
        return (
            <div className = 'wrap_pop_up'>
                <div className = 'item'>  
                    <img src = {require('../../resources/imagens/itens/item_' + this.props.item.id_item + '/img_1.png' )} alt = { this.props.item.titulo }/>
                    <div className = 'informacoes'>
                        <h3 className = 'bold'>{ this.props.item.titulo }</h3>
                        <p className = 'descricao'>{ this.props.item.descricao }</p>    
                    </div>
                    {this.renderCustos(this.props.type)}             
                </div>
                {this.renderPopUpAdicao()}
            </div>
        );
    }
}

export default CardDeItem;