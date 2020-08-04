import React from 'react';
import './LinksRapidos.css';
import LinkRapido from '../LinkRapido/LinkRapido';
import { waitForDomChange } from '@testing-library/react';

class LinksRapidos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tipo_de_servico: {
                servico_presencial: ['Churrasco', 'Crepe', 'Feijoada', 'Finger Food', 'Japonesa', 'Italiana'],
                entrega_no_evento: ['Salgadinhos', 'Bolos e Doces', 'Lanches', 'Pizza', 'Japonesa', 'Comida de Boteco'],
                solucoes_covid: ['Salgadinhos', 'Bolos e Doces', 'Comida de Boteco', 'Japonesa', 'Mexicana']
            }
        };
    }
    links_rapidos_por_tipo_de_servico(servico) {
        return this.state.tipo_de_servico[servico].map (tipo_de_comida => (
            <LinkRapido tipo_de_comida = {tipo_de_comida} />
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