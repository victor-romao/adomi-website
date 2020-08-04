import React from 'react';
import './LinkRápido.css';

class LinkRápido extends React.Component {
    constructor(props) {
        super (props);
    }
    render () {
        return (
            <a className = 'link_rápido'>{this.props.tipo_de_comida} em São Paulo ></a>
        );
    }
}
export default LinkRápido;