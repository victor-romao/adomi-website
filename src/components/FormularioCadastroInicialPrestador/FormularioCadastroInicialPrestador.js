import React from 'react';
import { Link } from 'react-router-dom';
import './FormularioCadastroInicialPrestador.css';

class FormularioCadastroInicialPrestador extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            informacoes_prestador: {
                nome: '',
                sobrenome: '',
                email: '',
                celular: ''
            }
        }
        this.handleChange = this.handleChange.bind(this);
    }

    async handleChange(e) {
        let param = e.target.id;
        let paramValue = e.target.value;
        await this.setState(prevState => ({
            informacoes_prestador: {
                ...prevState.informacoes_prestador,
                [param]: paramValue
            }
        }));
        console.log(this.state.informacoes_prestador);
    }
    
    render() {
        return (
            <div className = 'formulario_inicial_prestador'>
                <div className = 'container'>
                    <h2>Cadastre seu Negócio</h2>
                    <div className = 'input'>
                            <p className = 'label'>Nome do Responsável Legal</p>
                            <input type = 'text' placeholder = 'Nome' name = 'nome' id = 'nome' onChange = {this.handleChange} />
                            <input type = 'text' placeholder = 'Sobrenome' name = 'sobrenome' id = 'sobrenome' onChange = {this.handleChange} />
                            <p className = 'descricao'>Preencha com seus dados se atuar como pessoa física. Se for pessoa jurídica, preencha com os dados do responsável legal pela empresa.</p>
                    </div>
                    <div className = 'input'>
                            <p className = 'label'>E-mail</p>
                            <input type = 'text' placeholder = 'E-mail' name = 'email' id = 'email' onChange = {this.handleChange} />
                            <p className = 'descricao'>Usaremos esse e-mail para entrar em contato com você.</p>
                    </div>
                    <div className = 'input'>
                            <p className = 'label'>Celular</p>
                            <input type = 'text' placeholder = 'Celular' name = 'celular' id = 'celular' onChange = {this.handleChange} />
                            <p className = 'descricao'>Nossa equipe e clientes que contratarem seus serviços poderão entrar em contato através desse número.</p>
                    </div>
                    <button>Iniciar seu Cadastro</button>
                </div>
            </div>
        );
    }
}

export default FormularioCadastroInicialPrestador;