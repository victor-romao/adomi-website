import React from 'react';
import './AdicionarCardapioCesta.css';
import BotaoAlteracaoQuantidade from '../BotaoAlteracaoQuantidade/BotaoAlteracaoQuantidade';

class AdicionarCardapioCesta extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numero_convidados: this.props.info_busca.numero_convidados === '' ? 30 : Number(this.props.info_busca.numero_convidados),
            valor_total_cardapio: '',
            valor_total: '',
            formato: this.props.formato
        }
        this.calcularValores = this.calcularValores.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    calcularValores() {
        const valor_total_cardapio = this.props.info_cardapio.valor_por_pessoa*this.state.numero_convidados;
        const valor_total = valor_total_cardapio + this.props.info_cardapio.custo_logistico;
        this.setState({
            valor_total_cardapio: valor_total_cardapio,
            valor_total: valor_total
        })
    }

    componentWillMount() {
        this.calcularValores();
    }

    async handleInputChange(param, newValue) {
        this.props.handleSearchInputChange('numero_convidados', newValue);
        await this.setState({
            numero_convidados: newValue
        })
        this.calcularValores();
        console.log(this.state);
    }

    renderAdicionarCardapio() {
        if(this.state.formato !== 'reduzido') {
            return (
                <div className = 'adicionar_cardapio_cesta'>
                    <div className = 'container'>
                        <BotaoAlteracaoQuantidade 
                            handleInputChange = {this.handleInputChange} 
                            info_busca = { this.props.info_busca }
                        />
                        <div className = 'valor_por_pessoa'>
                            <span className = 'bold span_adicionar'>R$</span>
                            <p className = 'bold'>{this.props.info_cardapio.valor_por_pessoa}</p>
                            <p className = 'por_pessoa'>/pessoa</p>
                        </div>
                    </div>
                    <div className = 'container space'>
                        <p>R${this.props.info_cardapio.valor_por_pessoa} x {this.props.info_busca.numero_convidados} convidados</p>
                        <p>R$ {this.state.valor_total_cardapio}</p>
                    </div>
                    <div className = 'container'>
                        <p>Taxa de Deslocamento</p>
                        <p>R$ {this.props.info_cardapio.custo_logistico}</p>
                    </div>
                    <div className = 'container space total'>
                        <p className = 'bold'>Valor Total</p>
                        <p className = 'bold'>R$ {this.state.valor_total}</p>
                    </div>
                    <button className = 'adicionar space'>Adicionar</button>
                </div>
            );
        } else {
            return (
                <div className = 'adicionar_cardapio_cesta_reduzido'>
                    <div className = 'container'>
                        <BotaoAlteracaoQuantidade 
                            handleInputChange = {this.handleInputChange} 
                            info_busca = { this.props.info_busca }
                        />
                        <p className = 'total'>R$ {this.state.valor_total_cardapio}</p>
                        <button className = 'adicionar space'>Adicionar</button>
                    </div>
                </div>
            );
        }
    }

    render() {
        return (
            this.renderAdicionarCardapio()
        );
    }
}

export default AdicionarCardapioCesta;