import React from 'react';
import './BarraDeBusca.css';

class BarraDeBusca extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            localizacao: '',
            data_e_hora: '',
            numero_convidados: ''
        }
        this.handleChangeLocalizacao = this.handleChangeLocalizacao.bind(this);
        this.handleChangeData = this.handleChangeData.bind(this);
        this.handleChangeConvidados = this.handleChangeConvidados.bind(this);
        this.handleBuscar = this.handleBuscar.bind(this);
    }
    
    renderBuscaEspecifica(campos) {
        if(campos === 'extenso') {
            return (
            <div className = 'busca_especifica'>
                    <input type = 'text' placeholder = 'Busca algo específico?' name = 'busca_especifica' id = 'busca_especifica'/>
            </div>
            );
        }
    }

    handleChangeLocalizacao (e) {
        let new_value = e.target.value
        this.setState ({
            localizacao: new_value
        });
    }

    handleChangeData (e) {
        let new_value = e.target.value
        this.setState ({
            data_e_hora: new_value
        });
    }

    handleChangeConvidados (e) {
        let new_value = e.target.value
        this.setState ({
            numero_convidados: new_value
        });
    }

    handleBuscar () {
        console.log(this.props.servico);
        console.log(this.state.localizacao);
        console.log(this.state.data_e_hora);
        console.log(this.state.numero_convidados);
    }

    renderSearchBar(formato) {
        if(formato === 'reduzido') {
            return (
                <form className = 'barra_de_busca_reduzida'>
                    <div className = 'localizacao input'>
                        <input type = 'text' placeholder = 'Local' name = 'localização' id = 'localizacao' onChange = {this.handleChangeLocalizacao} />
                    </div>
                    <div className = 'data input'>
                        <input type = 'datetime-local' placeholder = 'Data' name = 'data_e_hora' id = 'data_e_hora' onChange = {this.handleChangeData} />
                    </div>
                    <div className = 'numero_convidados input'>
                        <input type = 'number' placeholder = 'nº Convidados' name = 'numero_convidados' id = 'numero_convidados' onChange = {this.handleChangeConvidados} />
                    </div>
                    { this.renderBuscaEspecifica (this.props.campos) }
                    <div className = 'buscar' onClick = { this.handleBuscar }>
                        <img src = {require('../../resources/icons/buscar_laranja.png')}/>
                    </div>
                </form>
            );
        } else {
            return (
                <form>
                    <div className = 'localizacao input'>
                        <label>LOCALIZAÇÃO</label>
                        <input type = 'text' placeholder = 'Qual a cidade/endereço?' name = 'localizacao' id = 'localizacao' onChange = { this.handleChangeLocalizacao }/>
                    </div>
                    <div className = 'data input'>
                        <label>DATA</label>
                        <input type = 'datetime-local' placeholder = 'Qual a data do evento?' name = 'data_e_hora' id = 'data_e_hora' onChange = { this.handleChangeData }/>
                    </div>
                    <div className = 'numero_convidados input'>
                        <label>NÚMERO DE CONVIDADOS</label>
                        <input type = 'number' placeholder = 'Para quantas pessoas?' name = 'numero_convidados' id = 'numero_convidados' onChange = { this.handleChangeConvidados }/>
                    </div>
                    <div className = 'buscar' onClick = { this.handleBuscar } >
                        <img src = {require('../../resources/icons/buscar.png')}/>
                        <button>Buscar</button>
                    </div>
                </form>
            );
        }
    }
    
    render () {
        return (
            this.renderSearchBar(this.props.formato)
        );
    }
}

export default BarraDeBusca;