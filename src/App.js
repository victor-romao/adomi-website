import React from 'react';
import Routes from './routes';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info_busca: {
        servico: 'servico_presencial',
        localizacao: '',
        data_e_hora: '',
        numero_convidados: '',
      },
      cesta: {
        /*id_prestador: {
          cardapios: {
            id_cardapio: {
              quantidade: '',
              opcionais: {},
              comentario: ''
            }
          },
          itens_adicionais: {
            id_item_adicional: {
              quantidade: '',
              comentario: ''
            }
          }
        }*/
      },
      infos_cesta: {
        1: {
          info_prestador: '1',
          nome: 'Jorge',
          sobrenome: 'Aparecido da Silva',
          profile_img: 'img_1.png',
          cardapios: {
              2 : {
                id_cardapio: 2,
                titulo: 'Churrasco Premium',
                tipo_de_comida: 'Churrasco',
                custo_logistico: 100,
                imagens: [
                    'img_1.png',
                    'img_2.png',
                    'img_3.png'
                ],
                valor_por_pessoa: 45,
                info_itens_opcionais: {
                  entradas: {
                    inclusa_quantas_quiser: [
                        {
                            id_item: 1,
                            titulo: 'Pão de Alho',
                            descricao: 'Delicioso pão com recheio de creme de alho e manteiga feito na brasa.',
                            imagens: [
                                'img_1.png'
                            ]
                        },
                        {
                            id_item: 2,
                            titulo: 'Queijo Coalho',
                            descricao: 'Delicioso queijo coalho feito na brasa, derretido por dentro e super crocante por fora.',
                            imagens: [
                                'img_1.png'
                            ]
                        },
                        {
                            id_item: 3,
                            titulo: 'Espetinho de Coração',
                            descricao: 'Tradicional espeto de coração de galinha. Um delícia!',
                            imagens: [
                                'img_1.png'
                            ]
                        }
                    ],
                    inclusa_apenas_uma: [
                        {
                            id_item: 4,
                            titulo: 'Legumes na Brasa',
                            descricao: 'Legumes variados (cebola, pimentão, abobrinha, beringela, etc) assados com todo carinho.',
                            imagens: [
                                'img_1.png'
                            ]
                        },
                        {
                            id_item: 5,
                            titulo: 'Bruschetta',
                            descricao: 'Tradicional entrada com pão italiano, tomate, queijo parmesão gratinado e manjericão.',
                            imagens: [
                                'img_1.png'
                            ]
                        }
                    ]
                  },
                  sobremesas: {
                    inclusa_quantas_quiser: [],
                    inclusa_apenas_uma: [
                        {
                            id_item: 8,
                            titulo: 'Abacaxi c/ canela na brasa',
                            descricao: 'Abacaxi assado na brasa com açúcar e canela e servido com sorvete de creme.',
                            imagens: [
                                'img_1.png'
                            ]
                        },
                        {
                            id_item: 9,
                            titulo: 'Banana c/canela na brasa',
                            descricao: 'Banana assada na brasa com açúcar e canela e servid com sorvete de creme.',
                            imagens: [
                                'img_1.png'
                            ]
                        }
                    ]
                  }
                }
              }
          },
          itens_adicionais: {
            6: {
              titulo: 'Tábua de Frios',
              descricao: 'Variedade de queijos, salame, presunto, peito de peru e azeitonas, torradinhas e pates.',
              imagens: [
                  'img_1.png'
              ],
              tipo_precificacao: 'valor por pessoa',
              editavel: false,
              valor: 10
            },
            7: {
              titulo: 'Espetinho de Frutos do Mar',
              descricao: 'Espetinho de peixe e camarão para dar um toque especial e único ao seu churrasco.',
              imagens: [
                  'img_1.png'
              ],
              tipo_precificacao: 'valor por pessoa',
              editavel: true,
              valor: 15
            },
            10: {
              titulo: 'Petit Gateau',
              descricao: 'Bolo de chocolate com recheio cremoso calda de chocolate servido com sorvete de creme.',
              imagens: [
                  'img_1.png'
              ],
              tipo_precificacao: 'valor por pessoa',
              editavel: false,
              valor: 10
            },
            11: {
                titulo: 'Bebidas não alcoólicas',
                descricao: 'Água, sucos naturais de laranja, goiaba e abacaxi com hortelã e refrigerantes variados.',
                imagens: [
                    'img_1.png'
                ],
                tipo_precificacao: 'valor por pessoa',
                editavel: false,
                valor: 5
            },
            12:{
                titulo: 'Mix bebidas fermentadas',
                descricao: 'Cerveja Original,  vinhos Periquita Cabernet Sauvignon e Santa Helena Chardonnay.',
                imagens: [
                    'img_1.png'
                ],
                tipo_precificacao: 'valor por pessoa',
                editavel: true,
                valor: 20
            },
            13: {
                titulo: 'Drinks destilados',
                descricao: 'Caipirinhas (vodka, saque ou pinga), mojito, espanhola e piña colada.',
                imagens: [
                    'img_1.png'
                ],
                tipo_precificacao: 'valor por pessoa',
                editavel: true,
                valor: 25
            },
            14: {
                titulo: 'Garçom e Copeira',
                descricao: 'Serviço de garçom e copeira para servir comidas e bebidas aos seus convidados na mesa.',
                imagens: [
                    'img_1.png'
                ],
                tipo_precificacao: 'valor por faixa',
                editavel: false,
                valor: 300
            },
            15: {
                titulo: 'Bartender',
                descricao: 'Caipirinhas, mojito, espanhola e outros drinks da sua escolha preparados na hora.',
                imagens: [
                    'img_1.png'
                ],
                tipo_precificacao: 'valor por pessoa',
                editavel: true,
                valor: 25
            },
            16: {
                titulo: 'Louças e Talheres',
                descricao: 'Não se preocupe com nada, nós levamos as louças e talheres para você.',
                imagens: [
                    'img_1.png'
                ],
                tipo_precificacao: 'valor por faixas',
                editavel: false,
                valor: 100
            }
          }
        }
      },
      valores_cesta: {}
    }
    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
    this.handleAdicaoEdicaoCesta = this.handleAdicaoEdicaoCesta.bind(this);
    this.calcularValores = this.calcularValores.bind(this);
    this.handleQuantidadeChangeCesta = this.handleQuantidadeChangeCesta.bind(this);
    this.handleRemoverDaCesta = this.handleRemoverDaCesta.bind(this);
  }

  handleSearchInputChange(param, paramValue) {
    this.setState(prevState => ({
      info_busca: {
          ...prevState.info_busca,
          [param]: paramValue
      }
    }));
  }

  async handleAdicaoEdicaoCesta(type, new_entry) {
    let aux = ''
    if(type === 'cardapios') {
      aux = 'cardapio';
    } else {
      aux = 'item_adicional';
    }
    let prestador_na_cesta = false; 
    Object.keys(this.state.cesta).map(id_prestador => {
      if(id_prestador === new_entry.id_prestador) {
        prestador_na_cesta = true;
      }
    });
    if(prestador_na_cesta) {
      await this.setState(prevState => ({
        cesta: {
          ...prevState.cesta,
          [new_entry.id_prestador]: {
            ...prevState.cesta[new_entry.id_prestador],
            [type]: {
              ...prevState.cesta[new_entry.id_prestador][type],
              [new_entry["id_" + aux]]: new_entry["info_" + aux]
            }
          }
        }  
      }));
    } else {
      await this.setState(prevState => ({
        cesta: {
          ...prevState.cesta,
          [new_entry.id_prestador]: {
            ...prevState.cesta[new_entry.id_prestador],
            cardapios: {
              [new_entry["id_" + aux]]: new_entry["info_" + aux]
            },
            itens_adicionais: {}
          }
        }  
      }));
    }
    console.log(this.state.cesta);
    this.calcularValores();
  }

  async calcularValores() {
    let valor_total_cesta = 0;
    let prestadores = {};
    Object.keys(this.state.cesta).map(id_prestador => {
        let valores_cardapios = {};
        let valores_itens_adicionais = {};
        let valor_total_prestador = 0;
        Object.keys(this.state.cesta[id_prestador].cardapios).map(id_cardapio => {
            const quantidade = this.state.cesta[id_prestador].cardapios[id_cardapio].quantidade;
            const valor_por_pressoa = this.state.infos_cesta[id_prestador].cardapios[id_cardapio].valor_por_pessoa;
            const custo_logistico = this.state.infos_cesta[id_prestador].cardapios[id_cardapio].custo_logistico;
            const valor_cardapio = quantidade*valor_por_pressoa + custo_logistico;
            valores_cardapios[id_cardapio] = valor_cardapio;
            valor_total_prestador = valor_total_prestador + valor_cardapio;
        })
        if(this.state.cesta[id_prestador].itens_adicionais !== undefined) {
          Object.keys(this.state.cesta[id_prestador].itens_adicionais).map(id_item_adicional => {
              const item = this.state.infos_cesta[id_prestador].itens_adicionais[id_item_adicional];
              const quantidade = this.state.cesta[id_prestador].itens_adicionais[id_item_adicional].quantidade;
              let valor_item_adicional = '';
              if(item.tipo_precificacao === 'valor por pessoa') {
                  const valor_por_pressoa = item.valor;
                  valor_item_adicional = quantidade*valor_por_pressoa;
              } else {
                  valor_item_adicional = item.valor;
              }
              valores_itens_adicionais[id_item_adicional] = valor_item_adicional;
              valor_total_prestador = valor_total_prestador + valor_item_adicional;
          });
        }
        valor_total_cesta = valor_total_cesta + valor_total_prestador;
        prestadores[id_prestador] = {
            valor_total_prestador: valor_total_prestador,
            valor_cardapios: valores_cardapios,
            valor_itens_adicionais: valores_itens_adicionais
        }
    });

    await this.setState({
        valores_cesta: {
            valor_total_cesta: valor_total_cesta,
            prestadores: prestadores
        }
    });
  }

  async handleQuantidadeChangeCesta(type, id_prestador, id_elemento, newValue) {
    let aux = '';
    if(type === 'cardapios') {
      aux = 'cardapio';
    } else {
      aux = 'item_adicional';
    }
    await this.setState(prevState => ({
      cesta: {
        ...prevState.cesta,
        [id_prestador]: {
          ...prevState.cesta[id_prestador],
          [type]: {
            ...prevState.cesta[id_prestador][type],
            [id_elemento]: {
              ...prevState.cesta[id_prestador][type][id_elemento],
              quantidade: newValue
            }
          }
        }
      }  
    }));
    console.log(this.state.cesta);
    this.calcularValores();
  }

  async handleRemoverDaCesta(type, id_prestador, id_elemento) {
    let cesta = this.state.cesta;
    if(type === 'prestador') {
      delete cesta[id_prestador];
    } else if (type === 'cesta') {
      cesta = {};
    } else if (type === 'cardapios') {
      console.log(type);
      console.log(cesta);
      if(Object.keys(cesta[id_prestador].cardapios).length === 1) {
        delete cesta[id_prestador];
        console.log(cesta);
      } else {
        delete cesta[id_prestador].cardapios[id_elemento];
      }
    } else {
      delete cesta[id_prestador].itens_adicionais[id_elemento];
      console.log(cesta);
    }
    await this.setState({
      cesta: cesta
    });
    console.log('removido');
  }

  render() {
    return (
    <div className="App">
      <Routes 
        handleSearchInputChange = { this.handleSearchInputChange } 
        info_busca = { this.state.info_busca }
        cesta = {this.state.cesta}
        infos_cesta = {this.state.infos_cesta}
        valores_cesta = {this.state.valores_cesta}
        calcularValores = {this.calcularValores}
        handleAdicaoEdicaoCesta = {this.handleAdicaoEdicaoCesta}
        handleQuantidadeChangeCesta = {this.handleQuantidadeChangeCesta}
        handleRemoverDaCesta = {this.handleRemoverDaCesta}
      />
    </div>
    );
  }
}

export default App;
