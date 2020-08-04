import React from 'react';
import './Rodapé.css';

class Rodapé extends React.Component {
    render () {
        return (
            <footer>
                <div className = 'principal'>
                    <div className = 'adomi container'>
                        <a><img src={require('../../mídia/logo/adomi-o-seu-evento-a-domicílio.png')} alt='Adomi, o seu evento a domicílio'/></a>
                        <p>Usamos tecnologia para unir quem sonha com o evento perfeito e quem o realiza.</p>
                    </div>
                    <div className = 'saiba_mais container'>
                        <h6>Saiba Mais</h6>
                        <ul>
                            <li><a>Serviço Presencial</a></li>
                            <li><a>Entrega no Evento</a></li>
                            <li><a>Soluções Especiais Covid</a></li>
                        </ul>

                    </div>
                    <div className = 'parceiros container'>
                    <   h6>Parceiros</h6>
                        <ul>
                            <li><a>Anuncie seus Cardápios</a></li>
                            <li><a>Ofereça Outros Serviços</a></li>
                        </ul>
                    </div>
                    <div className = 'recursos container'>
                        <h6>Recursos</h6>
                        <ul>
                            <li><a>Central de Ajuda</a></li>
                            <li><a>Sobre a Adomi</a></li>
                        </ul>
                    </div>
                </div>
                <div className = 'secundário'>
                    <p>© 2020 Adomi Intermediação de Eventos Ltda. CNPJ xxxxxxxxxxx - <a>Termos e Privacidade</a></p>
                    <div className = 'redes_sociais'>
                        <a><img src = {require('../../mídia/ícones/facebook.png')} /></a>
                        <a><img src = {require('../../mídia/ícones/instagram.png')} /></a>
                    </div>
                </div>
            </footer>
        );
    }
}
export default Rodapé;