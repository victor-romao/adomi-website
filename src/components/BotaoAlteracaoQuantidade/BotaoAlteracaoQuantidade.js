import React from 'react';
import './BotaoAlteracaoQuantidade.css';

class BotaoAlteracaoQuantidade extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quantidade: this.props.quantidade === '' ? 30 : this.props.quantidade
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubtrair = this. handleSubtrair.bind(this);
        this.handleAdicionar = this.handleAdicionar.bind(this);
    }

    componentWillUpdate(nextProps) {
        if(this.props.quantidade !== nextProps.quantidade) {
            this.setState({
                quantidade: nextProps.quantidade
            })
        }
    }

    handleInputChange(e) {
        const newValue = e.target.value;
        this.setState({
            quantidade: newValue
        });
        this.props.handleInputChange('quantidade', newValue);
    }

    handleSubtrair (e) {
        e.preventDefault();
        const newValue = Number(this.state.quantidade) - 1;
        this.setState({
            quantidade: newValue
        });
        this.props.handleInputChange('quantidade', newValue);
    }

    handleAdicionar (e) {
        e.preventDefault();
        const newValue = Number(this.state.quantidade) + 1;
        this.setState({
            quantidade: newValue
        });
        this.props.handleInputChange('quantidade', newValue);
    }

    render() {
        return (
            <div className = 'alteracao_quantidade'>
                <button onClick = { this.handleSubtrair }>-</button>
                <input type = 'text' name = 'quantidade' id = 'quantidade' value = { this.state.quantidade } onChange = { this.handleInputChange }/>
                <button onClick = { this.handleAdicionar }>+</button>
            </div>
        );
    }
}

export default BotaoAlteracaoQuantidade;