import React from 'react';
import './index.css';
import '../../reset.css';
import InfoCovid from '../../components/InfoCovid/InfoCovid';
import BarraDeNavegacao from '../../components/BarraDeNavegacao/BarraDeNavegacao';
import ApresentacaoServicos from '../../components/ApresentacaoServicos/ApresentacaoServicos';
import ComoFunciona from '../../components/ComoFunciona/ComoFunciona';
import CarrosselDeCards from '../../components/CarrosselDeCards/CarrosselDeCards';
import AtracaoPrestador from '../../components/AtracaoPrestador/AtracaoPrestador';
import LinksRapidos from '../../components/LinksRapidos/LinksRapidos';
import Rodape from '../../components/Rodape/Rodape';

class Home extends React.Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return (
    <div className="Home">
      <InfoCovid />
      <BarraDeNavegacao 
        busca = { false } 
        campos = 'padrao' 
        animacao_busca = { true }  
        handleSearchInputChange = {this.props.handleSearchInputChange}
        info_busca = { this.props.info_busca }
        {...this.props}
      />
      <ApresentacaoServicos 
        handleSearchInputChange = {this.props.handleSearchInputChange}  
        info_busca = { this.props.info_busca }
        {...this.props}
      />
      <ComoFunciona />
      <CarrosselDeCards servico = 'servico_presencial' />
      <CarrosselDeCards servico = 'entrega_no_evento' />
      <CarrosselDeCards servico = 'solucoes_covid' />
      <AtracaoPrestador />
      <LinksRapidos />
      <Rodape	/>
    </div>
    );
  }
}

export default Home;