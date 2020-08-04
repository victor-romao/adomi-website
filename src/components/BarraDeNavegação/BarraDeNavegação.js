import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Link } from 'react-router-dom';
import './BarraDeNavegação.css';
import BarraDeBusca from '../BarraDeBusca/BarraDeBusca';


class BarraDeNavegação extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            covid: true,
            busca: this.props.busca
        }
    }

    render_info_covid(render, exibir_info_covid) {
        if(!exibir_info_covid) {
            return;
        } else {
            if(render) {
                return (
                    
                    <ReactCSSTransitionGroup 
                    transitionName = 'animação_info_covid' 
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                    transitionEnter={true}
                    transitionEnterTimeout={500}
                    transitionLeave={true} 
                    transitionLeaveTimeout={500}>
                        <div className = 'info_covid'>
                            <p>Confira nossas políticas em resposta à COVID-19. <a>Saiba mais</a></p>
                        </div>
                    </ReactCSSTransitionGroup>
                    

                );
            }
        }
    }

    render_barra_de_busca(render) {
        if(render) {
            return (
                <ReactCSSTransitionGroup 
                transitionName = 'animação_barra_busca' 
                transitionAppear = {true} 
                transitionAppearTimeout={500} 
                transitionEnter={false} 
                transitionLeave={true}>
                    <div className = 'barra_de_busca'>
                        <BarraDeBusca formato = 'reduzido' campos = 'padrão' serviço = { this.props.serviço } />
                    </div>
                </ReactCSSTransitionGroup>
            );
        }
    }

    componentDidMount() {
        const Section = document.getElementById('barra_de_busca_principal');
        const SectionOptions = {
            rootMargin: '-110px 0px 0px 0px'
        };

        const Observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(!entry.isIntersecting) {
                    this.setState({ covid: false, busca: true });
                } else {
                    this.setState({ covid: true, busca: false });
                }
            });
        }, SectionOptions);

        Observer.observe(Section);
    }
    
    render() {
        return (
            <nav>
                { this.render_info_covid(this.state.covid, this.props.exibir_info_covid) }
                <div className = 'navbar'>
                    <div className = 'container'>
                        <div className = 'logo'>
                            <Link to = '/'><img src={require('../../mídia/logo/adomi-o-seu-evento-a-domicílio.png')} alt='Adomi, o seu evento a domicílio'/></Link>
                        </div>
                        { this.render_barra_de_busca(this.state.busca) }
                        <div className = 'links'>
                            <a>Anuncie seus Serviços</a>
                            <a>Ajuda</a>
                            <img src = {require('../../mídia/ícones/salvos.png')} alt = 'itens salvos'/>
                            <img src = {require('../../mídia/ícones/cesta.png')} alt = 'cesta de compras'/>
                            <div className = 'login'>
                                <img src = {require('../../mídia/ícones/login.png')} alt = 'login'/>
                                <p>Entrar</p>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default BarraDeNavegação;