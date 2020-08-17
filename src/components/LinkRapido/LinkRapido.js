import React from 'react';
import './LinkRapido.css';
import { Link } from 'react-router-dom';

class LinkRapido extends React.Component {
    constructor(props) {
        super (props);
    }

    render () {
        return (
            <Link className = {'link_rapido'} to = {'/cardapios?servico=' + this.props.servico + '&localizacao='+ this.props.link.localizacao + '&data_e_hora=""' + '&numero_convidados=30' + '&tipo_de_comida=' + this.props.link.tipo_de_comida}>
                {this.props.link.tipo_de_comida} em {this.props.link.localizacao} >
            </Link>
        );
    }
}
export default LinkRapido;