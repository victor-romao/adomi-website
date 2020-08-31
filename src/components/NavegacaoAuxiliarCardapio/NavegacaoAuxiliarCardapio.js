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
            section: 'lista_informacoes_cardapio',
            lista_informacoes_cardapio_ativa: false,
            inclusos_no_cardapio_ativa: false,
            entradas_ativa: false,
            sobremesas_ativa: false,
            bebidas_ativa: false,
            servicos_adicionais_ativa: false,
            info_prestador_ativa: false,
            avaliacoes_prestador_ativa: false,
            adicionar_cardapio: true
        }
        this.renderNavegacaoAuxiliar = this.renderNavegacaoAuxiliar.bind(this);
    }

    handleScrollCall(hash) {
        function handleScrollTo() {
            let deslocamento = 0;
            if(hash==='lista_informacoes_cardapio') {
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
                                <li className = {this.state.section === 'lista_informacoes_cardapio' ? 'ativa' : 'inativa'} onClick = {this.handleScrollCall('lista_informacoes_cardapio')}>Fotos</li>
                                <li className = {this.state.section === 'inclusos_no_cardapio' ? 'ativa secundario' : 'inativa secundario'} onClick = {this.handleScrollCall('inclusos_no_cardapio')}>Incluso</li>
                                <li className = {this.state.section === 'entradas' ? 'ativa' : 'inativa'} onClick = {this.handleScrollCall('entradas')}>Entradas</li>
                                <li className = {this.state.section === 'sobremesas' ? 'ativa' : 'inativa'} onClick = {this.handleScrollCall('sobremesas')}>Sobremesas</li>
                                <li className = {this.state.section === 'bebidas' ? 'ativa' : 'inativa'} onClick = {this.handleScrollCall('bebidas')}>Bebidas</li>
                                <li className = {this.state.section === 'servicos_adicionais' ? 'ativa' : 'inativa'} onClick = {this.handleScrollCall('servicos_adicionais')}>Serviços</li>
                                <li className = {this.state.section === 'info_prestador' ? 'ativa secundario' : 'inativa secundario'} onClick = {this.handleScrollCall('info_prestador')}>Prestador</li>
                                <li className = {this.state.section === 'avaliacoes_prestador' ? 'ativa' : 'inativa'} onClick = {this.handleScrollCall('avaliacoes_prestador')}>Avaliações</li>
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
                info_itens = {this.props.info_itens}
                id_prestador = {this.props.id_prestador}
                cesta = {this.props.cesta}
                handleAdicaoEdicaoCesta = {this.props.handleAdicaoEdicaoCesta}
                cardapio_na_cesta = {this.props.cardapio_na_cesta}
                handleStatusCardapio = {this.props.handleStatusCardapio}
                valor_total_cardapio = {this.props.valor_total_cardapio}
                valor_total = {this.props.valor_total}
                calcularValores = {this.props.calcularValores}
            />;
        }
    }
    
    componentDidMount() {
        const Section = document.getElementById('informacoes_cardapio');
        const SectionOptions = {
            rootMargin: '-100px 0px 0px 0px'
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

        ['lista_informacoes_cardapio', 'inclusos_no_cardapio','entradas', 'sobremesas', 'bebidas', 
        'servicos_adicionais', 'info_prestador', 'avaliacoes_prestador', 'informacoes_adicionais_cardapio'].map(section => {
            this.createSectionObserver(section);
        })
    }

    createSectionObserver(section_name) {
        const Section = document.getElementById(section_name); 
        const SectionOptions = {
            rootMargin: '-121px 0px -' + (window.innerHeight - 200) + 'px 0px'
        };

        const Observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    this.setState({ section: section_name });
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