import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Servicos from './pages/Servicos';

class Routes extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <BrowserRouter>
                <Route render = { props => <Home handleChangeServico = {this.props.handleChangeServico} servico = { this.props.servico } />} path = '/' exact />
                <Route component = { Servicos } path = '/servicos/:id' />
            </BrowserRouter>
        );
    }
}

export default Routes;