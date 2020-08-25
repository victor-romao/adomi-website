import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Link } from 'react-router-dom';
import './NavegacaoAuxiliarCardapio.css';
import BotaoAlteracaoQuantidade from '../../components/BotaoAlteracaoQuantidade/BotaoAlteracaoQuantidade';
import AdicionarCardapioCesta from '../AdicionarCardapioCesta/AdicionarCardapioCesta';


class NavegacaoAuxiliarCardapio extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            barra_ativa: false,
            section: 'topo',
            adicionar_cardapio: true,
            numero_convidados: this.props.info_busca.numero_convidados === '' ? 30 : Number(this.props.info_busca.numero_convidados),
            valor_total: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.renderNavegacaoAuxiliar = this.renderNavegacaoAuxiliar.bind(this);
        

        //lista_informacoes_cardapio
        //inclusos_no_cardapio 



        //'info_prestador'
    }

    async handleInputChange(param, newValue) {
        this.props.handleSearchInputChange('numero_convidados', newValue);
        await this.setState({
            numero_convidados: newValue
        })
        this.calcularValores();
        console.log(this.state);
    }

    handleScrollCall(hash) {
        function handleScrollTo() {
            let deslocamento = 0;
            if(hash==='lista_informacoes_cardapio'|| hash==='inclusos_no_cardapio') {
                deslocamento = 80;
            } else {
                deslocamento = 130;
            }
            let element = document.getElementById(hash);
            let yPosition = element.getBoundingClientRect().top + window.pageYOffset - deslocamento;
            window.scrollTo({
                behavior: "smooth",
                top: yPosition,
            });
        }
        return handleScrollTo;
    }

    renderNavegacaoAuxiliar(render) {
        if(render) {
            return (
                    <div className = 'navegacao_auxiliar_cardapio'>
                        <div className = 'links'>
                            <ul>
                                <li onClick = {this.handleScrollCall('lista_informacoes_cardapio')}>Fotos</li>
                                <li className = 'secundario' onClick = {this.handleScrollCall('inclusos_no_cardapio')}>Incluso</li>
                                <li onClick = {this.handleScrollCall('entradas')}>Entradas</li>
                                <li onClick = {this.handleScrollCall('sobremesas')}>Sobremesas</li>
                                <li onClick = {this.handleScrollCall('bebidas')}>Bebidas</li>
                                <li onClick = {this.handleScrollCall('servicos_adicionais')}>Serviços</li>
                                <li className = 'secundario' onClick = {this.handleScrollCall('info_prestador')}>Prestador</li>
                                <li onClick = {this.handleScrollCall('avaliacoes_prestador')}>Avaliações</li>
                            </ul>
                        </div>
                        {this.renderAdicionarCardapio(this.state.adicionar_cardapio)}
                    </div>
            );
        }
    }

    renderAdicionarCardapio(render) {
        if(render) {
            return <AdicionarCardapioCesta 
                handleSearchInputChange = {this.props.handleSearchInputChange} 
                info_busca = {this.props.info_busca}
                info_cardapio = {this.props.info_cardapio}
                formato = 'reduzido'
            />;
        }
    }
    
    componentDidMount() {
        const Section = document.getElementById('informacoes_cardapio');
        const SectionOptions = {
            rootMargin: '0px 0px 0px 0px'
        };

        const Observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(!entry.isIntersecting) {
                    this.setState({ barra_ativa: true });
                } else {
                    this.setState({ barra_ativa: false });
                }
            });
        }, SectionOptions);

        Observer.observe(Section);
    }
    
    render() {
        return (
            <ReactCSSTransitionGroup 
                transitionName = 'animacao_barra_auxiliar' 
                transitionAppear = {true} 
                transitionAppearTimeout={1200} 
                transitionEnter={false} 
                transitionLeave={false}
            >
                {this.renderNavegacaoAuxiliar(this.state.barra_ativa)}
            </ReactCSSTransitionGroup>
        );
        
    }
}

export default NavegacaoAuxiliarCardapio;