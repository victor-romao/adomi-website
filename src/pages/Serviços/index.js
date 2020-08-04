import React from 'react';
import BarraDeNavegação from '../../components/BarraDeNavegação/BarraDeNavegação';
import ApresentaçãoPáginaServiço from '../../components/ApresentaçãoPáginaServiço/ApresentaçãoPáginaServiço';

class Serviços extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            serviço: this.props.match.params.id
        }
    }

    render () {
        return (
            <div className = 'Serviços'>
                <BarraDeNavegação exibir_info_covid = { false } busca = { false } serviço = { this.state.serviço }/>
                <ApresentaçãoPáginaServiço serviço = { this.state.serviço } />
            </div>
        );
    }
}

export default Serviços;

