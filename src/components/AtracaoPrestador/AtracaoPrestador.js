import React from 'react';
import './AtracaoPrestador.css';
import { Link } from 'react-router-dom';

class AtracaoPrestador extends React.Component {
    render () {
        return (
            <section className = 'atracao_prestador'>
                <img src = {require('../../resources/logo/sorriso-branco-esquerda-atracao-prestador.png')} alt = 'sorriso branco'/>
                <div className = 'container'>
                    <div className = 'mensagem_central'>
                        <h2>Prestador, <span className = 'bold'>anuncie de graça!</span></h2>
                        <p>Você anuncia os seus serviços na nossa plataforma e só paga quando for contratado </p>
                    </div>
                    <div className = 'motivos'>
                        <img src = {require('../../resources/imagens/cozinheiro_ideia.jpg')} alt = 'cozinheiro tendo uma ideia'/>
                        <ul>
                            <li>Divulgue seus servicos de forma prática e organizada em um só lugar</li>
                            <li>Economize com marketing e se dedique para o que realmente importa</li>
                            <li>Receba contato de clientes e aceite de acordo com sua disponibilidade</li>
                            <li>Garanta o pagamento após a realização do evento</li>
                        </ul>
                        <Link to = '/parceiros' ><button>Quero anunciar meus servicos</button></Link>
                    </div>                     
                </div>
            </section>
        );
    }
}

export default AtracaoPrestador;