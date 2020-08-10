import React from 'react';
import './LinksRapidosPaginaServico.css';
import { Link } from 'react-router-dom';

class LinksRapidosPaginaServico extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            servico: this.props.servico,
            info_links: {
                servico_presencial: [
                    {
                        tipo_comida: '',
                        local: ''
                    }
                ]
            }
        }
    }

    render () {
        return (
            <div className = 'links_rapidos_pagina_servico'>
                hi
            </div>
        );
    }
}
export default LinksRapidosPaginaServico;