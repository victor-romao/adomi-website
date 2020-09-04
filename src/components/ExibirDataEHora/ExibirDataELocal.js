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
                    <div className = 'esquerda'>
                        <h6 className = 'bold cinza_escuro'>Local do Evento</h6>
                        {this.renderInfoBusca(this.props.info_busca.localizacao)}
                    </div>    
                    <button className = 'editar_button laranja' onClick = {this.handleStatusPopUpEdicaoBuscaCall('localizacao')}>Editar</button>
                    {this.renderPopUpEdicaoBusca('localizacao')}
                </div>
                <div className = 'informacao'>
                    <div className = 'esquerda'>
                        <h6 className = 'bold cinza_escuro'>Data e Horário</h6>
                        {this.renderInfoBusca(this.props.info_busca.data_e_hora)}
                    </div>    
                    <button className = 'editar_button laranja' onClick = {this.handleStatusPopUpEdicaoBuscaCall('data_e_hora')}>Editar</button>
                    {this.renderPopUpEdicaoBusca('data_e_hora')}
                </div>
            </div>
        );
    }
}

export default ExibirDataELocal;