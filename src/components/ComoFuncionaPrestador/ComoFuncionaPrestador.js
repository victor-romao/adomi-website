import React from 'react';
import { Link } from 'react-router-dom';
import './ComoFuncionaPrestador.css';

class ComoFuncionaPrestador extends React.Component {
    render() {
        return (
            <div className = 'como_funciona_prestador'>
                <h2>Como a Adomi Funciona?</h2>
                <div className = 'container'>
                    <div className = 'informacao'>
                        <img src = { require('../../resources/icons/cadastro.png') } />
                        <h6>Cadastre seus produtos em nossa plataforma</h6>
                        <p>Ganhe visibilidade expondo seus serviços de forma simples e organizada em um só lugar.</p>
                    </div>
                    <div className = 'informacao'>
                        <img src = { require('../../resources/icons/negocio_online.png') } />
                        <h6>Os clientes acessam, tiram dúvidas e contratam</h6>
                        <p>Consiga clientes de forma fácil, sem gastar tempo ou dinheiro com marketing.</p>
                    </div>
                    <div className = 'informacao'>
                        <img src = { require('../../resources/icons/receber_pagamento.png') } />
                        <h6>Realize o evento e receba sem complicações</h6>
                        <p>Realize o evento tranquilo. Nós garantimos a realização do seu pagamento.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ComoFuncionaPrestador;