import React from 'react';
import './BarraDeBusca.css';

class BarraDeBusca extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            localização: '',
            data_e_hora: '',
            número_convidados: ''
        }
        this.handleChangeLocalização = this.handleChangeLocalização.bind(this);
        this.handleChangeData = this.handleChangeData.bind(this);
        this.handleChangeConvidados = this.handleChangeConvidados.bind(this);
        this.handleBuscar = this.handleBuscar.bind(this);
    }
    
    renderBuscaEspecífica(campos) {
        if(campos === 'extenso') {
            return (
            <div className = 'busca_específica'>
                    <input type = 'text' placeholder = 'Busca algo específico?' name = 'busca_específica' id = 'busca_específica'/>
            </div>
            );
        }
    }

    handleChangeLocalização (e) {
        let new_value = e.target.value
        this.setState ({
            localização: new_value
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
            número_convidados: new_value
        });
    }

    handleBuscar () {
        console.log(this.props.serviço);
        console.log(this.state.localização);
        console.log(this.state.data_e_hora);
        console.log(this.state.número_convidados);
    }

    renderSearchBar(formato) {
        if(formato === 'reduzido') {
            return (
                <form className = 'barra_de_busca_reduzida'>
                    <div className = 'localização input'>
                        <input type = 'text' placeholder = 'Local' name = 'localização' id = 'localização' onChange = {this.handleChangeLocalização} />
                    </div>
                    <div className = 'data input'>
                        <input type = 'datetime-local' placeholder = 'Data' name = 'data_e_hora' id = 'data_e_hora' onChange = {this.handleChangeData} />
                    </div>
                    <div className = 'número_convidados input'>
                        <input type = 'number' placeholder = 'nº Convidados' name = 'número_convidados' id = 'número_convidados' onChange = {this.handleChangeConvidados} />
                    </div>
                    { this.renderBuscaEspecífica (this.props.campos) }
                    <div className = 'buscar' onClick = { this.handleBuscar }>
                        <img src = {require('../../mídia/ícones/buscar_laranja.png')}/>
                    </div>
                </form>
            );
        } else {
            return (
                <form>
                    <div className = 'localização input'>
                        <label>LOCALIZAÇÃO</label>
                        <input type = 'text' placeholder = 'Qual a cidade/endereço?' name = 'localização' id = 'localização' onChange = { this.handleChangeLocalização }/>
                    </div>
                    <div className = 'data input'>
                        <label>DATA</label>
                        <input type = 'datetime-local' placeholder = 'Qual a data do evento?' name = 'data_e_hora' id = 'data_e_hora' onChange = { this.handleChangeData }/>
                    </div>
                    <div className = 'número_convidados input'>
                        <label>NÚMERO DE CONVIDADOS</label>
                        <input type = 'number' placeholder = 'Para quantas pessoas?' name = 'número_convidados' id = 'número_convidados' onChange = { this.handleChangeConvidados }/>
                    </div>
                    <div className = 'buscar' onClick = { this.handleBuscar } >
                        <img src = {require('../../mídia/ícones/buscar.png')}/>
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