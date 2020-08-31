import React from 'react';
import { Link } from 'react-router-dom';
import './Cesta.css';
import BotaoAlteracaoQuantidade from '../BotaoAlteracaoQuantidade/BotaoAlteracaoQuantidade';

class Cesta extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
              
        }
    }

    /*Object.keys(this.props.cesta).map(id_prestador => {
        this.setState(prevState => ({
            valores_cesta: {
                ...prevState.valores_cesta,
                prestadores: {
                    ...prevState.valores_cesta.prestadores,
                    [id_prestador]: {
                        valor_total_prestador: '',
                        valor_cardapios: {},
                        valor_itens_adicionais: {}
                    }
                }
            }
        }));
    });*/


    async handleQuantidadeChange(param, newValue) {
        await this.props.handleSearchInputChange('numero_convidados', newValue);
        this.calcularValores();
    }

    renderCesta() {
        if(Object.keys(this.props.cesta).length===0) {
            console.log('cesta vazia');
            return (
                <div className = 'cesta' >
                    <img className = 'cesta_vazia' src = { require('../../resources/logo/adomi_simbolo_triste.png') } alt = 'Carinha triste' />
                    <p className = 'cesta_vazia'>Parece que você ainda não tem itens na cesta do seu evento</p>
                </div>
            );
        } else {
            console.log(this.props.cesta);
            console.log(this.props.valores_cesta);
            return(
                <div className = 'cesta' >
                    <div className = 'informacoes_busca'>
                        <div className = 'informacao'>
                            <div className = 'esquerda'>
                                <h6>Data e Horário</h6>
                                <p>{this.props.info_busca.data_e_hora}</p>
                            </div>    
                            <button>Editar</button>
                        </div>
                        <div className = 'informacao'>
                            <div className = 'esquerda'>
                                <h6>Local do Evento</h6>
                                <p>{this.props.info_busca.localizacao}</p>
                            </div>    
                            <button>Editar</button>
                        </div>
                    </div>
                    <div className = 'prestadores'>
                        {Object.keys(this.props.cesta).map(id_prestador => {
                            return this.renderPrestador(id_prestador)
                        })}
                    </div>
                </div>
            );
        }
    }

    renderPrestador(id_prestador) {
        return (
            <div className = 'prestador'>
                <div className = 'infos_prestador'>
                    <img className = 'prestador' src = {require('../../resources/imagens/prestadores/' + this.props.infos_cesta[id_prestador].profile_img)} alt = 'Foto Prestador'/>
                    <div className = 'informacoes'>
                        <h4>{this.props.infos_cesta[id_prestador].nome + ' ' + this.props.infos_cesta[id_prestador].sobrenome}</h4>
                        <div>
                            <div className = 'remover'>
                                <img src = {require('../../resources/icons/remover.png')} alt = 'remover'/>
                                <p>Remover Produtos</p>
                            </div>
                            <p className = 'valor'>R$ {Object.keys(this.props.valores_cesta).length === 0 ? 0 : this.props.valores_cesta.prestadores[id_prestador].valor_total_prestador}</p>
                        </div>
                    </div>
                </div>
                <div className = 'cardapios'>
                    <h5>{Object.keys(this.props.cesta[id_prestador].cardapios).length === 1 ? 'Prato Principal' : 'Pratos Principais'}</h5>
                    {Object.keys(this.props.cesta[id_prestador].cardapios).map(id_cardapio => {
                        return this.renderCardapio(id_prestador, id_cardapio);
                    })}
                </div>
                {this.renderItensAdicionais(id_prestador)}
            </div>
        );
    }

    renderCardapio(id_prestador, id_cardapio) {
        const cardapio = this.props.infos_cesta[id_prestador].cardapios[id_cardapio];
        const opcionais = this.props.cesta[id_prestador].cardapios[id_cardapio].opcionais;
        return (
            <div className = 'cardapio'>
                <div className = 'infos_cardapio'>
                    <img src = {require('../../resources/imagens/cardapios/cardapio_' + id_cardapio + '/' + cardapio.imagens[0])} alt = {cardapio.tipo_de_comida} />
                    <div className = 'informacoes'>
                        <h4>{cardapio.titulo}</h4>
                        <Link to = {'/cardapios/' + id_cardapio}>Visitar página do cardápio > </Link>
                    </div>
                </div>
                <p className = 'opcionais'>
                    {Object.keys(opcionais).map((id_item, i) => {
                        if(opcionais[id_item].status) {
                            let titulo = '';
                            if(i === 0) {
                                titulo = opcionais[id_item].titulo;
                            } else if(i === Object.keys(opcionais).length){
                                titulo = ' e ' + opcionais[id_item].titulo;
                            } else {
                                titulo = ', ' + opcionais[id_item].titulo;
                            }
                            return titulo;
                        }
                    })}
                </p>
                <div className = 'editar'>
                    <img src = {require('../../resources/icons/remover.png')} alt = 'remover'/>
                    <BotaoAlteracaoQuantidade  
                        quantidade = { this.props.cesta[id_prestador].cardapios[id_cardapio].quantidade }
                        handleInputChange = { this.handleQuantidadeChange}
                    />
                    <p>Editar</p>
                    <p className = 'valor'>R$ {Object.keys(this.props.valores_cesta).length === 0 ? 0 : this.props.valores_cesta.prestadores[id_prestador].valor_cardapios[id_cardapio]}</p>
                </div>
            </div>
        );
    }

    renderItensAdicionais(id_prestador) {
        if(this.props.cesta[id_prestador].itens_adicionais !== undefined) {
            return (
                <div className = 'itens_adicionais'>
                    {
                        Object.keys(this.props.cesta[id_prestador].itens_adicionais).map(id_item_adicional => {
                            return this.renderItemAdicional(id_prestador, id_item_adicional);
                        })
                    }
                </div>
            );
            
        }
    }

    renderItemAdicional(id_prestador, id_item_adicional) {
        return (
            <div className = 'item_adicional'>

            </div>
        );
    }

    render() {
        return this.renderCesta();
    }
}

export default Cesta;