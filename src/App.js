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
              titulo: 'Churrasco Premium',
              tipo_de_comida: 'Churrasco',
              custo_logistico: 100,
              imagens: [
                  'img_1.png',
                  'img_2.png',
                  'img_3.png'
              ],
              valor_por_pessoa: 45
              }
          },
          itens_adicionais: {
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
              [new_entry.id_cardapio]: new_entry.info_cardapio
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
            [type]: {
              [new_entry.id_cardapio]: new_entry.info_cardapio
            }
          }
        }  
      }));
    }
    this.calcularValores();
  }

  async calcularValores() {
    let valor_total_cesta = 0;
    let prestadores = {};
    console.log(this.state.cesta);
    Object.keys(this.state.cesta).map(id_prestador => {
        console.log(id_prestador);
        let valores_cardapios = {};
        let valores_itens_adicionais = {};
        let valor_total_prestador = 0;
        console.log('map cardapios');
        Object.keys(this.state.cesta[id_prestador].cardapios).map(id_cardapio => {
            const quantidade = this.state.cesta[id_prestador].cardapios[id_cardapio].quantidade;
            const valor_por_pressoa = this.state.infos_cesta[id_prestador].cardapios[id_cardapio].valor_por_pessoa;
            const custo_logistico = this.state.infos_cesta[id_prestador].cardapios[id_cardapio].custo_logistico;
            const valor_cardapio = quantidade*valor_por_pressoa + custo_logistico;
            valores_cardapios[id_cardapio] = valor_cardapio;
            valor_total_prestador = valor_total_prestador + valor_cardapio;
        });
        console.log('map itens');
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

        console.log(valor_total_prestador);

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

  render() {
    return (
    <div className="App">
      <Routes 
        handleSearchInputChange = { this.handleSearchInputChange } 
        info_busca = { this.state.info_busca }
        cesta = {this.state.cesta}
        infos_cesta = {this.state.infos_cesta}
        valores_cesta = {this.state.valores_cesta}
        handleAdicaoEdicaoCesta = {this.handleAdicaoEdicaoCesta}
      />
    </div>
    );
  }
}

export default App;
