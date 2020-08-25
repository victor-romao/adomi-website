import React from 'react';
import './FotosCardapio.css';

class FotosCardapio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.handleVisualizadorDeImagem = this.handleVisualizadorDeImagem.bind(this);
    }

    handleVisualizadorDeImagem(e) {
        e.preventDefault();
        this.props.handleStatusChangeVisualizador();
    }

    render() {
        return (
            <div className = 'fotos_cardapio'>
                <img src = {require('../../resources/imagens/cardapios/cardapio_' + this.props.info_cardapio.id_cardapio + '/' + this.props.info_cardapio.imagens[0]) } alt = {this.props.info_cardapio.tipo_de_comida}/>
                <div className = 'secundarias'>
                    <img src = {require('../../resources/imagens/cardapios/cardapio_' + this.props.info_cardapio.id_cardapio + '/' + this.props.info_cardapio.imagens[1]) } alt = {this.props.info_cardapio.tipo_de_comida}/>
                    <img className = 'bottom' src = {require('../../resources/imagens/cardapios/cardapio_' + this.props.info_cardapio.id_cardapio + '/' + this.props.info_cardapio.imagens[2]) } alt = {this.props.info_cardapio.tipo_de_comida}/>
                </div>
                <button className = 'visualizador_imagens_button' onClick = {this.handleVisualizadorDeImagem} >Mostrar Todas as Fotos</button>
            </div>
        );
    }
}

export default FotosCardapio;