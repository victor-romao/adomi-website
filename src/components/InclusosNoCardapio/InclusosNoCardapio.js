import React from 'react';
import './InclusosNoCardapio.css';

class InclusosNoCardapio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info_itens_inclusos: {
                bartender: {
                    titulo: 'Bartender',
                    img_name: 'bartender.png'
                },
                bebidas_alcoolicas: {
                    titulo: 'Bebidas Alcoólicas',
                    img_name: 'bebidas_alcoolicas.png'
                },
                bebidas_nao_alcoolicas: {
                    titulo: 'Bebidas não Alcoólicas',
                    img_name: 'bebidas_nao_alcoolicas.png'
                },
                copeira: {
                    titulo: 'Copeira',
                    img_name: 'copeira.png'
                },
                deslocamento: {
                    titulo: 'Deslocamento do Prestador',
                    img_name: 'deslocamento.png'
                },
                equipamentos: {
                    titulo: 'Equipamentos para Preparo',
                    img_name: 'equipamentos.png'
                },
                entradas: {
                    titulo: 'Entradas Selecionadas',
                    img_name: 'entradas.png'
                },
                garcom: {
                    titulo: 'Garçom',
                    img_name: 'garcom.png'
                },
                ingredientes: {
                    titulo: 'Ingradientes',
                    img_name: 'ingredientes.png'
                },
                limpeza: {
                    titulo: 'Limpeza da Cozinha',
                    img_name: 'limpeza.png'
                },
                loucas_e_talheres: {
                    titulo: 'Louças e Talheres',
                    img_name: 'loucas_e_talheres.png'
                },
                aparadores: {
                    titulo: 'Aparadores',
                    img_name: 'aparadores.png'
                },
                utensilios_preparo: {
                    titulo: 'Utensílios para Preparo',
                    img_name: 'utensilios_preparo.png'
                },
                utensilios_servir: {
                    titulo: 'Utensílios para Servir',
                    img_name: 'utensilios_servir.png'
                },
                rechaud: {
                    titulo: 'Rechaud',
                    img_name: 'rechaud.png'
                },
                refrigeracao_bebidas: {
                    titulo: 'Redrigeração das Bebidas',
                    img_name: 'refrigeracao_bebidas.png'
                },
                refrigeracao_ingredientes: {
                    titulo: 'Refrigeração dos Ingredientes',
                    img_name: 'refrigeracao_ingredientes.png'
                },
                sobremesas: {
                    titulo: 'Sobremesas Selecionadas',
                    img_name: 'sobremesas.png'
                }
            }
        }
    }

    render() {
        return (
            <div id = 'inclusos_no_cardapio' className = 'inclusos_no_cardapio'>
                <h4 className = 'bold'>Inclusos</h4>
                <div className = 'container'>
                {Object.keys(this.props.inclusos).map(key => {
                    if(this.props.inclusos[key]){
                        return (
                            <div className = 'item_incluso'>
                                <img src = {require('../../resources/icons/inclusos/' + this.state.info_itens_inclusos[key].img_name)}/>
                                <p>{this.state.info_itens_inclusos[key].titulo}</p>
                            </div>
                        );
                    }
                })}
                </div>
            </div>
        );
    }
}

export default InclusosNoCardapio;