import React from 'react';
import { Link } from 'react-router-dom';
import './FAQPrestador.css';
import PerguntaFAQ from '../../components/PerguntaFAQ/PerguntaFAQ';
import ContatoPrestador from '../../components/ContatoPrestador/ContatoPrestador';


class FAQPrestador extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            perguntas_e_respostas: [
                {
                    pergunta: 'Do que preciso para me cadastrar?',
                    resposta: ['Para se cadastrar na plataforma da Adomi é necessário ter experiência com prestação de serviços para eventos, documentos atualizados que comprovem sua identidade e uma conta bancária para receber os pagamentos.', 'Caso esteja cadastrando uma empresa, será necessário ainda apresentar um CNPJ e documentos atualizados que comprovem a sua identidade como um representante legal da empresa.']
                },
                {
                    pergunta: 'Como funciona a cobrança das taxas?',
                    resposta: ['O preço final mostrado ao consumidor é composto pelo preço informado por nossos parceiros somado às taxas cobradas pela Adomi. Portanto, as taxas são cobradas diretamente no ato da contratação, sem que seja necessário nenhum desembolso ou transferência por parte do Prestador para a Adomi.', 'Nas modalidades de Entrega no Evento ou Soluções Especiais Covid os preços finais apresentados também já incluem os custos logísticos envolvidos, sem que nenhuma parcela do mesmo seja cobrada do Prestador.']
                },
                {
                    pergunta: 'Quando recebo o pagamento?',
                    resposta: ['A realização do pagamento é feita em até 5 dias úteis após a realização do evento em caso de confirmação pelo cliente. Caso o cliente não reconheça a realização do evento a Adomi tomará as devidas medidas para solucionar o problema, conforme exposto nos nossos termos de condição de uso.','O pagamento será realizado na conta bancária informada pelo parceiro no momento do cadastro. É possível alterar a conta para recebimento após a realização do cadastro na área do usuário do parceiro.']
                },
                {
                    pergunta: 'Quais são os meus papeis e responsabilidades como prestador?',
                    resposta: ['Caberá aos prestadores cadastrados na plataforma Adomi qualquer atividade relacionada à realização do evento, como compra de ingredientes, preparo de comida, fornecimento de bebidas, etc, desde que essas tenham sido contratadas pelo consumidor através da plataforma.','A Adomi será responsável pela manutenção, divulgação e promoção da plataforma e dos produtos nela cadastrados, além da proteção das informações dos envolvidos e do processamento do pagamento.','No caso das modalidades de serviço que envolvam entrega, o parceiro será responsável pelas embalagens que serão utilizadas, ficando a cargo da Adomi realizar as entregas nos endereços contratados pelos clientes.','Para maiores detalhes acesse nossos termos de condição de uso.']
                },
                {
                    pergunta: 'Posso aceitar apenas os eventos que eu quiser?',
                    resposta: ['No ato do cadastro, o prestador informa em quais dias e horários da semana costuma trabalhar atendendo eventos e se compromete a atualizar sua agenda no site sempre que tiver algum novo compromisso ou alteração da rotina de trabalho. Todos os dias e horários marcados como períodos de trabalho nos quais não houver compromissos informados serão considerados como elegíveis para a solicitação de reservas pelos usuários contratantes.','Após a solicitação de reserva pelo usuário o Prestador tem a liberdade de aceitar ou recusar o serviço, sem nenhuma penalidade. No entanto, tendo em mente uma melhor experiência dos usuários, os prestadores se comprometem a manter suas agendas sempre atualizadas para evitar transtornos.']
                },
                {
                    pergunta: 'Em caso de cancelamento, o que acontece?',
                    resposta: ['Os cancelamentos feitos pelos clientes com mais de 30 dias serão 100% reembolsados, não havendo nenhuma multa ou repasse para a Adomi ou para o Prestador. Cancelamentos feitos com menos de 30 dias terão multa progressiva, podendo chegar à 100% do valor contratado, sem nenhum reembolso.','Em casos nos quais o cancelamento for feito por parte do prestador, a mesma lógica se aplica. No entanto, a multa por não comparecimento ao evento sem aviso prévio será de 10 vezes o valor do evento.','Para maiores detalhes quanto aos prazos e valores presentes na nossa política de cancelamento acesse os nossos termos de condição de uso.']
                },
                {
                    pergunta: 'Como é a escolha das modalidades de serviço e o registro dos cardápios?',
                    resposta: ['Após a realização do cadastro, o prestador poderá editar seu perfil e adicionar os pratos e demais itens que oferece, como entradas, sobremesas, bebidas e serviços adicionais. Na criação de cada novo prato principal/cardápio será possível optar pela oferta nas diferentes modalidades de serviço, com alteração do valor do item para cada uma selecionada.']
                },
                {
                    pergunta: 'Quais são as políticas da Adomi quanto à Covid?',
                    resposta: ['Dadas as atuais circunstâncias, aconselhamos aos nossos parceiros a focarem em serviços não presenciais nesse momento. Além disso, instruímos que os mesmos tenham cuidados redobrados de higiene, com uso de mascaras, luvas e álcool em gel no preparo de qualquer alimento.','No entanto, para os parceiros que marcarem a opção na plataforma como disponíveis para atendimento presencial, estamos limitando o número máximo de convidados dos eventos à 15 pessoas, sendo de total responsabilidade do Prestador e do Contratante seguirem as medidas de isolamento social impostas ou aconselhadas pelo ministério da saúde, governo do estado, prefeituras e outros órgãos competentes.']
                }
            ],
            contato: false
        }
        this.handleContato = this.handleContato.bind(this);
    }

    handleContato() {
        const newValue = !this.state.contato;
        if(newValue) {
            document.body.style = 'overflow: hidden';
            console.log('hidden');
        } else {
            document.body.style = 'overflow: auto';
            console.log('auto');
        }
        this.setState({
            contato: newValue
        });
    }

    renderContato() {
        if(this.state.contato) {
            return (
                <ContatoPrestador handleContato = {this.handleContato}/>
            );
        }
    }
    
    render() {
        return (
            <div id = 'faq_prestador' className = 'faq_prestador'>
                <div className = 'container'>
                    <div className = 'apresentacao_e_contato'>
                        <div className = 'apresentacao'>
                            <h2 className = 'bold'>Perguntas Frequentes</h2>
                            <p>Tire suas dúvidas sobre como é o funcionamento da <span className = 'bold'>Adomi para os Prestadores</span> e venha fazer parte da nossa plataforma!</p>
                        </div>
                        <div className = 'contato'>
                            <h4 className = 'bold'>Ainda com dúvidas?</h4>
                            <p>Entre em contato conosco! Teremos prazer em tirar todas as suas dúvidas para que você venha fazer parte do nosso time.</p>
                            <button className = 'bold' onClick = {this.handleContato}>Entrar em contato!</button>
                        </div>
                    </div>
                    <div className = 'perguntas'>
                        {this.state.perguntas_e_respostas.map(pergunta_e_resposta => (
                            <PerguntaFAQ pergunta_e_resposta = {pergunta_e_resposta} />
                        ))}
                    </div>
                </div>
                { this.renderContato() }
            </div>
        );
    }
}

export default FAQPrestador;