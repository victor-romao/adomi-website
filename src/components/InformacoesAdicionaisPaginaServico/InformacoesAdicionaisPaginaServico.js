import React from 'react';
import './InformacoesAdicionaisPaginaServico.css';
import { Link } from 'react-router-dom';

class InformacoesAdicionaisPaginaServico extends React.Component {
    constructor(props) {
        super (props);
    }
    render () {
        return (
            <div className = 'informacoes_adicionais_pagina_servico'>
                <div className = 'container'>
                    <div className = 'informacao'>
                        <img src = { require('../../resources/icons/atendimento.png') } />
                        <h6>Ficou com alguma dúvida durante a navegação?</h6>
                        <p>Fale diretamente com o prestador através do nosso chat ou acesse nossa <br/><Link to = '/ajuda'>central de ajuda</Link>.</p>
                    </div>
                    <div className = 'informacao'>
                        <img src = { require('../../resources/icons/confirmacao_evento.png') } />
                        <h6>Após o evento, confirme que o serviço foi prestado</h6>
                        <p>Para a sua garantia, o repasse do valor ao prestador só acontece após a confirmação de  realização do evento.</p>
                    </div>
                    <div className = 'informacao'>
                        <img src = { require('../../resources/icons/avaliacao.png') } />
                        <h6>Avalie os serviços e ajude a comunidade</h6>
                        <p>Avalie os serviços prestados e ajude outras pessoas na hora da contratação para um momento tão especial.</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default InformacoesAdicionaisPaginaServico;