import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import BarraNavegacaoPrestador from '../../components/BarraNavegacaoPrestador/BarraNavegacaoPrestador';
import Rodape from '../../components/Rodape/Rodape';
import HeaderAnuncieSeusServicos from '../../components/HeaderAnuncieSeusServicos/HeaderAnuncieSeusServicos';
import ComoFuncionaPrestador from '../../components/ComoFuncionaPrestador/ComoFuncionaPrestador';
import ApresentacaoServicosPrestador from '../../components/ApresentacaoServicosPrestador/ApresentacaoServicosPrestador';
import PassoAPassoPrestador from '../../components/PassoAPassoPrestador/PassoAPassoPrestador';
import FAQPrestador from '../../components/FAQPrestador/FAQPrestador';

class AnuncieSeusServicos extends React.Component {
    render() {
        return (
            <div className = 'AtracaoPrestador'>
                <BarraNavegacaoPrestador />
                <HeaderAnuncieSeusServicos />
                <ComoFuncionaPrestador />
                <ApresentacaoServicosPrestador />
                <PassoAPassoPrestador />
                <FAQPrestador />
                <Rodape />
            </div>
        );
    }
}

export default AnuncieSeusServicos;