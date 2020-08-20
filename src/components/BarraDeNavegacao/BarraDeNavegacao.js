import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Link } from 'react-router-dom';
import './BarraDeNavegacao.css';
import BarraDeBusca from '../BarraDeBusca/BarraDeBusca';


class BarraDeNavegacao extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animacao_busca: this.props.animacao_busca,
            busca: this.props.busca
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
    
    render() {
        return (
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
                            <img src = {require('../../resources/icons/salvos.png')} alt = 'itens salvos'/>
                            <img src = {require('../../resources/icons/cesta.png')} alt = 'cesta de compras'/>
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
        )
    }
}

export default BarraDeNavegacao;