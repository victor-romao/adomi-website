import React from 'react';
import './CardDeItem.css';
import BotaoAlteracaoQuantidade from '../BotaoAlteracaoQuantidade/BotaoAlteracaoQuantidade';

class CardDeItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quantidade: this.props.info_busca.numero_convidados === '' ? 30 : this.props.info_busca.numero_convidados,
            valor_total: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentWillMount() {
        this.setState({
            valor_total: this.calcularCustoItem()
        });
    }

    componentWillUpdate(nextProps) {
        if(this.props.info_busca.numero_convidados !== nextProps.info_busca.numero_convidados) {
            this.handleInputChange('', nextProps.info_busca.numero_convidados);
        }
    }

    calcularCustoItem() {
        if(this.props.item.tipo_precificacao==='valor por pessoa') {
           return this.state.quantidade*this.props.item.valor;
        } else {
            return this.props.item.valor;
        }
    }

    async handleInputChange(param, newValue) {
        await this.setState({
            quantidade: newValue
        });
        this.setState({
            valor_total: this.calcularCustoItem()
        });
    }

    renderCustos(type) {
        if(type === 'adicionais') {
            if(this.props.item.editavel) {
                return (
                    <div className = 'custos'>
                        <div className = 'container'>
                            <BotaoAlteracaoQuantidade quantidade = { this.state.quantidade } handleInputChange = {this.handleInputChange}/>
                            <div className = 'valor_por_pessoa'>
                                <div className = 'valor'>
                                    <span>R$</span>
                                    <p>{ this.props.item.valor }</p>
                                </div>
                                <p className = 'por_pessoa'>/pessoa</p>
                            </div>
                        </div>
                <p className = 'valor_total valor_total_editavel'><span>Valor Total</span> R$ {this.state.valor_total}</p>
                        <button className = 'adicionar space'>Adicionar</button>
                    </div>
                );
            } else {
                return(
                    <div className = 'custos'>
                        <div className = 'item_card_space'>
                            <p className = 'valor_total'>Valor Total R$ {this.state.valor_total}</p>
                            <p>Valor para todos os seus convidados</p>
                        </div>
                        <button className = 'adicionar space'>Adicionar</button>
                    </div>
                );
            }
        }
    }

    render() {
        return (
            <div className = 'item'>  
                <img src = {require('../../resources/imagens/itens/item_' + this.props.item.id_item + '/img_1.png' )} alt = { this.props.item.titulo }/>
                <div className = 'informacoes'>
                    <h3 className = 'bold'>{ this.props.item.titulo }</h3>
                    <p className = 'descricao'>{ this.props.item.descricao }</p>    
                </div>
                {this.renderCustos(this.props.type)}             
            </div>
        );
    }
}

export default CardDeItem;