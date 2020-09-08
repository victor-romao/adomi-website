import React from 'react';
import './InformacaoCardapio.css';
import FotosCardapio from '../../components/FotosCardapio/FotosCardapio';
import AdicionarCardapioCesta from '../../components/AdicionarCardapioCesta/AdicionarCardapioCesta';
import InclusosNoCardapio from '../../components/InclusosNoCardapio/InclusosNoCardapio';

class InformacaoCardapio extends React.Component {
    constructor(props) {
        super(props);
    }

    handleScrollCall(hash) {
        function handleScrollTo() {
            let deslocamento = 0;
            if(hash==='lista_informacoes_cardapio') {
                deslocamento = 80;
            } else {
                deslocamento = 130;
            }
            let element = document.getElementById(hash);
            let yPosition = element.getBoundingClientRect().top + window.pageYOffset - deslocamento;
            window.scrollTo({
                behavior: "smooth",
                top: yPosition,
            });
        }
        return handleScrollTo;
    }

    renderLogistica (custo_logistico) {
        if(custo_logistico === 0) {
            return <p className = 'custo_logistico gratis'>Deslocamento Grátis</p>
        } else {
            return <p className = 'custo_logistico'>Deslocamento R$ { custo_logistico }</p>
        }
    }

    renderAvaliacao (avaliacao, quantidade_avaliacoes) {
        if(avaliacao === 'Novo') {
            return (
                <div onClick = {this.handleScrollCall('avaliacoes_prestador')} className = 'avaliacao'> 
                    <p className = 'bold nota'>{avaliacao}</p>
                </div>
            );
        } else {
            return(
                <div onClick = {this.handleScrollCall('avaliacoes_prestador')} className = 'avaliacao'> 
                    <img src = {require('../../resources/icons/estrela.png')} alt = 'Avaliação'/>
                    <p className = 'bold nota'>{avaliacao}</p>
                    <p className = 'quantidade_avaliacao'>{'(' + quantidade_avaliacoes + ' avaliações)'}</p>
                </div>
            );
        }
    }

    render() {
        return (
            <div className = 'informacoes_cardapio'> 
                <div id = 'informacoes_cardapio'>
                    <h1 className = 'bold'>{ this.props.info_cardapio.titulo }</h1>
                    <h2>{ this.props.info_cardapio.subtitulo }</h2>
                    <div id = 'lista_informacoes_cardapio' className = 'container'>
                        <div className = 'esquerda'>
                            <p className = 'bold'>{ this.props.info_cardapio.tipo_de_comida }</p>
                            <span className = 'divisoria'></span>
                            {this.renderLogistica(this.props.info_cardapio.custo_logistico)}
                        </div>
                        <div className = 'direita'>
                            {this.renderAvaliacao(this.props.info_cardapio.avaliacao, this.props.info_cardapio.quantidade_avaliacoes)}
                        </div>
                    </div>
                    <FotosCardapio 
                        info_cardapio = { this.props.info_cardapio } 
                        handleStatusChangeVisualizador = { this.props.handleStatusChangeVisualizador }
                    />
                    <div className = 'divisao_colunas'>
                        <div className = 'descricao_cardapio'>
                            <h4 className = 'bold'>Detalhes</h4>
                            {this.props.info_cardapio.descricao.map(element => {
                                return <p>{element}</p>
                            })}
                        </div>
                        <AdicionarCardapioCesta 
                            handleSearchInputChange = {this.props.handleSearchInputChange} 
                            info_busca = {this.props.info_busca}
                            info_cardapio = {this.props.info_cardapio}
                            info_itens = {this.props.info_itens}
                            id_prestador = {this.props.id_prestador}
                            cesta = {this.props.cesta}
                            handleAdicaoEdicaoCesta = {this.props.handleAdicaoEdicaoCesta}
                            cardapio_na_cesta = {this.props.cardapio_na_cesta}
                            handleStatusCardapio = {this.props.handleStatusCardapio}
                            valor_total_cardapio = {this.props.valor_total_cardapio}
                            valor_total = {this.props.valor_total}
                            calcularValores = {this.props.calcularValores}
                            quantidade = {this.props.quantidade}
                            handleQuantidadeChange = {this.props.handleQuantidadeChange}
                        />
                    </div>
                </div>
                <InclusosNoCardapio inclusos = {this.props.info_cardapio.inclusos}/>
            </div>
        );
    }
}

export default InformacaoCardapio;