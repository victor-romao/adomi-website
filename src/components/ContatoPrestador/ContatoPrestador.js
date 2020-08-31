import React from 'react';
import { Link } from 'react-router-dom';
import './ContatoPrestador.css';

class ContatoPrestador extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            informacoes_prestador: {
                nome: '',
                sobrenome: '',
                email: '',
                celular: '',
                mensagem: ''
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
    }
    
    render() {
        return (
            <div className = 'mensagem_contato_prestador'>
                <div className = 'fundo' onClick = {this.props.handleContato}>
                </div>
                <div className = 'conteudo'>
                    <div className = 'container topo'>
                        <h2>Entre em Contato</h2>
                        <img className = 'fechar' src = {require('../../resources/icons/fechar.png')} alt = 'fechar' onClick = {this.props.handleContato}/>
                    </div>
                    <div className = 'container meio'>
                        <div className = 'input'>
                                <p className = 'label'>Nome do Responsável</p>
                                <input type = 'text' placeholder = 'Nome' name = 'nome' id = 'nome' onChange = {this.handleChange} />
                                <input type = 'text' placeholder = 'Sobrenome' name = 'sobrenome' id = 'sobrenome' onChange = {this.handleChange} />
                        </div>
                        <div className = 'input'>
                                <p className = 'label'>E-mail</p>
                                <input type = 'text' placeholder = 'E-mail' name = 'email' id = 'email' onChange = {this.handleChange} />
                        </div>
                        <div className = 'input'>
                                <p className = 'label'>Celular</p>
                                <input type = 'text' placeholder = 'Celular' name = 'celular' id = 'celular' onChange = {this.handleChange} />
                        </div>
                        <div className = 'input'>
                                <p className = 'label'>Escreva sua Mensagem</p>
                                <input className = 'mensagem' type = 'text' placeholder = 'Mensagem' name = 'mesnagem' id = 'mesnagem' onChange = {this.handleChange} />
                        </div>
                    </div>
                    <div className = 'container baixo'>
                        <button>Enviar Mensagem</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContatoPrestador;