import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Serviços from './pages/Serviços';

class Routes extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <BrowserRouter>
                <Route render = { props => <Home handleChangeServiço = {this.props.handleChangeServiço} serviço = { this.props.serviço } />} path = '/' exact />
                <Route component = { Serviços } path = '/serviços/:id' />
            </BrowserRouter>
        );
    }
}

export default Routes;