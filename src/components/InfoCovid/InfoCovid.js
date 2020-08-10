import React from 'react';
import './InfoCovid.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Link } from 'react-router-dom';

class InfoCovid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            covid: true,
        }
    }
    
    render_info_covid(render) {
        if(render) {
            return (
                
                <ReactCSSTransitionGroup 
                transitionName = 'animacao_info_covid' 
                transitionAppear={true}
                transitionAppearTimeout={1500}
                transitionEnter={true}
                transitionEnterTimeout={500}
                transitionLeave={true} 
                transitionLeaveTimeout={10000}>
                    <div className = 'info_covid'>
                        <p>Confira nossas políticas em resposta à COVID-19. <Link to = './info_covid'>Saiba mais</Link></p>
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
                    this.setState({ covid: false });
                } else {
                    this.setState({ covid: true });
                }
            });
        }, SectionOptions);

        Observer.observe(Section);
    }
    
    render () {
        return (
            <div>
                { this.render_info_covid(this.state.covid)}
            </div>
        );
    }
}

export default InfoCovid;