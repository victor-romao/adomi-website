import React from 'react';
import './ComoFuncionaDetalhado.css';

class ComoFuncionaDetalhado extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            servico: this.props.servico,
            info_servico: {
                servico_presencial: {
                    img_name: 'servico_presencial.png',
                    img_alt: 'Prestador no seu evento',
                    texto_enfase: 'O prestador vai até você e prepara tudo na hora',
                    texto_descricao: 'O prestador leva todos os itens combinados e realiza o preparo para você e seus convidados na hora'
                },
                entrega_no_evento: {
                    img_name: 'entrega_no_evento.png',
                    img_alt: 'Entrega dos Produtos no seu evento',
                    texto_enfase: 'O prestador realiza o preparo prévio e entrega tudo pronto',
                    texto_descricao: 'O prestador prepara tudo em seu local de trabalho, embala, e nós levamos os produtos até o seu evento'
                },
                solucoes_covid: {
                    img_name: 'solucoes_covid.png',
                    img_alt: 'Soluções Covid na caixa',
                    texto_enfase: 'Preparo e entrega de soluções com higiene redobrada',
                    texto_descricao: 'O prestador prepara um pacote completo e especial para você poder comemorar no conforto e segurança da sua casa'
                }
            }
        }
    }

    render () {
        return (
            <section className = 'como_funciona_detalhado'>
                <div className = 'titulo'>
                    <img src = { require('../../resources/logo/adomi_simbolo_feliz.png') } alt = 'Adomi Símbolo - Seu evento a domicílio'/>
                    <h2>Passo a passo para <span>um evento inesquecível</span></h2>
                </div>
                <div className = 'passo-a-passo'>
                    <div className = 'passo'>
                        <img src = { require('../../resources/icons/busque_cardapios.png') } alt = 'Busque Cardapios' />
                        <div className = 'container'>    
                            <p className = 'numero'>1</p>
                            <div className = 'informacoes'>
                                <h6>Busque pelo cardápio ideal para o seu evento</h6>
                                <p>Utilize os filtros de busca para encontrar a opção certa para você e seus convidados</p>
                            </div>
                        </div>
                    </div>
                    <div className = 'passo'>
                        <img src = { require('../../resources/icons/selecione.png') } alt = 'Busque Cardapios' />
                        <div className = 'container'>    
                            <p className = 'numero'>2</p>
                            <div className = 'informacoes'>
                                <h6>Selecione o cardápio e personalize sua experiência</h6>
                                <p>Adicione o cardápio à sua cesta e escolha entre as diversas opções de serviços adicionais oferecidas</p>
                            </div>
                        </div>
                    </div>
                    <div className = 'passo'>
                        <img src = { require('../../resources/icons/pagamento_seguro.png') } alt = 'Busque Cardapios' />
                        <div className = 'container'>    
                            <p className = 'numero'>3</p>
                            <div className = 'informacoes'>
                                <h6>Pague de forma <br/>segura e garantida</h6>
                                <p>Pague pela plataforma e tenha a segurança do seu dinheiro de volta caso tenha problemas com o prestador</p>
                            </div>
                        </div>
                    </div>
                    <div className = 'passo'>
                        <img src = { require('../../resources/icons/altere_ou_cancele.png') } alt = 'Busque Cardapios' />
                        <div className = 'container'>    
                            <p className = 'numero'>4</p>
                            <div className = 'informacoes'>
                                <h6>Altere ou cancele a reserva com flexibilidade</h6>
                                <p>Mudou de ideia? Faça alterações na sua reserva sem custo algum até 30 dias antes do seu evento</p>
                            </div>
                        </div>
                    </div>
                    <div className = 'passo'>
                        <img src = { require('../../resources/icons/'+ this.state.info_servico[this.state.servico].img_name) } alt = {this.state.info_servico[this.state.servico].img_alt} />
                        <div className = 'container'>    
                            <p className = 'numero'>5</p>
                            <div className = 'informacoes'>
                                <h6>{ this.state.info_servico[this.state.servico].texto_enfase }</h6>
                                <p>{ this.state.info_servico[this.state.servico].texto_descricao }</p>
                            </div>
                        </div>
                    </div>
                    <div className = 'passo'>
                        <img src = { require('../../resources/icons/aproveite_seu_evento.png') } alt = 'Aproveite seu evento' />
                        <div className = 'container'>    
                            <p className = 'numero'>6</p>
                            <div className = 'informacoes'>
                                <h6>Viva o momento <br/> sem se preocupar</h6>
                                <p>Aproveite a experiência e desfrute da companhia dos seus convidados</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default ComoFuncionaDetalhado;