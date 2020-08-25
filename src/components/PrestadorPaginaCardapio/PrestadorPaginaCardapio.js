import React from 'react';
import './PrestadorPaginaCardapio.css';

class PrestadorPaginaCardapio extends React.Component {
    constructor(props) {
        super(props);
    }

    renderAvaliacao (avaliacao, quantidade_avaliacoes) {
        if(avaliacao === 'Novo') {
            return (
                <div className = 'avaliacao'> 
                    <p className = 'bold nota'>{avaliacao}</p>
                </div>
            );
        } else {
            return(
                <div className = 'avaliacao'> 
                    <img src = {require('../../resources/icons/estrela.png')} alt = 'Avaliação'/>
                    <p className = 'bold nota'>{avaliacao}</p>
                    <p className = 'quantidade_avaliacao'>{'(' + quantidade_avaliacoes + ' avaliações)'}</p>
                </div>
            );
        }
    }

    render() {
        return (
            <div id = 'info_prestador' className = 'info_prestador'>
                <div className = 'infos_principal'>
                    <img className = 'profile' src = {require('../../resources/imagens/prestadores/' + this.props.info_prestador.profile_img)} alt = 'Foto Prestador'/>
                    <div className = 'container'>
                        <h4 className = 'bold'>Cardápio oferecido por {this.props.info_prestador.nome} {this.props.info_prestador.sobrenome}</h4>
                        <div className = 'lista_infos'>
                            {this.renderAvaliacao(this.props.info_prestador.avaliacao, this.props.info_prestador.quantidade_avaliacoes)}
                            <span className = 'divisoria'></span>
                            <div className = 'identidade'>
                                <img src = {require('../../resources/icons/identidade_verificada.png')} alt = 'Segurança'/>
                                <p>Identidade Verificada</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = 'infos_auxiliares'>
                    <div className = 'sobre'>
                        <h6 className = 'bold'>SOBRE</h6>
                        <p>{this.props.info_prestador.descricao}</p>
                    </div>
                    <div className = 'especialidades'>
                        <h6 className = 'bold'>ESPECIALIDADES</h6>
                        <ul>
                            {this.props.info_prestador.especialidades.map((item) => {
                                return <li>{item}</li>;
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default PrestadorPaginaCardapio;