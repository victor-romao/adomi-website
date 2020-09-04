import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import QueryString from 'query-string';
import BarraDeNavegacao from '../../components/BarraDeNavegacao/BarraDeNavegacao';

class Cardapios extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            servico: '',
            localizacao: '',
            data_e_hora: '',
            numero_convidados: '',
            busca_especifica: '',
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
            busca_especifica: params.busca_especifica,
            tipo_de_comida: params.tipo_de_comida,
        })
    }

    render() {
        return (
            <div>
                <BarraDeNavegacao 
                    busca = { true } 
                    campos = 'extenso' 
                    animacao_busca = { false }  
                    handleSearchInputChange = {this.props.handleSearchInputChange}
                    info_busca = { this.props.info_busca }
                    cesta = {this.props.cesta}
                    infos_cesta = {this.props.infos_cesta}
                    valores_cesta = {this.props.valores_cesta}
                    calcularValores = {this.props.calcularValores}
                    handleAdicaoEdicaoCesta = {this.props.handleAdicaoEdicaoCesta}
                    handleQuantidadeChangeCesta = {this.props.handleQuantidadeChangeCesta}
                    handleRemoverDaCesta = {this.props.handleRemoverDaCesta}
                    {...this.props}
                />
                <p>Filtro Cardapios:</p>
                <p>{this.state.servico}</p>
                <p>{this.state.localizacao}</p>
                <p>{this.state.data_e_hora}</p>
                <p>{this.state.numero_convidados}</p>
                <p>{this.state.busca_especifica}</p>
                <p>{this.state.tipo_de_comida}</p>
            </div>
        );
    }
}

export default Cardapios;