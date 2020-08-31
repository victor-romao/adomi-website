import React from 'react';
import { Link } from 'react-router-dom';
import './PopUpAdicaoEdicao.css';
import BotaoAlteracaoQuantidade from '../BotaoAlteracaoQuantidade/BotaoAlteracaoQuantidade';

class PopUpAdicaoEdicao extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            informacoes_adicao_cardapio: {
                id_prestador: this.props.id_prestador,
                id_cardapio: this.props.info_cardapio.id_cardapio,
                info_cardapio: {
                    quantidade: this.props.quantidade,
                    opcionais: {},
                    comentario: ''
                }
            },
            titulos: {
                entradas: 'Entradas',
                sobremesas: 'Sobremesas',
                bebidas: 'Bebidas',
                servicos_adicionais: 'Serviços Adicionais',
                inclusa_quantas_quiser: 'Inclusas – Escolha Quantas Quiser',
                inclusa_apenas_uma: 'Inclusas – Escolha Apenas Uma',
                adicionais: 'Adicionais'
            }
        }
        this.handleQuantidadeChange = this.handleQuantidadeChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleAdicaoEdicaoCesta = this.handleAdicaoEdicaoCesta.bind(this);
        this.definirStatusInicialItens = this.definirStatusInicialItens.bind(this);
    }

    definirStatusCardapio() {
        let cardapio_na_cesta = false;
        Object.keys(this.props.cesta).map(id_prestador => {
            if(id_prestador===this.props.id_prestador) {
                Object.keys(this.props.cesta[id_prestador].cardapios).map(id_cardapio => {
                    if(Number(id_cardapio) === Number(this.props.info_cardapio.id_cardapio)) {
                        cardapio_na_cesta = true;
                    }
                })
            }
        });
        if(cardapio_na_cesta) {
            return true;
        } else {
            return false;
        }
    }

    async definirStatusInicialItens() {
        let entradas_inclusa_quantas_quiser = {}
        let entradas_inclusa_apenas_uma = {}
        let sobremesas_inclusa_quantas_quiser = {} 
        let sobremesas_inclusa_apenas_uma = {}
        if(this.definirStatusCardapio()) {
            let info_previa_cardapio = this.props.cesta[this.props.id_prestador].cardapios[this.props.info_cardapio.id_cardapio];
            await this.setState(prevState => ({
                informacoes_adicao_cardapio: {
                    ...prevState.informacoes_adicao_cardapio,
                    info_cardapio: info_previa_cardapio
                }
            }));
        } else {
            entradas_inclusa_quantas_quiser = this.atribuirValoresIniciaisPorSubdivisao('entradas', 'inclusa_quantas_quiser');
            entradas_inclusa_apenas_uma = this.atribuirValoresIniciaisPorSubdivisao('entradas', 'inclusa_apenas_uma');
            sobremesas_inclusa_quantas_quiser = this.atribuirValoresIniciaisPorSubdivisao('sobremesas', 'inclusa_quantas_quiser');
            sobremesas_inclusa_apenas_uma = this.atribuirValoresIniciaisPorSubdivisao('sobremesas', 'inclusa_apenas_uma');
            let opcionais = Object.assign(entradas_inclusa_quantas_quiser, entradas_inclusa_apenas_uma, sobremesas_inclusa_quantas_quiser, sobremesas_inclusa_apenas_uma);
            await this.setState(prevState => ({
                informacoes_adicao_cardapio: {
                    ...prevState.informacoes_adicao_cardapio,
                    info_cardapio: {
                        ...prevState.informacoes_adicao_cardapio.info_cardapio,
                        opcionais: opcionais
                    }
                }
            }));
        }
    }

    atribuirValoresIniciaisPorSubdivisao(section, subdivision) {
        let obj = {}
        this.props.info_itens[section][subdivision].map(item => {
            let item_infos = {};
            item_infos.status = false;
            item_infos.titulo = item.titulo;
            item_infos.section = section;
            item_infos.subdivision = subdivision;
            obj[item.id_item] = item_infos;
        });
        return obj;
    }

    componentWillMount() {
        this.props.calcularValores();
        this.definirStatusInicialItens();
    }

    async handleQuantidadeChange(param, newValue) {
        this.props.handleSearchInputChange('numero_convidados', newValue);
        await this.setState(prevState => ({
            informacoes_adicao_cardapio: {
                ...prevState.informacoes_adicao_cardapio,
                info_cardapio: {
                    ...prevState.informacoes_adicao_cardapio.info_cardapio,
                   quantidade: newValue
                }

            }
        }));
        this.props.calcularValores();
    }

    async handleInputChange(e) {
        if(e.target.name === 'comentario') {
            let paramValue = e.target.value;
            await this.setState(prevState => ({
                informacoes_adicao_cardapio: {
                    ...prevState.informacoes_adicao_cardapio,
                    info_cardapio: {
                        ...prevState.informacoes_adicao_cardapio.info_cardapio,
                        comentario: paramValue
                    }
                }
            }));
        } else {
            let paramValue = e.target.checked;
            let id_item = e.target.id.substring(5);
            await this.setState(prevState => ({
                informacoes_adicao_cardapio: {
                    ...prevState.informacoes_adicao_cardapio,
                    info_cardapio: {
                        ...prevState.informacoes_adicao_cardapio.info_cardapio,
                        opcionais: {
                            ...prevState.informacoes_adicao_cardapio.info_cardapio.opcionais,
                            [id_item]: {
                                ...prevState.informacoes_adicao_cardapio.info_cardapio.opcionais[id_item],
                                status: paramValue
                            }
                        }
                    }
                }
            }));
        }
    }

    async handleAdicaoEdicaoCesta(e) {
        console.log('irei atualizar a cesta');
        await this.props.handleAdicaoEdicaoCesta('cardapios', this.state.informacoes_adicao_cardapio);
        console.log('cesta atualizada');
        this.props.handleStatusCardapio();
        this.props.handleStatusPopUp(e);
    }

    renderSectionItens(section) {
        const section_info = this.props.info_itens[section];
        const length_inclusas_quantas_quiser = section_info.inclusa_quantas_quiser.length;
        const length_inclusas_apenas_uma = section_info.inclusa_apenas_uma.length;
        if(length_inclusas_quantas_quiser!=0||length_inclusas_apenas_uma!=0) {
            return(
                <div id = {section} className = {section + ' section'}>
                    <h4 className = 'bold'>{this.state.titulos[section]}</h4>
                    {this.renderItensSubdivision(section, 'inclusa_quantas_quiser')}
                    {this.renderItensSubdivision(section, 'inclusa_apenas_uma')}
                </div>
            );
        }
    }

    renderItensSubdivision(section, subdivision) {
        const length_subdivision = this.props.info_itens[section][subdivision].length;
        if(length_subdivision!==0) {
            return (
                <div className = {subdivision + ' subdivision'}>
                    <h6 className = 'bold'>{this.state.titulos[subdivision]}</h6>
                    <div className = 'itens'>
                        {this.props.info_itens[section][subdivision].map((item, i) => {
                            return this.renderItemSelector(item, i, subdivision, section);
                        })}
                    </div>
                </div>
            );
        }
    }

    renderItemSelector(item, i, subdivision, section) {
        let type = '';
        if(subdivision==='inclusa_quantas_quiser') {
            type = 'checkbox';
        } else {
            type = 'radio'
        }
        return (
            <label className = 'item'>
                <div className = 'left'>
                    <img src = {require('../../resources/imagens/itens/item_' + item.id_item + '/img_1.png')} alt = { item.titulo }/>
                    <p>{item.titulo}</p>
                </div>
                <div className = 'right'>
                    <input 
                        id = {'item_' + item.id_item} 
                        type = {type} 
                        name = {section + '_' + subdivision} 
                        checked = {this.state.informacoes_adicao_cardapio.info_cardapio.opcionais[item.id_item].status}
                        onChange = {this.handleInputChange}
                    />
                    <span className= {type + '_custom'}></span>
                </div>
            </label>
        );
    }
    
    render() {
        return (
            <div className = 'pop_up_adicao_edicao_cardapio'>
                <div className = 'fundo' onClick = {this.props.handleStatusPopUp}>
                </div>
                <div className = 'cardapio'>
                    <div className = 'box topo'>
                        <h2>{this.props.info_cardapio.titulo}</h2>
                        <img className = 'fechar' src = {require('../../resources/icons/fechar.png')} alt = 'fechar' onClick = {this.props.handleStatusPopUp}/>
                    </div>
                    <div className = 'box meio'>
                        <img src = {require('../../resources/imagens/cardapios/cardapio_' + this.props.info_cardapio.id_cardapio + '/' + this.props.info_cardapio.imagens[0]) } alt = {this.props.info_cardapio.tipo_de_comida}/>
                        { this.renderSectionItens('entradas') }
                        { this.renderSectionItens('sobremesas') }
                        <div className = 'input'>
                                <p className = 'label'>Algum Comentário?</p>
                                <input 
                                    id = 'comentario' 
                                    className = 'comentario' 
                                    type = 'text' 
                                    placeholder = 'Escreva alguma observação adicional para o prestador.' 
                                    name = 'comentario' 
                                    defaultValue = {this.state.informacoes_adicao_cardapio.info_cardapio.comentario}
                                    onChange = {this.handleInputChange} 
                                />
                        </div>
                    </div>
                    <div className = 'box baixo'>
                        <div className = 'botoes'>
                            <BotaoAlteracaoQuantidade 
                                quantidade = { this.props.quantidade }
                                handleInputChange = { this.handleQuantidadeChange}
                            />
                            <button className = 'botao_central' onClick = {this.handleAdicaoEdicaoCesta}>Adicionar R$ {this.props.valor_total}</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PopUpAdicaoEdicao;