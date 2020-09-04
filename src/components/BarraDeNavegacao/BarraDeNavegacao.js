import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Link } from 'react-router-dom';
import './BarraDeNavegacao.css';
import BarraDeBusca from '../BarraDeBusca/BarraDeBusca';
import Cesta from '../Cesta/Cesta';

class BarraDeNavegacao extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animacao_busca: this.props.animacao_busca,
            busca: this.props.busca,
            show_cesta: false
        }
        this.handleShowCestaChange = this.handleShowCestaChange.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }
    
    componentDidMount() {
        if(this.state.animacao_busca) {
            const Section = document.getElementById('barra_de_busca_principal');
            const SectionOptions = {
                rootMargin: '-110px 0px 0px 0px'
            };

            const Observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if(!entry.isIntersecting) {
                        this.setState({ busca: true });
                    } else {
                        this.setState({ busca: false });
                    }
                });
            }, SectionOptions);

            Observer.observe(Section);
        }
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside);
    }

    async handleShowCestaChange() {
        await this.setState({
            show_cesta: !this.state.show_cesta
        });
        if(this.state.show_cesta) {
            document.addEventListener('click', this.handleClickOutside);
            if(document.getElementById('link_info_covid') !== null) {
                document.querySelector('.cesta').style.top = "91px";
                document.querySelector('.cesta').style.height = "calc(100vh - 92px)";
            } else {
                document.querySelector('.cesta').style.top = "62.5px";
                document.querySelector('.cesta').style.height = "calc(100vh - 63px)";
            }
        } else {
            document.removeEventListener('click', this.handleClickOutside);
        }
        
    }

    handleClickOutside(e) {
        if(!document.getElementById('cesta').contains(e.target)) {
            this.handleShowCestaChange();
            console.log("click outside");
            console.log(e.target.id);
            console.log(e.target);
        }
    }



    render_barra_de_busca(render) {
        if(render) {
            return (
                <ReactCSSTransitionGroup 
                transitionName = 'animacao_barra_busca' 
                transitionAppear = {true} 
                transitionAppearTimeout={1200} 
                transitionEnter={false} 
                transitionLeave={true}
                transitionLeaveTimeout={1200}>
                    <div className = 'barra_de_busca'>
                        <BarraDeBusca 
                            formato = 'reduzido' 
                            campos = { this.props.campos }  
                            handleSearchInputChange = { this.props.handleSearchInputChange } 
                            info_busca = { this.props.info_busca }
                            {...this.props} 
                        />
                    </div>
                </ReactCSSTransitionGroup>
            );
        }
    }
    
    render_anuncie_seus_servicos(campos) {
        if(campos === 'padrao') {
            return <Link to = '/parceiros'> Anuncie seus Serviços</Link>;
        }
    }

    renderCesta() {
        if(this.state.show_cesta) {
            return (
                <Cesta 
                    handleSearchInputChange = {this.props.handleSearchInputChange} 
                    info_busca = { this.props.info_busca }
                    cesta = {this.props.cesta}
                    infos_cesta = {this.props.infos_cesta}
                    valores_cesta = {this.props.valores_cesta}
                    calcularValores = {this.props.calcularValores}
                    handleAdicaoEdicaoCesta = {this.props.handleAdicaoEdicaoCesta}
                    barra_navegacao = {true}
                    handleClickOutside = {this.handleClickOutside}
                    handleQuantidadeChangeCesta = {this.props.handleQuantidadeChangeCesta}
                    handleRemoverDaCesta = {this.props.handleRemoverDaCesta}
                    pagina_reserva = {false}
                />
            );
        }
    }
    
    render() {
        return (
            <div id = 'barra_de_navegacao'>
                <nav>
                    <div className = 'navbar'>
                        <div className = 'container'>
                            <div className = 'logo'>
                                <Link to = '/'><img src={require('../../resources/logo/adomi-o-seu-evento-a-domicilio.png')} alt='Adomi, o seu evento a domicílio'/></Link>
                            </div>
                            { this.render_barra_de_busca(this.state.busca) }
                            <div className = 'links'>
                                { this.render_anuncie_seus_servicos(this.props.campos) }
                                <Link to = '/ajuda'> Ajuda</Link>
                                <img className = 'salvos' src = {require('../../resources/icons/salvos.png')} alt = 'itens salvos'/>
                                <img src = {require('../../resources/icons/cesta.png')} alt = 'cesta de compras' onClick = {this.handleShowCestaChange}/>
                                <Link to = '/login' >
                                    <div className = 'login'>
                                        <img src = {require('../../resources/icons/login.png')} alt = 'login'/>
                                        <p>Entrar</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
                {this.renderCesta()}
            </div>
        )
    }
}

export default BarraDeNavegacao;