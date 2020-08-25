import React from 'react';
import './BotaoAlteracaoQuantidade.css';

class BotaoAlteracaoQuantidade extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numero_convidados: this.props.info_busca.numero_convidados === '' ? 30 : this.props.info_busca.numero_convidados
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubtrair = this. handleSubtrair.bind(this);
        this.handleAdicionar = this.handleAdicionar.bind(this);
    }

    handleInputChange(e) {
        const newValue = e.target.value;
        this.setState({
            numero_convidados: newValue
        });
        this.props.handleInputChange('numero_convidados', newValue);
    }

    handleSubtrair (e) {
        e.preventDefault();
        const newValue = Number(this.state.numero_convidados) - 1;
        this.setState({
            numero_convidados: newValue
        });
        this.props.handleInputChange('numero_convidados', newValue);
    }

    handleAdicionar (e) {
        e.preventDefault();
        const newValue = Number(this.state.numero_convidados) + 1;
        this.setState({
            numero_convidados: newValue
        });
        this.props.handleInputChange('numero_convidados', newValue);
        console.log(newValue);
    }

    render() {
        return (
            <div className = 'alteracao_quantidade'>
                <button onClick = { this.handleSubtrair }>-</button>
                <input type = 'text' name = 'numero_convidados' id = 'numero_convidados' value = { this.state.numero_convidados } onChange = { this.handleInputChange }/>
                <button onClick = { this.handleAdicionar }>+</button>
            </div>
        );
    }
}

export default BotaoAlteracaoQuantidade;