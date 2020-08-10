import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Servicos from './pages/Servicos';
import InfoCovid from './pages/InfoCovid';
import AjudaContratante from './pages/AjudaContratante';
import AnuncieSeusServicos from './pages/AnuncieSeusServicos';
import LoginContratante from './pages/LoginContratante';
import PaginaCardapio from './pages/PaginaCardapio';
import SobreAdomi from './pages/SobreAdomi';
import TemosEPrivacidade from './pages/TermosEPrivacidade';
import Erro from './pages/Erro';

class Routes extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <BrowserRouter>
                <Route render = { props => <Home handleChangeServico = {this.props.handleChangeServico} servico = { this.props.servico } />} path = '/' exact />
                <Route component = { AjudaContratante } path = '/ajuda' />
                <Route component = { AnuncieSeusServicos } path = '/parceiros' />
                <Route component = { LoginContratante } path = '/login' />
                <Route component = { InfoCovid } path = '/info_covid' />
                <Route component = { Servicos } path = '/servicos/:id' />
                <Route component = { PaginaCardapio } path = '/cardapios/:id' />
                <Route component = { SobreAdomi  } path = '/sobre' />
                <Route component = { TemosEPrivacidade } path = '/termos_e_privacidade' />
            </BrowserRouter>
        );
    }
}

export default Routes;