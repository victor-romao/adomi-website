import React from 'react';
import './CarrosselDeCards.css';
import CardDeCardápio from '../CardDeCardápio/CardDeCardápio';

class CarrosselDeCards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            núm_exibidos: 4,
            serviço_presencial: {
                id_inicial_atual: 0,
                info_cardápios: [
                    {
                        img_name: 'Crepe Tradicional.png', 
                        tipo_de_comida: 'Crepe',
                        avaliação: '3.9',
                        título: 'Crepe Tradicional',
                        descrição: 'Variados sabores de crepes doces e salgados para você escolher.',
                        custo_logístico: 0,
                        valor_total: 1350.00,
                        valor_por_pessoa: 100
                    },
                    {
                        img_name: 'Churrasco Premium.png', 
                        tipo_de_comida: 'Churrasco',
                        avaliação: '4.9',
                        título: 'Churrasco Premium',
                        descrição: 'Cortes especiais como chorizo e tomahawk preparados na brasa.',
                        custo_logístico: 100,
                        valor_total: 3100.00,
                        valor_por_pessoa: 100
                    },
                    {
                        img_name: 'Pizza Caseira Básica.png', 
                        tipo_de_comida: 'Pizza',
                        avaliação: '4.5',
                        título: 'Pizza Caseira Básica',
                        descrição: 'Deliciosa pizza de massa fina e crocante de sabores tradicionais.',
                        custo_logístico: 0,
                        valor_total: 900.00,
                        valor_por_pessoa: 30
                    },
                    {
                        img_name: 'Rodízio Japonês.png', 
                        tipo_de_comida: 'Japonesa',
                        avaliação: '4.2',
                        título: 'Rodízio Japonês',
                        descrição: 'O tradicional rodízio japonês dos restaurantes no seu evento.',
                        custo_logístico: 100,
                        valor_total: 2400.00,
                        valor_por_pessoa: 80
                    },
                    {
                        img_name: 'Crepe Tradicional.png', 
                        tipo_de_comida: 'Crepe',
                        avaliação: '3.9',
                        título: 'Crepe Tradicional',
                        descrição: 'Variados sabores de crepes doces e salgados para você escolher.',
                        custo_logístico: 0,
                        valor_total: 1350.00,
                        valor_por_pessoa: 100
                    },
                    {
                        img_name: 'Churrasco Premium.png', 
                        tipo_de_comida: 'Churrasco',
                        avaliação: '4.9',
                        título: 'Churrasco Premium',
                        descrição: 'Cortes especiais como chorizo e tomahawk preparados na brasa.',
                        custo_logístico: 100,
                        valor_total: 3100.00,
                        valor_por_pessoa: 100
                    },
                    {
                        img_name: 'Pizza Caseira Básica.png', 
                        tipo_de_comida: 'Pizza',
                        avaliação: '4.5',
                        título: 'Pizza Caseira Básica',
                        descrição: 'Deliciosa pizza de massa fina e crocante de sabores tradicionais.',
                        custo_logístico: 0,
                        valor_total: 900.00,
                        valor_por_pessoa: 30
                    },
                    {
                        img_name: 'Rodízio Japonês.png', 
                        tipo_de_comida: 'Japonesa',
                        avaliação: '4.2',
                        título: 'Rodízio Japonês',
                        descrição: 'O tradicional rodízio japonês dos restaurantes no seu evento.',
                        custo_logístico: 100,
                        valor_total: 2400.00,
                        valor_por_pessoa: 80
                    }
                ]
            }
        }
        this.handleFunctionCall = this.handleFunctionCall.bind(this);

    }

    handleFunctionCall(serviço, button) {
        const component = this;
        function handleAnterior () { 
            let new_id = component.state[serviço].id_inicial_atual
            if(button === 'anterior') {
                new_id = new_id -1;
            } else {
                new_id = new_id + 1;
            }
            component.setState(prevState => ({
                [serviço]: {
                    ...prevState[serviço],
                    id_inicial_atual: new_id
                }
            }));
        }
        return handleAnterior;
    }

    renderButtonAnterior (serviço) {
        if(this.state[serviço].id_inicial_atual === 0) {
            return (
                <button className = 'inativo anterior'><img src = {require('../../mídia/ícones/seta.png')} alt = 'anterior'/></button>
            );
        } else {
            return (
                <button className = 'ativo anterior' onClick = {this.handleFunctionCall(serviço, 'anterior')}><img src = {require('../../mídia/ícones/seta.png')} alt = 'anterior'/></button>
            );
        }
    }

    renderButtonPróximo (serviço) {
        let id_inicial = this.state[serviço].id_inicial_atual;
        let id_final = id_inicial + this.state.núm_exibidos;
        if(id_final === this.state[serviço].info_cardápios.length) {
            return (
                <button className = 'inativo próximo'><img src = {require('../../mídia/ícones/seta.png')} alt = 'anterior'/></button>
            );
        } else {
            return (
                <button className = 'ativo próximo' onClick = {this.handleFunctionCall(serviço, 'próximo')}><img src = {require('../../mídia/ícones/seta.png')} alt = 'anterior'/></button>
            );
        }
    }

    renderCardápios (serviço) {
        let id_inicial = this.state[serviço].id_inicial_atual;
        let id_final = id_inicial + this.state.núm_exibidos;
        return (
            this.state[serviço].info_cardápios.slice(id_inicial, id_final).map(cardápio => (
                <CardDeCardápio cardápio = {cardápio}/>
            ))
        );
    }

    renderCarrossel (serviço) {
        return (
            <div className = 'cardápios'>
                { this.renderButtonAnterior(serviço) }
                { this.renderCardápios(serviço) }
                { this.renderButtonPróximo(serviço) }
            </div>
            
        );
    }

    render () {
        return (
            <section className = 'carrossel_serviço_presencial'>
                <div className = 'título'>
                    <img src = {require('../../mídia/ícones/cozinheiro_amarelo.png')} alt = 'cozinheiro'/>
                    <h2>Cardápios de prestadores que vão até você</h2>
                </div>             
                { this.renderCarrossel('serviço_presencial') }
            </section>
        );
    }
}

export default CarrosselDeCards;