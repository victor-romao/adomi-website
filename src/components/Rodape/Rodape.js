import React from 'react';
import './Rodape.css';
import { Link } from 'react-router-dom';

class Rodape extends React.Component {
    render () {
        return (
            <footer>
                <div className = 'principal'>
                    <div className = 'adomi container'>
                        <Link to = '/'><img src={require('../../resources/logo/adomi-o-seu-evento-a-domicilio.png')} alt='Adomi, o seu evento a domicílio'/></Link>
                        <p>Usamos tecnologia para unir quem sonha com o evento perfeito e quem o realiza.</p>
                    </div>
                    <div className = 'saiba_mais container'>
                        <h6>Saiba Mais</h6>
                        <ul>
                            <li><Link to = '/servicos/servico_presencial' >Serviço Presencial</Link></li>
                            <li><Link to = '/servicos/entrega_no_evento' >Entrega no Evento</Link></li>
                            <li><Link to = '/servicos/solucoes_covid' >Soluções Especiais Covid</Link></li>
                        </ul>

                    </div>
                    <div className = 'parceiros container'>
                    <   h6>Parceiros</h6>
                        <ul>
                            <li><Link to = '/parceiros' >Anuncie seus Cardápios</Link></li>
                            <li><Link to = '/parceiros' >Ofereça Outros Serviços</Link></li>
                        </ul>
                    </div>
                    <div className = 'recursos container'>
                        <h6>Recursos</h6>
                        <ul>
                            <li><Link to = '/ajuda' >Central de Ajuda</Link></li>
                            <li><Link to = '/sobre' >Sobre a Adomi</Link></li>
                        </ul>
                    </div>
                </div>
                <div className = 'secundario'>
                    <p>© 2020 Adomi Intermediação de Eventos Ltda. CNPJ xxxxxxxxxxx - <Link to = '/termos_e_privacidade' >Termos e Privacidade</Link></p>
                    <div className = 'redes_sociais'>
                        <a href = 'https://www.facebook.com/adomibr' target = 'blank'><img src = {require('../../resources/icons/facebook.png')} /></a>
                        <a href = 'https://instagram.com/adomi.eventos?igshid=1me1mk5l1f372' target = 'blank'> <img src = {require('../../resources/icons/instagram.png')} /></a>
                    </div>
                </div>
            </footer>
        );
    }
}
export default Rodape;