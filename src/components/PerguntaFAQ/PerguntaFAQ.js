import React from 'react';
import { Link } from 'react-router-dom';
import './PerguntaFAQ.css';

class PerguntaFAQ extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            resposta: false
        };
        this.handleResposta = this.handleResposta.bind(this);
    }

    handleResposta() {
        const newValue = !this.state.resposta
        this.setState({
            resposta: newValue
        })
    }

    renderResposta() {
        if(this.state.resposta) {
            return (
                <div className = 'resposta'>
                    {this.props.pergunta_e_resposta.resposta.map(paragrafo => (
                        <p>{paragrafo}</p>
                    ))}
                </div>
            );
        }
    }
    
    render() {
        return (
            <div className = 'pergunta_e_resposta'>
                <div className = 'pergunta'>
                    <h6 className = 'bold'>{this.props.pergunta_e_resposta.pergunta}</h6>
                    <img className = {''+this.state.resposta+''} onClick = {this.handleResposta} src = { require('../../resources/icons/seta_laranja.png') } alt = 'seta'/>
                </div>
                { this.renderResposta() }
            </div>
        );
    }
}

export default PerguntaFAQ;