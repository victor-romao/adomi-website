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
    }

    componentWillMount() {
        this.props.handleSearchInputChange('servico', this.props.match.params.id);
    }

    render () {
        return (
            <div className = 'Servicos'>
                <BarraDeNavegacao 
                    busca = { false } 
                    campos = 'padrao' 
                    animacao_busca = { true }  
                    handleSearchInputChange = { this.props.handleSearchInputChange } 
                    info_busca = { this.props.info_busca }
                    {...this.props}
                />
                <ApresentacaoPaginaServico  
                    handleSearchInputChange = { this.props.handleSearchInputChange } 
                    info_busca = { this.props.info_busca } 
                    {...this.props}
                />
                <ComoFuncionaDetalhado servico = { this.props.match.params.id } />
                <CarrosselDeCards servico = { this.props.match.params.id } />
                <InformacoesAdicionaisPaginaServico />
                <LinksRapidosPaginaServico servico = { this.props.match.params.id } />
                <Rodape />
            </div>
        );
    }
}

export default Servicos;

