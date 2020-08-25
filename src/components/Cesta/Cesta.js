import React from 'react';
import { Link } from 'react-router-dom';
import './Cesta.css';

class Cesta extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prestador: {
                cardapio: {

                },
                itens: []
            }
        }
    }

    render() {
        return (
            <div className = 'cesta' >
                <img className = 'cesta_vazia' src = { require('../../resources/logo/adomi_simbolo_triste.png') } alt = 'Carinha triste' />
                <p className = 'cesta_vazia'>Parece que você ainda não tem itens na cesta do seu evento</p>
            </div>
        );
    }
}

export default Cesta;