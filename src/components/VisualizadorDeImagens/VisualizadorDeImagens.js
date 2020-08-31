import React from 'react';
import './VisualizadorDeImagens.css';

class VisualizadorDeImagens extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imagem_atual: this.props.imagem_inicial_visualizador
        }
        this.handleImgChangeCall = this.handleImgChangeCall.bind(this);
        this.handleFechar = this.handleFechar.bind(this);

    }

    handleImgChangeCall(button) { 
        const component = this;
        function handleImgChange() {
            let new_id = component.state.imagem_atual;
            if(button === 'anterior') {
                new_id = new_id -1;
            } else {
                new_id = new_id + 1;
            }
            component.setState({
                imagem_atual: new_id
            });    
        }
        return handleImgChange;
    }

    handleFechar() {
        document.body.style="overflow-y: visible"
        this.props.handleStatusChangeVisualizador(1);
    }

    renderButtonAnterior () {
        if(this.state.imagem_atual === 1) {
            return (
                <button className = 'inativo anterior'><img src = {require('../../resources/icons/seta.png')} alt = 'anterior'/></button>
            );
        } else {
            return (
                <button className = 'ativo anterior' onClick = {this.handleImgChangeCall('anterior')}><img src = {require('../../resources/icons/seta.png')} alt = 'anterior'/></button>
            );
        }
    }

    renderButtonProximo () {
        if(this.state.imagem_atual === this.props.info_cardapio.imagens.length) {
            return (
                <button className = 'inativo proximo'><img src = {require('../../resources/icons/seta.png')} alt = 'próximo'/></button>
            );
        } else {
            return (
                <button className = 'ativo proximo' onClick = {this.handleImgChangeCall('proximo')}><img src = {require('../../resources/icons/seta.png')} alt = 'próximo'/></button>
            );
        }
    }

    render() {
        let img_arr_element = this.state.imagem_atual -1;
        document.body.style="overflow-y: hidden";
        return (
            <div className = 'visualizador_imagens'>
                <div className = 'fundo'></div>
                <div className = 'conteudo'>
                    <p>{this.state.imagem_atual + '/' + this.props.info_cardapio.imagens.length}</p>
                    <img className = 'fechar' src = {require('../../resources/icons/fechar.png')} alt = 'fechar' onClick = {this.handleFechar}/>
                    <div className = 'imagem'>
                        {this.renderButtonAnterior()}
                        <img src = {require('../../resources/imagens/cardapios/cardapio_' + this.props.info_cardapio.id_cardapio + '/' + this.props.info_cardapio.imagens[img_arr_element]) } alt = {this.props.info_cardapio.tipo_de_comida}/>
                        {this.renderButtonProximo()}
                    </div>
                </div>
            </div>
        );
    }
}

export default VisualizadorDeImagens;