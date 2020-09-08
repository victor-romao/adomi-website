import React from 'react';
import './ExibirDataELocal.css';
import PopUpEdicaoInfoBusca from '../PopUpEdicaoInfoBusca/PopUpEdicaoInfoBusca';

class ExibirDataELocal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status_pop_up_edicao_busca: {
                data_e_hora: false,
                localizacao: false
            }
        }
        this.handleStatusPopUpEdicaoBuscaCall = this.handleStatusPopUpEdicaoBuscaCall.bind(this);
    }

    handleStatusPopUpEdicaoBuscaCall(info_edicao) {
        const component = this;
        return function () {
            component.setState(prevState => ({
                status_pop_up_edicao_busca: {
                    ...prevState.status_pop_up_edicao_busca,
                    [info_edicao]: !component.state.status_pop_up_edicao_busca[info_edicao]
                }
            }));
        }
    }

    renderInfoBusca(info) {
        if(info === '') {
            return <p className = 'centro'>-</p>;
        } else {
            return <p>{info}</p>;
        }
    }

    renderComplemento() {
        if(this.props.complemento) {
            return <input type = 'text' placeholder = 'Complemento' name = 'complemento' id = 'complemento' onChange = {this.handleChange} />;
        }
    }

    renderPopUpEdicaoBusca(info_edicao) {
        if(this.state.status_pop_up_edicao_busca[info_edicao]) {
            return (
                <PopUpEdicaoInfoBusca 
                    info_busca = {this.props.info_busca}
                    handleSearchInputChange = {this.props.handleSearchInputChange}
                    info_edicao = {info_edicao}
                    handleStatusPopUpEdicaoBusca = {this.handleStatusPopUpEdicaoBuscaCall(info_edicao)}
                />
            );
        }
    }
    
    render() {
        return (
            <div className = 'exibir_data_e_local'>
                <div className = 'informacao'>
                    <h6 className = 'bold cinza_escuro'>Local do Evento</h6>
                    <div className = 'linha'>
                        <div className = 'esquerda'>
                            {this.renderInfoBusca(this.props.info_busca.localizacao)}
                            <button className = 'editar_button laranja' onClick = {this.handleStatusPopUpEdicaoBuscaCall('localizacao')}>Editar</button>
                        </div>
                        {this.renderComplemento()}
                    </div>
                    {this.renderPopUpEdicaoBusca('localizacao')}
                </div>
                <div className = 'informacao'>
                    <h6 className = 'bold cinza_escuro'>Data e Horário</h6>
                    <div className = 'esquerda'>
                        {this.renderInfoBusca(this.props.info_busca.data_e_hora)}
                        <button className = 'editar_button laranja' onClick = {this.handleStatusPopUpEdicaoBuscaCall('data_e_hora')}>Editar</button>
                    </div>    
                    {this.renderPopUpEdicaoBusca('data_e_hora')}
                </div>
            </div>
        );
    }
}

export default ExibirDataELocal;