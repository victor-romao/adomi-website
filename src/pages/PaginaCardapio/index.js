import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import BarraDeNavegacao from '../../components/BarraDeNavegacao/BarraDeNavegacao';
import InformacaoCardapio from '../../components/InformacaoCardapio/InformacaoCardapio';
import Itens from '../../components/Itens/Itens';
import PrestadorPaginaCardapio from '../../components/PrestadorPaginaCardapio/PrestadorPaginaCardapio';
import AvaliacoesPaginaCardapio from '../../components/AvaliacoesPaginaCardapio/AvaliacoesPaginaCardapio';
import InfoAdicionaisPaginaCardapio from '../../components/InfoAdicionaisPaginaCardapio/InfoAdicionaisPaginaCardapio';
import Carrinho from '../../components/Carrinho/Carrinho';

class PaginaCardapio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            infos: {
                localizacao: this.props.info_busca.localizacao,
                data_e_hora: this.props.info_busca.data_e_hora,
                numero_convidados: this.props.info_busca.numero_convidados,
                info_cardapio: {
                        id_cardapio: 1,
                        titulo: 'Churrasco Premium',
                        subtitulo: 'Cortes especiais como chorizo e tomahawk preparados na brasa',
                        tipo_de_comida: 'Churrasco',
                        custo_logistico: 0,
                        avaliacao: 'Novo',
                        imagens: [
                            'img_1.png',
                            'img_2.png',
                            'img_3.png'
                        ],
                        descricao: ['Carta de carnes: Alcatra, maminha, fraldinha, picanha suína, peito de frango, drumete, coração de frango, linguiça toscana e linguiça de frango.',
                            'Guarnições: Arroz, farofa da casa e molho a campanha.','Delicioso churrasco assado na brasa com saladas, sobremesa e bebidas. Temos churrasqueira para fornecer caso o cliente não tenha.',
                            'Oferecemos 03 (três) horas de evento.','Os produtos não consumidos ao término do evento pertencem ao buffet.'],
                        valor_por_pessoa: 45,
                        inclusos: {

                        }

                },
                info_itens: {
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
                        ],
                        adicionais: [
                            {
                                id_item: 6,
                                titulo: 'Tábua de Frios',
                                descricao: 'Variedade de queijos, salame, presunto, peito de peru e azeitonas, torradinhas e pates.',
                                imagens: [
                                    'img_1.png'
                                ],
                                tipo_precificacao: 'valor por pessoa',
                                editavel: 'nao',
                                valor: 10
                            },
                            {
                                id_item: 7,
                                titulo: 'Espetinho de Frutos do Mar',
                                descricao: 'Espetinho de peixe e camarão para dar um toque especial e único ao seu churrasco.',
                                imagens: [
                                    'img_1.png'
                                ],
                                tipo_precificacao: 'valor por pessoa',
                                editavel: 'sim',
                                valor: 15
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
                        ],
                        adicionais: [
                            {
                                id_item: 10,
                                titulo: 'Petit Gateau',
                                descricao: 'Bolo de chocolate com recheio cremoso calda de chocolate servido com sorvete de creme.',
                                imagens: [
                                    'img_1.png'
                                ],
                                tipo_precificacao: 'valor por pessoa',
                                editavel: 'nao',
                                valor: 10
                            }
                        ]
                    },
                    bebidas: [
                        {
                            id_item: 11,
                            titulo: 'Bebidas não alcoólicas',
                            descricao: 'Água, sucos naturais de laranja, goiaba e abacaxi com hortelã e refrigerantes variados.',
                            imagens: [
                                'img_1.png'
                            ],
                            tipo_precificacao: 'valor por pessoa',
                            editavel: 'nao',
                            valor: 5
                        },
                        {
                            id_item: 12,
                            titulo: 'Mix bebidas fermentadas',
                            descricao: 'Cerveja Original,  vinhos Periquita Cabernet Sauvignon e Santa Helena Chardonnay.',
                            imagens: [
                                'img_1.png'
                            ],
                            tipo_precificacao: 'valor por pessoa',
                            editavel: 'sim',
                            valor: 20
                        },
                        {
                            id_item: 13,
                            titulo: 'Drinks destilados',
                            descricao: 'Caipirinhas (vodka, saque ou pinga), mojito, espanhola e piña colada.',
                            imagens: [
                                'img_1.png'
                            ],
                            tipo_precificacao: 'valor por pessoa',
                            editavel: 'sim',
                            valor: 25
                        }
                    ],
                    servicos_adicionais: [
                        {
                            id_item: 14,
                            titulo: 'Garçom e Copeira',
                            descricao: 'Serviço de garçom e copeira para servir comidas e bebidas aos seus convidados na mesa.',
                            imagens: [
                                'img_1.png'
                            ],
                            tipo_precificacao: 'valor por faixa',
                            editavel: 'nao',
                            preço: 300
                        },
                        {
                            id_item: 15,
                            titulo: 'Bartender',
                            descricao: 'Caipirinhas, mojito, espanhola e outros drinks da sua escolha preparados na hora.',
                            imagens: [
                                'img_1.png'
                            ],
                            tipo_precificacao: 'valor por pessoa',
                            editavel: 'sim',
                            valor: 25
                        },
                        {
                            id_item: 16,
                            titulo: 'Louças e Talheres',
                            descricao: 'Não se preocupe com nada, nós levamos as louças e talheres para você.',
                            imagens: [
                                'img_1.png'
                            ],
                            tipo_precificacao: 'valor por faixas',
                            editavel: 'nao',
                            valor: 100
                        }
                    ]
                },
                info_prestador: {
                    id_prestador: '1',
                    nome: 'Jorge',
                    sobrenome: 'Aparecido da Silva',
                    profile_img: 'img_1.png',
                    descricao: 'Trabalhamos a sete anos no mercado de buffet com eventos de churrasco, feijoada, frutos do mar e burguer artesanal. Somos especialistas em assados na brasa e apaixonados pela culinária brasileira. Oferecemos mão de obra especializada',
                    especialidades: [
                        'Brasileira',
                        'Churrasaco',
                        'Tradicional'
                    ]
                },
                info_avaliacao: {
                    nota_geral: 4.9,
                    quantidade_avaliacoes: 13,
                    nota_qualidade_comida: 5.0,
                    nota_qualidade_servico: 4.9,
                    nota_pontualidade: 4.8,
                    nota_limpeza: 4.8,
                    nota_comunicacao: 4.9,
                    nota_valor: 5.0,
                    comentarios: [
                        {
                            nome_contratante: 'Guilherme 1',
                            data_avaliacao: 'julho de 2019',
                            comentario: 'O Jorge é excelente, super comunicativo e prestativo. Nos ajudou a organizar um evento impecável sem que precisássemos nos preocupar com o cardápio, Atendimento top!'
                        },
                        {
                            nome_contratante: 'Guilherme 2',
                            data_avaliacao: 'julho de 2019',
                            comentario: 'O Jorge é excelente, super comunicativo e prestativo. Nos ajudou a organizar um evento impecável sem que precisássemos nos preocupar com o cardápio, Atendimento top!'
                        },
                        {
                            nome_contratante: 'Guilherme 3',
                            data_avaliacao: 'julho de 2019',
                            comentario: 'O Jorge é excelente, super comunicativo e prestativo. Nos ajudou a organizar um evento impecável sem que precisássemos nos preocupar com o cardápio, Atendimento top!'
                        },
                        {
                            nome_contratante: 'Guilherme 4',
                            data_avaliacao: 'julho de 2019',
                            comentario: 'O Jorge é excelente, super comunicativo e prestativo. Nos ajudou a organizar um evento impecável sem que precisássemos nos preocupar com o cardápio, Atendimento top!'
                        },
                        {
                            nome_contratante: 'Guilherme 5',
                            data_avaliacao: 'julho de 2019',
                            comentario: 'O Jorge é excelente, super comunicativo e prestativo. Nos ajudou a organizar um evento impecável sem que precisássemos nos preocupar com o cardápio, Atendimento top!'
                        },
                        {
                            nome_contratante: 'Guilherme 6',
                            data_avaliacao: 'julho de 2019',
                            comentario: 'O Jorge é excelente, super comunicativo e prestativo. Nos ajudou a organizar um evento impecável sem que precisássemos nos preocupar com o cardápio, Atendimento top!'
                        },
                        {
                            nome_contratante: 'Guilherme 7',
                            data_avaliacao: 'julho de 2019',
                            comentario: 'O Jorge é excelente, super comunicativo e prestativo. Nos ajudou a organizar um evento impecável sem que precisássemos nos preocupar com o cardápio, Atendimento top!'
                        }
                    ]
                },
                info_adicionais: {
                    antecedencia_chegada: 1,
                    duracao_evento: 3,
                    equipe: '1 churrasqueiro, 1 ajudante e 1 garçom',
                    itens_nao_consumidos: 'prestador',
                    outros: 'será cobrado taxa se houver quebra de mais de 10% das louças',
                    necessarios: [
                        'Espaço com churrasqueira, pia e bancada para realizar o evento',
                        'Disponibilidade para receber o prestador e sua equipe 1 hora antes do evento'
                    ]
                }
            }
        }
    }

    getNumeroConvidados(valor_inicial) {
        
    }

    renderLogística (custo_logistico) {
        if(custo_logistico === 0) {
            return <p className = 'custo_logistico grátis'>Deslocamento Grátis</p>
        } else {
            return <p className = 'custo_logistico'>Deslocamento R$ { custo_logistico }</p>
        }
    }

    render() {
        return (
            <div className = 'pagina_cardapio'>
                <BarraDeNavegacao 
                    busca = { true } 
                    campos = 'extenso' 
                    animacao_busca = { false }  
                    handleChangeSearchInputs = { this.props.handleChangeSearchInputs } 
                    info_busca = { this.props.info_busca }
                    {...this.props}
                />
                <div className = 'divisao_colunas'>
                    <div className = 'principal'>
                        <InformacaoCardapio info_cardapio = {this.state.info_cardapio}/>
                        <Itens />
                        <PrestadorPaginaCardapio />
                        <AvaliacoesPaginaCardapio />
                        <InfoAdicionaisPaginaCardapio />
                    </div>
                    <Carrinho />
                </div>
                <p>{this.state.numero_convidados}</p>
                <p>{this.props.match.params.id}</p>
            </div>
        );
    }
}

export default PaginaCardapio;