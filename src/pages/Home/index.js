import React from 'react';
import './index.css';
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
      <BarraDeNavegacao exibir_info_covid = { true } busca = { false } servico = { this.props.servico } />
      <ApresentacaoServicos handleChangeServico = {this.props.handleChangeServico} servico = { this.props.servico } />
      <ComoFunciona />
      <CarrosselDeCards />
      <AtracaoPrestador />
      <LinksRapidos />
      <Rodape	/>
    </div>
    );
  }
}

export default Home;