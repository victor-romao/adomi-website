import React from 'react';
import './LinksRapidos.css';
import LinkRapido from '../LinkRapido/LinkRapido';
import { waitForDomChange } from '@testing-library/react';

class LinksRapidos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tipo_de_servico: {
                servico_presencial: {
                    info_links: [
                        {
                            tipo_de_comida: 'Churrasco',
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
                            tipo_de_comida: 'Japonesa',
                            localizacao: 'São Paulo'
                        }, 
                        {
                            tipo_de_comida: 'Italiana',
                            localizacao: 'São Paulo'
                        }
                    ]
                },
                entrega_no_evento: {
                    info_links: [
                        {
                            tipo_de_comida: 'Salgadinhos',
                            localizacao: 'São Paulo' 
                        },
                        {
                            tipo_de_comida: 'Bolos e Doces', 
                            localizacao: 'São Paulo'
                        },
                        {
                            tipo_de_comida: 'Lanches', 
                            localizacao: 'São Paulo'
                        },
                        {
                            tipo_de_comida: 'Pizza', 
                            localizacao: 'São Paulo'
                        },
                        {
                            tipo_de_comida: 'Japonesa', 
                            localizacao: 'São Paulo'
                        },
                        {
                            tipo_de_comida: 'Comida de Boteco',
                            localizacao: 'São Paulo'
                        }
                    ]
                },
                solucoes_covid: {
                    info_links: [
                        {
                            tipo_de_comida: 'Salgadinhos', 
                            localizacao: 'São Paulo'
                        },
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
                            tipo_de_comida: 'Mexicana',
                            localizacao: 'São Paulo'
                        }
                    ]
                }
            }
        };
    }
    links_rapidos_por_tipo_de_servico(servico) {
        return this.state.tipo_de_servico[servico].info_links.map (link => (
            <LinkRapido servico = {servico} link = {link} />
        ));
    }

    render () {
        return (
            <section className = 'links_rapidos'>
                <h2>Combinações de cardápio e tipo de serviço mais buscados</h2>
                <div className = 'links_por_servico'>
                    <div className = 'servico_presencial container'>
                        <div className = 'titulo'>
                            <img src = {require('../../resources/icons/cozinheiro_cinza.png')} alt = 'cozinheiro'/>
                            <h3>Serviço Presencial</h3>
                        </div>
                        { this.links_rapidos_por_tipo_de_servico('servico_presencial') }
                    </div>
                    <div className = 'entrega_no_evento container'>
                        <div className = 'titulo'>
                            <img src = {require('../../resources/icons/entrega_cinza.png')} alt = 'entrega'/>
                            <h3>Entrega no Evento</h3>
                        </div>
                        { this.links_rapidos_por_tipo_de_servico('entrega_no_evento') }
                    </div>
                    <div className = 'solucoes_covid container'>
                        <div className = 'titulo'>
                            <img src = {require('../../resources/icons/ideia_cinza.png')} alt = 'ideia'/>
                            <h3>Soluções Especiais Covid</h3>
                        </div>
                        { this.links_rapidos_por_tipo_de_servico('solucoes_covid') }
                    </div>
                </div>
            </section>
        );
    }
}
export default LinksRapidos;