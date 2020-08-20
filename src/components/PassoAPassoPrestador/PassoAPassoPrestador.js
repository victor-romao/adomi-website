import React from 'react';
import { Link } from 'react-router-dom';
import './PassoAPassoPrestador.css';

class PassoAPassoPrestador extends React.Component {
    handleScrollTo (){
        window.scrollTo({
            behavior: "smooth",
            top: 0,
        });
    }
    
    render() {
        return (
            <div className = 'passo-a-passo-prestador'>
                <div className = 'container'>
                    <div className = 'passo-a-passo'>
                        <h2>Comece em apenas 3 passos!</h2>
                        <ol>
                            <li>Nos conte sobre você e/ou sua empresa</li>
                            <li>Informe em que períodos está disponível</li>
                            <li>Adicione e gerencie os serviços que você oferece</li>
                        </ol>
                        <p>Depois é só aguardar e aceitar as solicitações de evento!</p>
                        <button onClick = {this.handleScrollTo} >Anuncie seus Serviços</button>
                    </div>                     
                </div>
                <img className = 'cozinheira' src = {require('../../resources/imagens/cozinheira_sorrindo.jpg')} alt = 'cozinheira sorrindo'/>
                <img className = 'sorriso' src = {require('../../resources/logo/sorriso-laranja-direita-atracao_prestador.png')} />
            </div>
        );
    }
}

export default PassoAPassoPrestador;