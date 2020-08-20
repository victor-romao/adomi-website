import React from 'react';
import './CardDeCardapio.css';
import { Link } from 'react-router-dom';

class CardDeCardapio extends React.Component {
    constructor(props) {
        super(props);
    }
    
    renderLogística (custo_logistico) {
        if(custo_logistico === 0) {
            return <p className = 'custo_logistico grátis'>Deslocamento Grátis</p>
        } else {
            return <p className = 'custo_logistico'>Deslocamento R$ { custo_logistico }</p>
        }
    }

    render () {
        return (
            
            <div className = 'cardapio'>
                <Link to = {'/cardapios/' + this.props.cardapio.id } >    
                    <img src = {require('../../resources/imagens/cardapios/cardapio_' + this.props.cardapio.id + '/img_1.png' )} alt = { this.props.cardapio.tipo_de_comida }/>
                    <div className = 'informacoes'>
                        <div className = 'tipo_de_comida_e_avaliacao'>
                            <h3 className = 'tipo_de_comida'>{ this.props.cardapio.tipo_de_comida }</h3>
                            <div className = 'avaliacao'>
                                <img src = {require('../../resources/icons/estrela.png')} alt = 'Avaliação'/>
                                <p>{ this.props.cardapio.avaliacao }</p>
                            </div>
                        </div>
                        <h4>{ this.props.cardapio.titulo }</h4>
                        <p className = 'subtitulo'>{ this.props.cardapio.subtitulo }</p>
                        <div className = 'custos'>
                            <div>
                                { this.renderLogística(this.props.cardapio.custo_logistico) }
                                <p className = 'valor_total'><span>Valor Total</span> R$ { this.props.cardapio.valor_total }</p>
                            </div>
                            <div className = 'valor_por_pessoa'>
                                <div className = 'valor'>
                                    <span>R$</span>
                                    <p>{ this.props.cardapio.valor_por_pessoa }</p>
                                </div>
                                <p className = 'por_pessoa'>/pessoa</p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        );
    }
}

export default CardDeCardapio;