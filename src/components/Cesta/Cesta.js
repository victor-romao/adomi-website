import React from 'react';
import { Link } from 'react-router-dom';
import './Cesta.css';
import BotaoAlteracaoQuantidade from '../BotaoAlteracaoQuantidade/BotaoAlteracaoQuantidade';
import PopUpAdicaoEdicaoCardapio from '../PopUpAdicaoEdicaoCardapio/PopUpAdicaoEdicaoCardapio';
import ExibirDataELocal from '../ExibirDataEHora/ExibirDataELocal';

class Cesta extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status_pop_up: {},
        }
        this.definirStatusInicialPopUp = this.definirStatusInicialPopUp.bind(this);
        this.handleStatusPopUpFunctionCall = this.handleStatusPopUpFunctionCall.bind(this);
    }

    handleQuantidadeChangeCall(type, id_prestador, id_elemento) {
        const component = this;
        return function (param, newValue) {
            component.props.handleQuantidadeChangeCesta(type, id_prestador, id_elemento, newValue);
        }
    }

    componentWillMount() {
        this.definirStatusInicialPopUp();
    }

    componentWillUpdate(nextProps) {
        if(this.props.cesta !== nextProps.cesta) {
            this.definirStatusInicialPopUp();
        }
    }

    definirStatusInicialPopUp() {
        let status_pop_up = {};
        Object.keys(this.props.cesta).map(id_prestador => {
            Object.keys(this.props.cesta[id_prestador].cardapios).map(id_cardapio => {
                if(this.state.status_pop_up[id_cardapio] !== null) {
                    status_pop_up[id_cardapio] = this.state.status_pop_up[id_cardapio];
                } else {
                    status_pop_up[id_cardapio] = false;
                }
            });
        });
        this.setState({
            status_pop_up: status_pop_up
        })
    }

    handleStatusPopUpFunctionCall(id_cardapio) {
        const component = this;
        return async function (e) {
            if(component.props.barra_navegacao) {
                if(component.state.status_pop_up[id_cardapio]) {
                    document.addEventListener('click', component.props.handleClickOutside);
                    document.querySelector('.cesta_cheia').style.zIndex = "15";
                    console.log("15");
                } else {
                    document.removeEventListener('click', component.props.handleClickOutside);
                    document.querySelector('.cesta_cheia').style.zIndex = "100";
                    console.log("100");
                }
            }
            await component.setState(prevState => ({
                status_pop_up: {
                    ...prevState.status_pop_up,
                    [id_cardapio]: !component.state.status_pop_up[id_cardapio]
                }
            }));
        }
    }

    handleRemoverDaCestaCall(type, id_prestador, id_cardapio) {
        const component = this;
        return async function(e) {
            e.preventDefault();
            await component.props.handleRemoverDaCesta(type, id_prestador, id_cardapio);
        }
    }

    renderCesta() {
        if(Object.keys(this.props.cesta).length===0) {
            return (
                <div className = 'cesta cesta_vazia' >
                    <img className = 'cesta_vazia' src = { require('../../resources/logo/adomi_simbolo_triste.png') } alt = 'Carinha triste' />
                    <p className = 'cesta_vazia'>Parece que você ainda não tem itens na cesta do seu evento</p>
                </div>
            );
        } else {
            return(
                <div id = 'cesta' className = 'cesta cesta_cheia' >
                    <ExibirDataELocal 
                        info_busca = {this.props.info_busca}
                        handleSearchInputChange = {this.props.handleSearchInputChange}

                    />
                    <div className = 'prestadores'>
                        {Object.keys(this.props.cesta).map(id_prestador => {
                            return this.renderPrestador(id_prestador)
                        })}
                    </div>
                    <div className = 'fixo'>
                        <button id = 'remover_cesta' className = 'esvaziar' onClick = {this.handleRemoverDaCestaCall('cesta', '', '')}>Esvaziar Cesta</button>
                        <Link to = '/pedido/reservar' >
                            <button className = 'reservar'>Reservar R$ {Object.keys(this.props.valores_cesta).length === 0 ? 0 : this.props.valores_cesta.valor_total_cesta}</button>
                        </Link>
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
                        <h4 className = 'bold cinza_escuro'>{this.props.infos_cesta[id_prestador].nome + ' ' + this.props.infos_cesta[id_prestador].sobrenome}</h4>
                        <div className = 'inferior'>
                            <div id = 'remover_prestador' className = 'remover' onClick = {this.handleRemoverDaCestaCall('prestador', id_prestador, '')}>
                                <img className = 'remover_img' src = {require('../../resources/icons/remover.png')} alt = 'remover'/>
                                <p>Remover Produtos</p>
                            </div>
                            <p className = 'laranja'>R$ {Object.keys(this.props.valores_cesta.prestadores).length === 0 ? 0 : this.props.valores_cesta.prestadores[id_prestador].valor_total_prestador}</p>
                        </div>
                    </div>
                </div>
                <div className = 'cardapios'>
                    <h5 className = 'bold'>{Object.keys(this.props.cesta[id_prestador].cardapios).length === 1 ? 'Prato Principal' : 'Pratos Principais'}</h5>
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
                        <h4 className = 'bold'>{cardapio.titulo}</h4>
                        <Link to = {'/cardapios/' + id_cardapio}>Visitar página do cardápio > </Link>
                    </div>
                </div>
                {this.renderOpcionais(opcionais)}
                <div className = 'editar'>
                    <div>
                        <img id = 'remover_cardapio' className = 'remover_img' src = {require('../../resources/icons/remover.png')} alt = 'remover' onClick = {this.handleRemoverDaCestaCall('cardapios', id_prestador, id_cardapio)}/>
                        <BotaoAlteracaoQuantidade  
                            quantidade = { this.props.cesta[id_prestador].cardapios[id_cardapio].quantidade }
                            handleInputChange = { this.handleQuantidadeChangeCall('cardapios', id_prestador, id_cardapio)}
                        />
                    </div>
                    <button className = 'editar_button amarelo' onClick = {this.handleStatusPopUpFunctionCall(id_cardapio)}>Editar</button>
                    <p className = 'laranja'>R$ {Object.keys(this.props.valores_cesta.prestadores).length === 0 ? 0 : this.props.valores_cesta.prestadores[id_prestador].valor_cardapios[id_cardapio]}</p>
                </div>
                {this.renderPopUpEdicao(id_prestador, id_cardapio)}
            </div>
        );
    }

    renderOpcionais(opcionais) {
        let arr_opcionais = [];
        Object.keys(opcionais).map((id_item, i) => {
            if(opcionais[id_item].status) {
                arr_opcionais.push(opcionais[id_item].titulo);
            }
        });
        return (
            <p className = 'opcionais'>
                {arr_opcionais.map((titulo, i) => {
                        let frase = '';
                        if(i === 0) {
                            frase = titulo;
                        } else if(i + 1 === arr_opcionais.length){
                            frase = ' e ' + titulo;
                        } else {
                            frase = ', ' + titulo;
                        }
                        return frase;
                    }
                )}
            </p>
        )
    }

    renderItensAdicionais(id_prestador) {
        if(this.props.cesta[id_prestador].itens_adicionais !== undefined) {
            return (
                <div className = 'itens_adicionais'>
                    {Object.keys(this.props.cesta[id_prestador].itens_adicionais).length !== 0 ? <h5 className = 'bold'>Itens Adicionais</h5> : ''}
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
        const item_adicional = this.props.infos_cesta[id_prestador].itens_adicionais[id_item_adicional];
        return (
            <div className = 'item_adicional'>
                <div className = 'infos_item_adicional'>
                    <img src = {require('../../resources/imagens/itens/item_' + id_item_adicional + '/' + item_adicional.imagens[0])} alt = {item_adicional.titulo} />
                    <div className = 'informacoes'>
                        <h4 className = 'bold'>{item_adicional.titulo}</h4>
                        <div className = 'inferior'>
                            <div className = 'editar'>
                                <img id = 'remover_item' className = 'remover_img' src = {require('../../resources/icons/remover.png')} alt = 'remover' onClick = {this.handleRemoverDaCestaCall('itens_adicionais', id_prestador, id_item_adicional)} />
                                {this.renderBotaoItem(id_prestador, id_item_adicional, item_adicional)}
                            </div>
                            <p className = 'laranja'>R$ {Object.keys(this.props.valores_cesta).length === 0 ? 0 : this.props.valores_cesta.prestadores[id_prestador].valor_itens_adicionais[id_item_adicional]}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderBotaoItem(id_prestador, id_item_adicional, item_adicional) {
        if(item_adicional.editavel) { 
            return (
                <BotaoAlteracaoQuantidade 
                    quantidade = { this.props.cesta[id_prestador].itens_adicionais[id_item_adicional].quantidade }
                    handleInputChange = { this.handleQuantidadeChangeCall('itens_adicionais', id_prestador, id_item_adicional) }
                />
            );
        } else {
            return <p id = 'remover_item' className = 'remover_item' onClick = {this.handleRemoverDaCestaCall('itens_adicionais', id_prestador, id_item_adicional)}>Remover Item</p>;
        }
    }

    renderPopUpEdicao(id_prestador, id_cardapio) {
        if(this.state.status_pop_up[id_cardapio]) {
            const cardapio = this.props.cesta[id_prestador].cardapios[id_cardapio];
            const info_cardapio = this.props.infos_cesta[id_prestador].cardapios[id_cardapio];
            const info_itens_opcionais = info_cardapio.info_itens_opcionais;
            return (
                <PopUpAdicaoEdicaoCardapio 
                    quantidade = {cardapio.quantidade}
                    handleSearchInputChange = {this.props.handleSearchInputChange}
                    info_cardapio = {info_cardapio}
                    info_itens = {info_itens_opcionais}
                    id_prestador = {id_prestador}
                    info_busca = { this.props.info_busca }
                    handleStatusPopUp = {this.handleStatusPopUpFunctionCall(id_cardapio)}
                    cesta = {this.props.cesta}
                    handleAdicaoEdicaoCesta = {this.props.handleAdicaoEdicaoCesta}
                    cardapio_na_cesta = {true}
                    handleStatusCardapio = {function() {}}
                    valor_total = {this.props.valores_cesta.prestadores[id_prestador].valor_cardapios[id_cardapio]}
                    calcularValores = {this.props.calcularValores}
                />
            );
        }
    }

    render() {
        return (
            <div id = 'cesta'>
                {this.renderCesta()}
            </div>
        );
    }
}

export default Cesta;