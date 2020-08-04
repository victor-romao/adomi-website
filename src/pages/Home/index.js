import React from 'react';
import './index.css';
import BarraDeNavegação from '../../components/BarraDeNavegação/BarraDeNavegação';
import ApresentaçãoServiços from '../../components/ApresentaçãoServiços/ApresentaçãoServiços';
import ComoFunciona from '../../components/ComoFunciona/ComoFunciona';
import CarrosselDeCards from '../../components/CarrosselDeCards/CarrosselDeCards';
import AtraçãoPrestador from '../../components/AtraçãoPrestador/AtraçãoPrestador';
import LinksRápidos from '../../components/LinksRápidos/LinksRápidos';
import Rodapé from '../../components/Rodapé/Rodapé';

class Home extends React.Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return (
    <div className="Home">
      <BarraDeNavegação exibir_info_covid = { true } busca = { false } serviço = { this.props.serviço } />
      <ApresentaçãoServiços handleChangeServiço = {this.props.handleChangeServiço} serviço = { this.props.serviço } />
      <ComoFunciona />
      <CarrosselDeCards />
      <AtraçãoPrestador />
      <LinksRápidos />
      <Rodapé	/>
    </div>
    );
  }
}

export default Home;