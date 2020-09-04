import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import BarraNavegacaoUltraReduzida from '../../components/BarraNavegacaoUltraReduzida/BarraNavegacaoUltraReduzida';
import Cesta from '../../components/Cesta/Cesta';
import InformacoesDaReserva from '../../components/InformacoesDaReserva/InformacoesDaReserva';
import FormularioInformacoesContratante from '../../components/FormularioInformacoesContratante/FormularioInformacoesContratante';

class ReservaEvento extends React.Component {
    render() {
        return (
            <div className = 'reserva_evento'>
                <BarraNavegacaoUltraReduzida />
                <div className = 'conteudo'>
                    <h1>Reserve seu evento</h1>
                    <div className = 'divisao_colunas'>
                        <div className = 'esquerda'>
                            <InformacoesDaReserva 
                                info_busca = {this.props.info_busca}
                                handleSearchInputChange = {this.props.handleSearchInputChange}
                            />
                            <FormularioInformacoesContratante 

                            />
                        </div>
                        <div className = 'direita'>
                            <Cesta 
                                handleSearchInputChange = {this.props.handleSearchInputChange} 
                                info_busca = { this.props.info_busca }
                                cesta = {this.props.cesta}
                                infos_cesta = {this.props.infos_cesta}
                                valores_cesta = {this.props.valores_cesta}
                                calcularValores = {this.props.calcularValores}
                                handleAdicaoEdicaoCesta = {this.props.handleAdicaoEdicaoCesta}
                                handleQuantidadeChangeCesta = {this.props.handleQuantidadeChangeCesta}
                                handleRemoverDaCesta = {this.props.handleRemoverDaCesta}
                                pagina_reserva = {true}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ReservaEvento;