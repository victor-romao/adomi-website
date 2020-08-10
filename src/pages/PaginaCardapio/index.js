import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

class PaginaCardapio extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                Cardapio {this.props.match.params.id}
            </div>
        );
    }
}

export default PaginaCardapio;