import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import QueryString from 'query-string';

class Cardapios extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            servico: '',
            localizacao: '',
            data_e_hora: '',
            numero_convidados: '',
            tipo_de_comida: '',
        }
        this.componentWillMount = this.componentWillMount.bind(this);
    }

    componentWillMount () {
        let params = QueryString.parse(this.props.location.search);
        this.setState({
            servico: params.servico,
            localizacao: params.localizacao,
            data_e_hora: params.data_e_hora,
            numero_convidados: params.numero_convidados,
            tipo_de_comida: params.tipo_de_comida,
        })
    }

    render() {
        return (
            <div>
                <p>Filtro Cardapios:</p>
                <p>{this.state.servico}</p>
                <p>{this.state.localizacao}</p>
                <p>{this.state.data_e_hora}</p>
                <p>{this.state.numero_convidados}</p>
                <p>{this.state.tipo_de_comida}</p>
            </div>
        );
    }
}

export default Cardapios;