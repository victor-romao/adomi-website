import React from 'react';
import './LinksRápidos.css';
import LinkRápido from '../LinkRápido/LinkRápido';
import { waitForDomChange } from '@testing-library/react';

class LinksRápidos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tipo_de_serviço: {
                serviço_presencial: ['Churrasco', 'Crepe', 'Feijoada', 'Finger Food', 'Japonesa', 'Italiana'],
                entrega_no_evento: ['Salgadinhos', 'Bolos e Doces', 'Lanches', 'Pizza', 'Japonesa', 'Comida de Boteco'],
                soluções_covid: ['Salgadinhos', 'Bolos e Doces', 'Comida de Boteco', 'Japonesa', 'Mexicana']
            }
        };
    }
    links_rápidos_por_tipo_de_serviço(serviço) {
        return this.state.tipo_de_serviço[serviço].map (tipo_de_comida => (
            <LinkRápido tipo_de_comida = {tipo_de_comida} />
        ));
    }

    render () {
        return (
            <section className = 'links_rápidos'>
                <h2>Combinações de cardápio e tipo de serviço mais buscados</h2>
                <div className = 'links_por_serviço'>
                    <div className = 'serviço_presencial container'>
                        <div className = 'título'>
                            <img src = {require('../../mídia/ícones/cozinheiro_cinza.png')} alt = 'cozinheiro'/>
                            <h3>Serviço Presencial</h3>
                        </div>
                        { this.links_rápidos_por_tipo_de_serviço('serviço_presencial') }
                    </div>
                    <div className = 'entrega_no_evento container'>
                        <div className = 'título'>
                            <img src = {require('../../mídia/ícones/entrega_cinza.png')} alt = 'entrega'/>
                            <h3>Entrega no Evento</h3>
                        </div>
                        { this.links_rápidos_por_tipo_de_serviço('entrega_no_evento') }
                    </div>
                    <div className = 'soluções_covid container'>
                        <div className = 'título'>
                            <img src = {require('../../mídia/ícones/ideia_cinza.png')} alt = 'ideia'/>
                            <h3>Soluções Especiais Covid</h3>
                        </div>
                        { this.links_rápidos_por_tipo_de_serviço('soluções_covid') }
                    </div>
                </div>
            </section>
        );
    }
}
export default LinksRápidos;