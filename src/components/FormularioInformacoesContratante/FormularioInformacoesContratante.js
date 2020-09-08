import React from 'react';
import { Link } from 'react-router-dom';
import './FormularioInformacoesContratante.css';

class FormularioInformacoesContratante extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            informacoes_contratante: {
                nome: '',
                sobrenome: '',
                email: '',
                celular: '',
                cpf: '',
                aceite_termos: false
            }
        }
        this.handleChange = this.handleChange.bind(this);
    }

    async handleChange(e) {
        let param = e.target.id;
        let paramValue = '';
        if(e.target.type === 'text') {
            paramValue = e.target.value;
        } else {
            paramValue = e.target.checked;
        }
        await this.setState(prevState => ({
            informacoes_contratante: {
                ...prevState.informacoes_contratante,
                [param]: paramValue
            }
        }));
        console.log(this.state);
    }
    
    render() {
        return (
            <div className = 'formulario_informacoes_contratante'>
                <h2>Seus Dados</h2>
                <div className = 'input'>
                    <input type = 'text' placeholder = 'Nome' name = 'nome' id = 'nome' onChange = {this.handleChange} />
                    <input type = 'text' placeholder = 'Sobrenome' name = 'sobrenome' id = 'sobrenome' onChange = {this.handleChange} />
                    <p className = 'descricao'>Preencha como consta no seu documento de identificação.</p>
                </div>
                <div className = 'input'>
                    <input type = 'text' placeholder = 'E-mail' name = 'email' id = 'email' onChange = {this.handleChange} />
                    <p className = 'descricao'>Responderemos sua solicitação esse e-mail.</p>
                </div>
                <div className = 'input'>
                    <input type = 'text' placeholder = 'Celular' name = 'celular' id = 'celular' onChange = {this.handleChange} />
                    <p className = 'descricao'>Poderemos ligar ou enviar mensagens via WhatsApp.</p>
                </div>
                <div className = 'input'>
                    <input type = 'text' placeholder = 'CPF' name = 'cpf' id = 'cpf' onChange = {this.handleChange} />
                    <p className = 'descricao'>O número do CPF poderá ser utilizado para fins contratuais.</p>
                </div>
                <div className = 'aceite_termos'>
                    <label className = 'checkbox'>
                        <input 
                            id = 'aceite_termos' 
                            type = 'checkbox' 
                            name = 'aceite_termos' 
                            checked = {this.state.informacoes_contratante.aceite_termos}
                            onChange = {this.handleChange}
                        />
                        <span className= {'aceite_termos_custom'}></span>
                    </label>
                    <p>Aceito os <Link to = '/termos_e_privacidade'>Termos de Uso e a Política de Privacidade</Link></p>
                </div>
                <div className = 'enviar_pedido'>
                    <button>Enviar Pedido</button>
                    <p>Daremos continuidade ao seu pedido verificando a disponibilidade do prestador e enviando as informações para realização do pagamento.</p>
                </div>
            </div>
        );
    }
}

export default FormularioInformacoesContratante;