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
        let img_inicial = '';
        if(e.target.id === 'botao_visualizador_imagens') {
            img_inicial = 1;
        } else {
            img_inicial = Number(e.target.id.substring(13));
        }
        this.props.handleStatusChangeVisualizador(img_inicial);
    }

    render() {
        return (
            <div className = 'fotos_cardapio'>
                <img id = 'img_cardapio_1' onClick = {this.handleVisualizadorDeImagem} src = {require('../../resources/imagens/cardapios/cardapio_' + this.props.info_cardapio.id_cardapio + '/' + this.props.info_cardapio.imagens[0]) } alt = {this.props.info_cardapio.tipo_de_comida}/>
                <div className = 'secundarias'>
                    <img id = 'img_cardapio_2' onClick = {this.handleVisualizadorDeImagem} src = {require('../../resources/imagens/cardapios/cardapio_' + this.props.info_cardapio.id_cardapio + '/' + this.props.info_cardapio.imagens[1]) } alt = {this.props.info_cardapio.tipo_de_comida}/>
                    <img id = 'img_cardapio_3' className = 'bottom' onClick = {this.handleVisualizadorDeImagem} src = {require('../../resources/imagens/cardapios/cardapio_' + this.props.info_cardapio.id_cardapio + '/' + this.props.info_cardapio.imagens[2]) } alt = {this.props.info_cardapio.tipo_de_comida}/>
                </div>
                <button id = 'botao_visualizador_imagens' className = 'visualizador_imagens_button' onClick = {this.handleVisualizadorDeImagem} >Mostrar Todas as Fotos</button>
            </div>
        );
    }
}

export default FotosCardapio;