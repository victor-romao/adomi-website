import React from 'react';
import { Link } from 'react-router-dom';
import './ApresentacaoServicosPrestador.css';

class ApresentacaoServicosPrestador extends React.Component {
    render() {
        return (
            <div className = 'apresentacao_servicos_prestador'>
                <h2>Ofereça seus serviços como desejar</h2>
                <div className = 'container'>
                    <div className = 'servico'>
                        <img src = { require('../../resources/icons/cozinheiro_laranja.png') } />
                        <h6>Serviço Presencial</h6>
                        <ul>
                            <li>
                                <img src = {require('../../resources/logo/sorriso-amarelo.png')} />
                                <p>Vá com sua equipe até o evento</p>
                            </li>
                            <li>
                                <img src = {require('../../resources/logo/sorriso-amarelo.png')} />
                                <p>Prepare os pratos e entradas na hora</p>
                            </li>
                            <li>
                                <img src = {require('../../resources/logo/sorriso-amarelo.png')} />
                                <p>Ofereça uma experiência exclusiva e diferenciada</p>
                            </li>
                        </ul>
                    </div>
                    <div className = 'servico'>
                        <img src = { require('../../resources/icons/entrega_laranja.png') } />
                        <h6>Entrega no Evento</h6>
                        <ul>
                            <li>
                                <img src = {require('../../resources/logo/sorriso-amarelo.png')} />
                                <p>Prepare tudo em casa ou no seu local de trabalho</p>
                            </li>
                            <li>
                                <img src = {require('../../resources/logo/sorriso-amarelo.png')} />
                                <p>Embale todas as comidas com carinho</p>
                            </li>
                            <li>
                                <img src = {require('../../resources/logo/sorriso-amarelo.png')} />
                                <p>Nós entregamos para você no evento do cliente</p>
                            </li>
                        </ul>
                    </div>
                    <div className = 'servico'>
                        <img src = { require('../../resources/icons/ideia_laranja.png') } />
                        <h6>Soluções Especiais Covid</h6>
                        <ul>
                            <li>
                                <img src = {require('../../resources/logo/sorriso-amarelo.png')} />
                                <p>Seja criativo e pense em soluções para o momento</p>
                            </li>
                            <li>
                                <img src = {require('../../resources/logo/sorriso-amarelo.png')} />
                                <p>Prepare tudo em casa ou no seu local de trabalho</p>
                            </li>
                            <li>
                                <img src = {require('../../resources/logo/sorriso-amarelo.png')} />
                                <p>Embale e deixe a entrega com a gente</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default ApresentacaoServicosPrestador;