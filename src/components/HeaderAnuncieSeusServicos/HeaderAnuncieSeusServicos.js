import React from 'react';
import './HeaderAnuncieSeusServicos.css';
import { Link } from 'react-router-dom';
import FormularioCadastroInicialPrestador from '../../components/FormularioCadastroInicialPrestador/FormularioCadastroInicialPrestador';

class HeaderAnuncieSeusServicos extends React.Component {
    constructor(props) {
        super (props);
    }

    render () {
        return (
            <header className = 'anuncie_seus_servicos'>
                <div className = 'mensagem_central'>
                    <h1>Anuncie sem pagar nada</h1>
                    <p>Cobrança de uma taxa percentual apenas no ato da contratação, sem responsabilidade de arcar com nenhuma despesa em caso de cancelamento.</p>
                    
                </div>
                <FormularioCadastroInicialPrestador />
            </header>
        );
    }
}
export default HeaderAnuncieSeusServicos;