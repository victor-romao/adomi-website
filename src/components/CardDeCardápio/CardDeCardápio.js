import React from 'react';
import './CardDeCardápio.css';

class CardDeCardápio extends React.Component {
    constructor(props) {
        super(props);
    }
    
    renderLogística (custo_logístico) {
        if(custo_logístico === 0) {
            return <p className = 'custo_logístico grátis'>Deslocamento Grátis</p>
        } else {
            return <p className = 'custo_logístico'>Deslocamento R$ { custo_logístico }</p>
        }
    }

    render () {
        return (
            <div className = 'cardápio'>
                <img src = {require('../../mídia/imagens/cardápios/' + this.props.cardápio.img_name )} alt = { this.props.cardápio.tipo_de_comida }/>
                <div className = 'informações'>
                    <div className = 'tipo_de_comida_e_avaliação'>
                        <h3 className = 'tipo_de_comida'>{ this.props.cardápio.tipo_de_comida }</h3>
                        <div className = 'avaliação'>
                            <img src = {require('../../mídia/ícones/estrela.png')} alt = 'Avaliação'/>
                            <p>{ this.props.cardápio.avaliação }</p>
                        </div>
                    </div>
                    <h4>{ this.props.cardápio.título }</h4>
                    <p className = 'descrição'>{ this.props.cardápio.descrição }</p>
                    <div className = 'custos'>
                        <div>
                            { this.renderLogística(this.props.cardápio.custo_logístico) }
                            <p className = 'valor_total'><span>Valor Total</span> R$ { this.props.cardápio.valor_total }</p>
                        </div>
                        <div className = 'valor_por_pessoa'>
                            <div className = 'valor'>
                                <span>R$</span>
                                <p>{ this.props.cardápio.valor_por_pessoa }</p>
                            </div>
                            <p className = 'por_pessoa'>/pessoa</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardDeCardápio;