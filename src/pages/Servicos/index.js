import React from 'react';
import './index.css';
import '../../reset.css';
import BarraDeNavegacao from '../../components/BarraDeNavegacao/BarraDeNavegacao';
import ApresentacaoPaginaServico from '../../components/ApresentacaoPaginaServico/ApresentacaoPaginaServico';
import ComoFuncionaDetalhado from '../../components/ComoFuncionaDetalhado/ComoFuncionaDetalhado';
import CarrosselDeCards from '../../components/CarrosselDeCards/CarrosselDeCards';
import InformacoesAdicionaisPaginaServico from '../../components/InformacoesAdicionaisPaginaServico/InformacoesAdicionaisPaginaServico';
import LinksRapidosPaginaServico from '../../components/LinksRapidosPaginaServico/LinksRapidosPaginaServico';
import Rodape from '../../components/Rodape/Rodape';

class Servicos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            servico: this.props.match.params.id,
            info_servicos: {
                servico_presencial: {

                },
                entrega_no_evento: {

                },
                solucoes_covid: {

                }
            }
        }
    }

    render () {
        return (
            <div className = 'Servicos'>
                <BarraDeNavegacao busca = { false } servico = { this.state.servico }/>
                <ApresentacaoPaginaServico servico = { this.state.servico } />
                <ComoFuncionaDetalhado servico = { this.state.servico } />
                <CarrosselDeCards servico = { this.state.servico } />
                <InformacoesAdicionaisPaginaServico />
                <LinksRapidosPaginaServico servico = { this.state.servico } />
                <Rodape />
            </div>
        );
    }
}

export default Servicos;

