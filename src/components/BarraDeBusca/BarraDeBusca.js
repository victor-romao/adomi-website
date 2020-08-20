import React from 'react';
import './BarraDeBusca.css';
import SelecaoServico from '../../components/SelecaoServico/SelecaoServico';

class BarraDeBusca extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            servico: this.props.info_busca.servico,
            localizacao: this.props.info_busca.localizacao,
            data_e_hora: this.props.info_busca.data_e_hora,
            numero_convidados: this.props.info_busca.numero_convidados,
            busca_especifica: '',
            search_tool_ativa: false
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBuscar = this.handleBuscar.bind(this);
        this.handleServicoChange = this.handleServicoChange.bind(this);
        this.handleSearchToolStatusChange = this.handleSearchToolStatusChange.bind(this);
    }
    
    renderBuscaEspecifica(campos) {
        if(campos === 'extenso') {
            return (
            <div className = 'busca_especifica'>
                    <p>Busca algo específico?</p>
            </div>
            );
        }
    }

    handleInputChange(e) {
        let param = e.target.id;
        let paramValue = e.target.value;
        this.setState({
            [param]: paramValue
        })
    }

    async handleBuscar (e) {
        e.preventDefault();
        await this.props.handleSearchInputChange('localizacao', this.state.localizacao);
        await this.props.handleSearchInputChange('data_e_hora', this.state.data_e_hora);
        await this.props.handleSearchInputChange('numero_convidados', this.state.numero_convidados);
        console.log(this.props.info_busca);
        await this.handleSearchToolStatusChange();
        console.log(this.state.search_tool_ativa);
        this.props.history.push('/cardapios?servico=' + this.props.info_busca.servico + '&localizacao='+ this.props.info_busca.localizacao + '&data_e_hora=' + this.props.info_busca.data_e_hora + '&numero_convidados=' + this.props.info_busca.numero_convidados + '&busca_especifica=' + this.state.busca_especifica)
    }

    handleSearchToolStatusChange () {
        const newValue = !this.state.search_tool_ativa;
        this.setState({
            search_tool_ativa: newValue
        })
    }

    renderSearchBar(formato) {
        if(formato === 'reduzido') {
            if(this.state.search_tool_ativa) {
                return this.renderSearchBarTool();
            } else {
                return this.renderSearchBarReduzida();
            }
        } else {
            return this.renderSearchBarNormal();
        } 
    }

    renderSearchBarReduzida() {
        return (
            <form className = 'barra_de_busca_reduzida' onClick = { this.handleSearchToolStatusChange } >
                <div className = 'localizacao input'>
                    <p>Local</p>
                </div>
                <div className = 'data input'>
                    <p>Data</p>
                </div>
                <div className = 'numero_convidados input'>
                    <p>nº Convidados</p>
                </div>
                { this.renderBuscaEspecifica (this.props.campos) }
                <div className = 'buscar' >
                    <img src = {require('../../resources/icons/buscar_laranja.png')}/>
                </div>
            </form>
        );
    }

    renderSearchBarNormal() {
        return (
            <form>
                <div className = 'localizacao input'>
                    <label>LOCALIZAÇÃO</label>
                    <input type = 'text' placeholder = 'Qual a cidade/endereço?' name = 'localizacao' id = 'localizacao' defaultValue = { this.props.info_busca.localizacao } onChange = { this.handleInputChange }/>
                </div>
                <div className = 'data input'>
                    <label>DATA</label>
                    <input type = 'datetime-local' placeholder = 'Qual a data do evento?' name = 'data_e_hora' id = 'data_e_hora' defaultValue = { this.props.info_busca.data_e_hora } onChange = { this.handleInputChange }/>
                </div>
                <div className = 'numero_convidados input'>
                    <label>NÚMERO DE CONVIDADOS</label>
                    <input type = 'number' placeholder = 'Para quantas pessoas?' name = 'numero_convidados' id = 'numero_convidados' defaultValue = { this.props.info_busca.numero_convidados } onChange = { this.handleInputChange }/>
                </div>
                <div className = 'buscar' onClick = { this.handleBuscar } >
                    <img src = {require('../../resources/icons/buscar.png')}/>
                    <button>Buscar</button>
                </div>
            </form>
        );
    }

    async handleServicoChange (servico) {
        await this.props.handleSearchInputChange('servico', servico);
        this.setState({
            servico: this.props.info_busca.servico
        })
    }

    renderSearchBarTool() {
        return (
            <div id = 'search_tool_ativa' >
                <div className = 'fundo' onClick = { this.handleSearchToolStatusChange }>
                </div>
                <div className = 'search_tool' >
                    <SelecaoServico handleServicoChange = { this.handleServicoChange } handleSearchInputChange = { this.handleSearchInputChange } info_busca = { this.props.info_busca }/>
                    { this.renderSearchBarNormal() }
                </div>
            </div>
        );
    }
    
    render () {
        return (
            this.renderSearchBar(this.props.formato)
        );
    }
}

export default BarraDeBusca;