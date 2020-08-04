import React from 'react';
import './AtraçãoPrestador.css';

class AtraçãoPrestador extends React.Component {
    render () {
        return (
            <section className = 'atração_prestador'>
                <img src = {require('../../mídia/logo/sorriso-branco-esquerda-atração-prestador.png')} alt = 'sorriso branco'/>
                <div className = 'container'>
                    <div className = 'mensagem_central'>
                        <h2>Prestador, <span className = 'bold'>anuncie de graça!</span></h2>
                        <p>Você anuncia os seus serviços na nossa plataforma e só paga quando for contratado </p>
                    </div>
                    <div className = 'motivos'>
                        <img src = {require('../../mídia/imagens/cozinheiro_ideia.jpg')} alt = 'cozinheiro tendo uma ideia'/>
                        <ul>
                            <li>Divulgue seus serviços de forma prática e organizada em um só lugar</li>
                            <li>Economize com marketing e se dedique para o que realmente importa</li>
                            <li>Receba contato de clientes e aceite de acordo com sua disponibilidade</li>
                            <li>Garanta o pagamento após a realização do evento</li>
                        </ul>
                        <button><a>Quero anunciar meus serviços</a></button>
                    </div>                     
                </div>
            </section>
        );
    }
}

export default AtraçãoPrestador;