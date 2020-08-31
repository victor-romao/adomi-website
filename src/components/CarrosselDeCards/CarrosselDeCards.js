import React from 'react';
import './CarrosselDeCards.css';
import CardDeCardapio from '../CardDeCardapio/CardDeCardapio';

class CarrosselDeCards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num_exibidos: 4,
            servico: this.props.servico,
            servico_presencial: {
                id_inicial_atual: 0,
                info_titulo: {
                    img_name: 'cozinheiro_amarelo.png',
                    img_alt: 'cozinheiro',
                    titulo: 'Cardápios de prestadores que vão até você'
                },
                info_cardapios: [
                    {
                        id: 1,
                        main_img_name: 'Crepe Tradicional.png', 
                        tipo_de_comida: 'Crepe',
                        avaliacao: 'Novo',
                        titulo: 'Crepe Tradicional',
                        subtitulo: 'Variados sabores de crepes doces e salgados para você escolher.',
                        custo_logistico: 0,
                        valor_total: 1350.00,
                        valor_por_pessoa: 45
                    },
                    {
                        id: 2,
                        main_img_name: 'Churrasco Premium.png', 
                        tipo_de_comida: 'Churrasco',
                        avaliacao: '4.9',
                        titulo: 'Churrasco Premium',
                        subtitulo: 'Cortes especiais como chorizo e tomahawk preparados na brasa.',
                        custo_logistico: 100,
                        valor_total: 3100.00,
                        valor_por_pessoa: 100
                    },
                    {
                        id: 3,
                        main_img_name: 'Pizza Caseira Basica.png', 
                        tipo_de_comida: 'Pizza',
                        avaliacao: '4.5',
                        titulo: 'Pizza Caseira Básica',
                        subtitulo: 'Deliciosa pizza de massa fina e crocante de sabores tradicionais.',
                        custo_logistico: 0,
                        valor_total: 900.00,
                        valor_por_pessoa: 30
                    },
                    {
                        id: 4,
                        main_img_name: 'Rodizio Japones.png', 
                        tipo_de_comida: 'Japonesa',
                        avaliacao: '4.2',
                        titulo: 'Rodízio Japonês',
                        subtitulo: 'O tradicional rodízio japonês dos restaurantes no seu evento.',
                        custo_logistico: 100,
                        valor_total: 2400.00,
                        valor_por_pessoa: 80
                    },
                    {
                        id: 1,
                        main_img_name: 'Crepe Tradicional.png', 
                        tipo_de_comida: 'Crepe',
                        avaliacao: '3.9',
                        titulo: 'Crepe Tradicional',
                        subtitulo: 'Variados sabores de crepes doces e salgados para você escolher.',
                        custo_logistico: 0,
                        valor_total: 1350.00,
                        valor_por_pessoa: 45
                    },
                    {
                        id: 2,
                        main_img_name: 'Churrasco Premium.png', 
                        tipo_de_comida: 'Churrasco',
                        avaliacao: '4.9',
                        titulo: 'Churrasco Premium',
                        subtitulo: 'Cortes especiais como chorizo e tomahawk preparados na brasa.',
                        custo_logistico: 100,
                        valor_total: 3100.00,
                        valor_por_pessoa: 100
                    },
                    {
                        id: 3,
                        main_img_name: 'Pizza Caseira Basica.png', 
                        tipo_de_comida: 'Pizza',
                        avaliacao: '4.5',
                        titulo: 'Pizza Caseira Básica',
                        subtitulo: 'Deliciosa pizza de massa fina e crocante de sabores tradicionais.',
                        custo_logistico: 0,
                        valor_total: 900.00,
                        valor_por_pessoa: 30
                    },
                    {
                        id: 4,
                        main_img_name: 'Rodizio Japones.png', 
                        tipo_de_comida: 'Japonesa',
                        avaliacao: '4.2',
                        titulo: 'Rodízio Japonês',
                        subtitulo: 'O tradicional rodízio japonês dos restaurantes no seu evento.',
                        custo_logistico: 100,
                        valor_total: 2400.00,
                        valor_por_pessoa: 80
                    }
                ]
            },
            entrega_no_evento: {
                id_inicial_atual: 0,
                info_titulo: {
                    img_name: 'entrega_amarelo.png',
                    img_alt: 'entrega',
                    titulo: 'Encomende e receba tudo pronto no seu evento'
                },
                info_cardapios: [
                    {
                        id: 2,
                        main_img_name: 'Churrasco Premium.png', 
                        tipo_de_comida: 'Churrasco',
                        avaliacao: '4.9',
                        titulo: 'Churrasco Premium',
                        subtitulo: 'Cortes especiais como chorizo e tomahawk preparados na brasa.',
                        custo_logistico: 100,
                        valor_total: 3100.00,
                        valor_por_pessoa: 100
                    },
                    {
                        id: 3,
                        main_img_name: 'Pizza Caseira Basica.png', 
                        tipo_de_comida: 'Pizza',
                        avaliacao: '4.5',
                        titulo: 'Pizza Caseira Básica',
                        subtitulo: 'Deliciosa pizza de massa fina e crocante de sabores tradicionais.',
                        custo_logistico: 0,
                        valor_total: 900.00,
                        valor_por_pessoa: 30
                    },
                    {
                        id: 4,
                        main_img_name: 'Rodizio Japones.png', 
                        tipo_de_comida: 'Japonesa',
                        avaliacao: '4.2',
                        titulo: 'Rodízio Japonês',
                        subtitulo: 'O tradicional rodízio japonês dos restaurantes no seu evento.',
                        custo_logistico: 100,
                        valor_total: 2400.00,
                        valor_por_pessoa: 80
                    },
                    {
                        id: 1,
                        main_img_name: 'Crepe Tradicional.png', 
                        tipo_de_comida: 'Crepe',
                        avaliacao: '3.9',
                        titulo: 'Crepe Tradicional',
                        subtitulo: 'Variados sabores de crepes doces e salgados para você escolher.',
                        custo_logistico: 0,
                        valor_total: 1350.00,
                        valor_por_pessoa: 100
                    },
                    {
                        id: 2,
                        main_img_name: 'Churrasco Premium.png', 
                        tipo_de_comida: 'Churrasco',
                        avaliacao: '4.9',
                        titulo: 'Churrasco Premium',
                        subtitulo: 'Cortes especiais como chorizo e tomahawk preparados na brasa.',
                        custo_logistico: 100,
                        valor_total: 3100.00,
                        valor_por_pessoa: 100
                    },
                    {
                        id: 3,
                        main_img_name: 'Pizza Caseira Basica.png', 
                        tipo_de_comida: 'Pizza',
                        avaliacao: '4.5',
                        titulo: 'Pizza Caseira Básica',
                        subtitulo: 'Deliciosa pizza de massa fina e crocante de sabores tradicionais.',
                        custo_logistico: 0,
                        valor_total: 900.00,
                        valor_por_pessoa: 30
                    },
                    {
                        id: 4,
                        main_img_name: 'Rodizio Japones.png', 
                        tipo_de_comida: 'Japonesa',
                        avaliacao: '4.2',
                        titulo: 'Rodízio Japonês',
                        subtitulo: 'O tradicional rodízio japonês dos restaurantes no seu evento.',
                        custo_logistico: 100,
                        valor_total: 2400.00,
                        valor_por_pessoa: 80
                    },
                    {
                        id: 1,
                        main_img_name: 'Crepe Tradicional.png', 
                        tipo_de_comida: 'Crepe',
                        avaliacao: '3.9',
                        titulo: 'Crepe Tradicional',
                        subtitulo: 'Variados sabores de crepes doces e salgados para você escolher.',
                        custo_logistico: 0,
                        valor_total: 1350.00,
                        valor_por_pessoa: 100
                    }
                ]
            },
            solucoes_covid: {
                id_inicial_atual: 0,
                info_titulo: {
                    img_name: 'ideia_amarelo.png',
                    img_alt: 'ideia',
                    titulo: 'Soluções especiais pensadas para a quarentena'
                },
                info_cardapios: [
                    {
                        id: 3,
                        main_img_name: 'Pizza Caseira Basica.png', 
                        tipo_de_comida: 'Pizza',
                        avaliacao: '4.5',
                        titulo: 'Pizza Caseira Básica',
                        subtitulo: 'Deliciosa pizza de massa fina e crocante de sabores tradicionais.',
                        custo_logistico: 0,
                        valor_total: 900.00,
                        valor_por_pessoa: 30
                    },
                    {
                        id: 4,
                        main_img_name: 'Rodizio Japones.png', 
                        tipo_de_comida: 'Japonesa',
                        avaliacao: '4.2',
                        titulo: 'Rodízio Japonês',
                        subtitulo: 'O tradicional rodízio japonês dos restaurantes no seu evento.',
                        custo_logistico: 100,
                        valor_total: 2400.00,
                        valor_por_pessoa: 80
                    },
                    {
                        id: 1,
                        main_img_name: 'Crepe Tradicional.png', 
                        tipo_de_comida: 'Crepe',
                        avaliacao: '3.9',
                        titulo: 'Crepe Tradicional',
                        subtitulo: 'Variados sabores de crepes doces e salgados para você escolher.',
                        custo_logistico: 0,
                        valor_total: 1350.00,
                        valor_por_pessoa: 100
                    },
                    {
                        id: 2,
                        main_img_name: 'Churrasco Premium.png', 
                        tipo_de_comida: 'Churrasco',
                        avaliacao: '4.9',
                        titulo: 'Churrasco Premium',
                        subtitulo: 'Cortes especiais como chorizo e tomahawk preparados na brasa.',
                        custo_logistico: 100,
                        valor_total: 3100.00,
                        valor_por_pessoa: 100
                    },
                    {
                        id: 3,
                        main_img_name: 'Pizza Caseira Basica.png', 
                        tipo_de_comida: 'Pizza',
                        avaliacao: '4.5',
                        titulo: 'Pizza Caseira Básica',
                        subtitulo: 'Deliciosa pizza de massa fina e crocante de sabores tradicionais.',
                        custo_logistico: 0,
                        valor_total: 900.00,
                        valor_por_pessoa: 30
                    },
                    {
                        id: 4,
                        main_img_name: 'Rodizio Japones.png', 
                        tipo_de_comida: 'Japonesa',
                        avaliacao: '4.2',
                        titulo: 'Rodízio Japonês',
                        subtitulo: 'O tradicional rodízio japonês dos restaurantes no seu evento.',
                        custo_logistico: 100,
                        valor_total: 2400.00,
                        valor_por_pessoa: 80
                    },
                    {
                        id: 1,
                        main_img_name: 'Crepe Tradicional.png', 
                        tipo_de_comida: 'Crepe',
                        avaliacao: '3.9',
                        titulo: 'Crepe Tradicional',
                        subtitulo: 'Variados sabores de crepes doces e salgados para você escolher.',
                        custo_logistico: 0,
                        valor_total: 1350.00,
                        valor_por_pessoa: 100
                    },
                    {
                        id: 2,
                        main_img_name: 'Churrasco Premium.png', 
                        tipo_de_comida: 'Churrasco',
                        avaliacao: '4.9',
                        titulo: 'Churrasco Premium',
                        subtitulo: 'Cortes especiais como chorizo e tomahawk preparados na brasa.',
                        custo_logistico: 100,
                        valor_total: 3100.00,
                        valor_por_pessoa: 100
                    }
                ]
            },
            
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

    renderButtonProximo (servico) {
        let id_inicial = this.state[servico].id_inicial_atual;
        let id_final = id_inicial + this.state.num_exibidos;
        if(id_final === this.state[servico].info_cardapios.length) {
            return (
                <button className = 'inativo proximo'><img src = {require('../../resources/icons/seta.png')} alt = 'próximo'/></button>
            );
        } else {
            return (
                <button className = 'ativo proximo' onClick = {this.handleFunctionCall(servico, 'proximo')}><img src = {require('../../resources/icons/seta.png')} alt = 'próximo'/></button>
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
                { this.renderButtonProximo(servico) }
            </div>
            
        );
    }

    render () {
        return (
            <section className = {'carrossel ' + this.state.servico}>
                <div className = 'titulo'>
                    <img src = {require('../../resources/icons/' + this.state[this.state.servico].info_titulo.img_name)} alt = {this.state[this.state.servico].info_titulo.img_alt}/>
                    <h2>{this.state[this.state.servico].info_titulo.titulo}</h2>
                </div>       
                { this.renderCarrossel(this.state.servico) }
            </section>
        );
    }
}

export default CarrosselDeCards;