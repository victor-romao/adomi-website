import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

class Erro extends React.Component {
    render() {
        return (
            <div>
                Erro: Parece que a página buscada não existe!
            </div>
        );
    }
}

export default Erro;