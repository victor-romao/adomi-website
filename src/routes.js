import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Servicos from './pages/Servicos';
import InfoCovid from './pages/InfoCovid';
import AjudaContratante from './pages/AjudaContratante';
import AnuncieSeusServicos from './pages/AnuncieSeusServicos';
import LoginContratante from './pages/LoginContratante';
import Cardapios from './pages/Cardapios';
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
                <Switch>
                    <Route render = { props => 
                        <Home 
                            handleSearchInputChange = {this.props.handleSearchInputChange}   
                            info_busca = { this.props.info_busca }
                            cesta = {this.props.cesta}
                            infos_cesta = {this.props.infos_cesta}
                            valores_cesta = {this.props.valores_cesta}
                            handleAdicaoEdicaoCesta = {this.props.handleAdicaoEdicaoCesta}
                            {...props}
                        />} 
                        path = '/' exact 
                    />
                    <Route render = { props => 
                        <AjudaContratante 
                            handleSearchInputChange = {this.props.handleSearchInputChange}  
                            info_busca = { this.props.info_busca }
                            cesta = {this.props.cesta}
                            infos_cesta = {this.props.infos_cesta}
                            valores_cesta = {this.props.valores_cesta}
                            handleAdicaoEdicaoCesta = {this.props.handleAdicaoEdicaoCesta}
                            {...props}
                        />} 
                        path = '/ajuda' exact
                    />
                    <Route 
                        component = { AnuncieSeusServicos } 
                        path = '/parceiros' exact
                    />
                    <Route 
                        component = { LoginContratante } 
                        path = '/login' exact
                    />
                    <Route render = { props => 
                        <InfoCovid 
                            handleSearchInputChange = {this.props.handleSearchInputChange}  
                            info_busca = { this.props.info_busca }
                            cesta = {this.props.cesta}
                            infos_cesta = {this.props.infos_cesta}
                            valores_cesta = {this.props.valores_cesta}
                            handleAdicaoEdicaoCesta = {this.props.handleAdicaoEdicaoCesta}
                            {...props}
                        />} 
                        path = '/info_covid' exact
                    />
                    <Route render = { props => 
                        <Servicos 
                            handleSearchInputChange = {this.props.handleSearchInputChange}  
                            info_busca = { this.props.info_busca }
                            cesta = {this.props.cesta}
                            infos_cesta = {this.props.cesta}
                            valores_cesta = {this.props.cesta}
                            handleAdicaoEdicaoCesta = {this.props.handleAdicaoEdicaoCesta}
                            {...props}
                        />} 
                        path = '/servicos/:id'
                    />
                    <Route render = { props => 
                        <Cardapios 
                            handleSearchInputChange = {this.props.handleSearchInputChange}  
                            info_busca = { this.props.info_busca }
                            cesta = {this.props.cesta}
                            infos_cesta = {this.props.infos_cesta}
                            valores_cesta = {this.props.valores_cesta}
                            handleAdicaoEdicaoCesta = {this.props.handleAdicaoEdicaoCesta}
                            {...props} 
                        />} 
                        path = '/cardapios' exact
                    />
                    <Route render = { props => 
                        <PaginaCardapio 
                            handleSearchInputChange = {this.props.handleSearchInputChange}   
                            info_busca = { this.props.info_busca }
                            cesta = {this.props.cesta}
                            infos_cesta = {this.props.infos_cesta}
                            valores_cesta = {this.props.valores_cesta}
                            handleAdicaoEdicaoCesta = {this.props.handleAdicaoEdicaoCesta}
                            {...props}
                        />} 
                        path = '/cardapios/:id' 
                    />
                    <Route render = { props => 
                        <SobreAdomi  
                            handleSearchInputChange = {this.props.handleSearchInputChange}  
                            info_busca = { this.props.info_busca } 
                            cesta = {this.props.cesta}
                            infos_cesta = {this.props.infos_cesta}
                            valores_cesta = {this.props.valores_cesta}
                            handleAdicaoEdicaoCesta = {this.props.handleAdicaoEdicaoCesta}
                            {...props}
                        />} 
                        path = '/sobre' exact
                    />
                    <Route 
                        component = { TemosEPrivacidade } 
                        path = '/termos_e_privacidade' exact
                    />
                    <Route render = { props => 
                        <Erro 
                            handleSearchInputChange = {this.props.handleSearchInputChange}  
                            info_busca = { this.props.info_busca }
                            cesta = {this.props.cesta}
                            infos_cesta = {this.props.infos_cesta}
                            valores_cesta = {this.props.valores_cesta}
                            handleAdicaoEdicaoCesta = {this.props.handleAdicaoEdicaoCesta}
                            {...props} 
                        />} 
                    />
                </Switch>                
            </BrowserRouter>
        );
    }
}

export default Routes;