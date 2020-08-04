import React from 'react';
import './CarrosselDeCards.css';
import CardDeCardapio from '../CardDeCardapio/CardDeCardapio';

class CarrosselDeCards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num_exibidos: 4,
            servico_presencial: {
                id_inicial_atual: 0,
                info_cardapios: [
                    {
                        img_name: 'Crepe Tradicional.png', 
                        tipo_de_comida: 'Crepe',
                        avaliacao: '3.9',
                        titulo: 'Crepe Tradicional',
                        descricao: 'Variados sabores de crepes doces e salgados para você escolher.',
                        custo_logistico: 0,
                        valor_total: 1350.00,
                        valor_por_pessoa: 100
                    },
                    {
                        img_name: 'Churrasco Premium.png', 
                        tipo_de_comida: 'Churrasco',
                        avaliacao: '4.9',
                        titulo: 'Churrasco Premium',
                        descricao: 'Cortes especiais como chorizo e tomahawk preparados na brasa.',
                        custo_logistico: 100,
                        valor_total: 3100.00,
                        valor_por_pessoa: 100
                    },
                    {
                        img_name: 'Pizza Caseira Basica.png', 
                        tipo_de_comida: 'Pizza',
                        avaliacao: '4.5',
                        titulo: 'Pizza Caseira Básica',
                        descricao: 'Deliciosa pizza de massa fina e crocante de sabores tradicionais.',
                        custo_logistico: 0,
                        valor_total: 900.00,
                        valor_por_pessoa: 30
                    },
                    {
                        img_name: 'Rodizio Japones.png', 
                        tipo_de_comida: 'Japonesa',
                        avaliacao: '4.2',
                        titulo: 'Rodízio Japonês',
                        descricao: 'O tradicional rodízio japonês dos restaurantes no seu evento.',
                        custo_logistico: 100,
                        valor_total: 2400.00,
                        valor_por_pessoa: 80
                    },
                    {
                        img_name: 'Crepe Tradicional.png', 
                        tipo_de_comida: 'Crepe',
                        avaliacao: '3.9',
                        titulo: 'Crepe Tradicional',
                        descricao: 'Variados sabores de crepes doces e salgados para você escolher.',
                        custo_logistico: 0,
                        valor_total: 1350.00,
                        valor_por_pessoa: 100
                    },
                    {
                        img_name: 'Churrasco Premium.png', 
                        tipo_de_comida: 'Churrasco',
                        avaliacao: '4.9',
                        titulo: 'Churrasco Premium',
                        descricao: 'Cortes especiais como chorizo e tomahawk preparados na brasa.',
                        custo_logistico: 100,
                        valor_total: 3100.00,
                        valor_por_pessoa: 100
                    },
                    {
                        img_name: 'Pizza Caseira Basica.png', 
                        tipo_de_comida: 'Pizza',
                        avaliacao: '4.5',
                        titulo: 'Pizza Caseira Básica',
                        descricao: 'Deliciosa pizza de massa fina e crocante de sabores tradicionais.',
                        custo_logistico: 0,
                        valor_total: 900.00,
                        valor_por_pessoa: 30
                    },
                    {
                        img_name: 'Rodizio Japones.png', 
                        tipo_de_comida: 'Japonesa',
                        avaliacao: '4.2',
                        titulo: 'Rodízio Japonês',
                        descricao: 'O tradicional rodízio japonês dos restaurantes no seu evento.',
                        custo_logistico: 100,
                        valor_total: 2400.00,
                        valor_por_pessoa: 80
                    }
                ]
            }
        }
        this.handleFunctionCall = this.handleFunctionCall.bind(this);

    }

    handleFunctionCall(servico, button) {
        const component = this;
        function handleAnterior () { 
            let new_id = component.state[servico].id_inicial_atual
            if(button === 'anterior') {
                new_id = new_id -1;
            } else {
                new_id = new_id + 1;
            }
            component.setState(prevState => ({
                [servico]: {
                    ...prevState[servico],
                    id_inicial_atual: new_id
                }
            }));
        }
        return handleAnterior;
    }

    renderButtonAnterior (servico) {
        if(this.state[servico].id_inicial_atual === 0) {
            return (
                <button className = 'inativo anterior'><img src = {require('../../resources/icons/seta.png')} alt = 'anterior'/></button>
            );
        } else {
            return (
                <button className = 'ativo anterior' onClick = {this.handleFunctionCall(servico, 'anterior')}><img src = {require('../../resources/icons/seta.png')} alt = 'anterior'/></button>
            );
        }
    }

    renderButtonproximo (servico) {
        let id_inicial = this.state[servico].id_inicial_atual;
        let id_final = id_inicial + this.state.num_exibidos;
        if(id_final === this.state[servico].info_cardapios.length) {
            return (
                <button className = 'inativo proximo'><img src = {require('../../resources/icons/seta.png')} alt = 'anterior'/></button>
            );
        } else {
            return (
                <button className = 'ativo proximo' onClick = {this.handleFunctionCall(servico, 'proximo')}><img src = {require('../../resources/icons/seta.png')} alt = 'anterior'/></button>
            );
        }
    }

    renderCardapios (servico) {
        let id_inicial = this.state[servico].id_inicial_atual;
        let id_final = id_inicial + this.state.num_exibidos;
        return (
            this.state[servico].info_cardapios.slice(id_inicial, id_final).map(cardapio => (
                <CardDeCardapio cardapio = {cardapio}/>
            ))
        );
    }

    renderCarrossel (servico) {
        return (
            <div className = 'cardapios'>
                { this.renderButtonAnterior(servico) }
                { this.renderCardapios(servico) }
                { this.renderButtonproximo(servico) }
            </div>
            
        );
    }

    render () {
        return (
            <section className = 'carrossel_servico_presencial'>
                <div className = 'titulo'>
                    <img src = {require('../../resources/icons/cozinheiro_amarelo.png')} alt = 'cozinheiro'/>
                    <h2>Cardápios de prestadores que vão até você</h2>
                </div>             
                { this.renderCarrossel('servico_presencial') }
            </section>
        );
    }
}

export default CarrosselDeCards;