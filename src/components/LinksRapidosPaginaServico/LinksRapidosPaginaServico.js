import React from 'react';
import './LinksRapidosPaginaServico.css';
import LinkRapido from '../../components/LinkRapido/LinkRapido';

class LinksRapidosPaginaServico extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            servico: this.props.servico,
            servico_presencial: {
                titulo: 'Serviço Presencial',
                info_links: [
                        {
                            tipo_de_comida: 'Churrasco',
                            localizacao: 'São Paulo'
                        },
                        {
                            tipo_de_comida: 'Comida de Boteco',
                            localizacao: 'São Paulo'
                        },
                        {
                            tipo_de_comida: 'Crepe',
                            localizacao: 'São Paulo'
                        },
                        {
                            tipo_de_comida: 'Feijoada',
                            localizacao: 'São Paulo'
                        },
                        {
                            tipo_de_comida: 'Finger Food',
                            localizacao: 'São Paulo'
                        },
                        {
                            tipo_de_comida: 'Hamburguer',
                            localizacao: 'São Paulo'
                        },
                        {
                            tipo_de_comida: 'Italiana',
                            localizacao: 'São Paulo'
                        },
                        {
                            tipo_de_comida: 'Japonesa',
                            localizacao: 'São Paulo'
                        },
                        {
                            tipo_de_comida: 'Lanches',
                            localizacao: 'São Paulo'
                        },
                        {
                            tipo_de_comida: 'Mexicana',
                            localizacao: 'São Paulo'
                        },
                        {
                            tipo_de_comida: 'Pizza',
                            localizacao: 'São Paulo'
                        },
                        {
                            tipo_de_comida: 'Salgadinhos',
                            localizacao: 'São Paulo'
                        }
                ]
            },
            entrega_no_evento: {
                titulo: 'Entrega no Evento',
                info_links: [
                        {
                            tipo_de_comida: 'Bolos e Doces',
                            localizacao: 'São Paulo'
                        },
                        {
                            tipo_de_comida: 'Feijoada',
                            localizacao: 'São Paulo'
                        },
                        {
                            tipo_de_comida: 'Japonesa',
                            localizacao: 'São Paulo'
                        },
                        {
                            tipo_de_comida: 'Lanches',
                            localizacao: 'São Paulo'
                        },
                        {
                            tipo_de_comida: 'Italiana',
                            localizacao: 'São Paulo'
                        },
                        {
                            tipo_de_comida: 'Salgadinhos',
                            localizacao: 'São Paulo'
                        }
                ]
            },
            solucoes_covid: {
                titulo: 'Soluções Especiais Covid',
                info_links: [
                    {
                        tipo_de_comida: 'Bolos e Doces',
                        localizacao: 'São Paulo'
                    },
                    {
                        tipo_de_comida: 'Comida de Boteco',
                        localizacao: 'São Paulo'
                    },
                    {
                        tipo_de_comida: 'Japonesa',
                        localizacao: 'São Paulo'
                    },
                    {
                        tipo_de_comida: 'Lanches',
                        localizacao: 'São Paulo'
                    },
                    {
                        tipo_de_comida: 'Italiana',
                        localizacao: 'São Paulo'
                    },
                    {
                        tipo_de_comida: 'Salgadinhos',
                        localizacao: 'São Paulo'
                    }
                ]
            }
        }
    }

    render () {
        return (
            <section className = 'links_rapidos_pagina_servico'>
                <div className = 'titulo'>
                    <h2>Tipos de Comida mais buscados para {this.state[this.state.servico].titulo}</h2>
                </div>
                <div className = "links_rapidos">
                    { this.state[this.state.servico].info_links.map(link => (
                        <div className = 'link_rapido'>
                            <LinkRapido link = {link} servico = {this.state.servico}/>
                        </div>
                    )) }
                </div>
            </section>
        );
    }
}
export default LinksRapidosPaginaServico;