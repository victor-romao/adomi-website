import React from 'react';
import './LinkRapido.css';
import { Link } from 'react-router-dom';

class LinkRapido extends React.Component {
    constructor(props) {
        super (props);
    }
    render () {
        return (
            <a className = 'link_rapido'>{this.props.tipo_de_comida} em São Paulo ></a>
        );
    }
}
export default LinkRapido;