import React from 'react';
import './AvaliacoesPaginaCardapio.css';
import { Link } from 'react-router-dom';

class AvaliacoesPaginaCardapio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titulos_atributos: {
                nota_qualidade_comida: 'Qualidade da Comida',
                nota_qualidade_servico: 'Qualidade do Serviço',
                nota_pontualidade: 'Pontualidade',
                nota_limpeza: 'Limpeza',
                nota_comunicacao: 'Comunicação',
                nota_valor: 'Valor'
            },
            numero_comentarios: 3,
            mais_comentarios: true
        }
        this.handleMaisComentarios = this.handleMaisComentarios.bind(this);
        
    }

    renderAvaliacao (avaliacao, quantidade_avaliacoes) {
        if(avaliacao === 'Novo') {
            return (
                <div id = 'avaliacoes_prestador' className = 'avaliacoes_prestador'>
                    <h6 className = 'bold'>Sem Avaliações</h6>
                    <p>Infelizmente o Prestador ainda não possui avaliações, mas estamos aqui para ajudar. Saiba mais sobre nossas garantias nos <Link to = '/termos_e_privacidade'>Termos e Condições de Uso</Link>.</p>
                </div>
            );
        } else {
            return(
                <div id = 'avaliacoes_prestador' className = 'avaliacoes_prestador'>
                    <div className = 'avaliacao_geral'>
                        <img src = {require('../../resources/icons/estrela.png')} alt = 'Avaliação'/>
                        <p className = 'bold nota_amarela'>{avaliacao}</p>
                        <p className = 'quantidade_avaliacao'>{'(' + quantidade_avaliacoes + ' avaliações)'}</p>
                    </div>
                    <div className = 'notas_por_atributo'>
                        <div className = 'colunas esquerda'>
                            {this.renderNotaPorAtributo('nota_qualidade_comida')}
                            {this.renderNotaPorAtributo('nota_qualidade_servico')}
                            {this.renderNotaPorAtributo('nota_pontualidade')}
                        </div>
                        <div className = 'colunas'>
                            {this.renderNotaPorAtributo('nota_limpeza')}
                            {this.renderNotaPorAtributo('nota_comunicacao')}
                            {this.renderNotaPorAtributo('nota_valor')}
                        </div>
                    </div>
                    {this.renderComentarios()}
                </div>
            );
        }
    }

    renderNotaPorAtributo(atributo){
        const width = this.props.info_avaliacao[atributo]*12;
        const width_txt = width + 'px';
        const style_nota_atributo = {
            width: width_txt
        }
        
        return (
            <div className = 'nota_por_atributo'>
                <p className = 'titulo_atributo'>{this.state.titulos_atributos[atributo]}</p>
                <div className = 'gap'>
                    <div id = 'barra_nota_atributo' style = {style_nota_atributo}></div>
                </div>
                <p className = 'bold nota'>{this.props.info_avaliacao[atributo].toFixed(1)}</p>
                <img src = {require('../../resources/icons/estrela_preta.png')} alt = 'estrela'/>
            </div>
        );
    }

    renderComentarios() {
        const numero_comentarios = this.state.numero_comentarios;
        return (
            <div className = 'comentarios'>
                {this.props.info_avaliacao.comentarios.map((comentario, i) => {
                    if(i < this.state.numero_comentarios){
                        return(
                            <div className = 'comentario'>
                                <div className = 'linha'>
                                    <p>{comentario.nome_contratante}</p>
                                    <span className = 'divisoria'></span>
                                    <p>{comentario.data_avaliacao}</p>
                                </div>
                                <p>{comentario.comentario}</p>
                            </div>
                        );
                    }
                })}
                {this.renderMaisComentarios()}
            </div>
        );
    }

    renderMaisComentarios() {
        if(this.state.mais_comentarios){
            return (
                <div className = 'mais_comentarios' onClick = {this.handleMaisComentarios}>
                    <p>Ver mais comentários</p>
                    <img src = {require('../../resources/icons/seta_amarela.png')} alt = 'seta para baixo'/>
                </div>
            );
        }
    }

    handleMaisComentarios() {
        const newValue = this.state.numero_comentarios + 3;
        if(newValue > this.props.info_avaliacao.quantidade_avaliacoes){
            this.setState({
                mais_comentarios: false
            })
        }
        this.setState({
            numero_comentarios: newValue
        });
        console.log(this.state.numero_comentarios);
    }

    render() {
        return (
            <div>
                {this.renderAvaliacao(this.props.info_avaliacao.nota_geral, this.props.info_avaliacao.quantidade_avaliacoes)}
            </div>
        );
    }
}

export default AvaliacoesPaginaCardapio;