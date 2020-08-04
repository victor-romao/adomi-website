import React from 'react';
import Routes from './routes';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      servico: 'servico_presencial'
    }
    this.handleChangeServico = this.handleChangeServico.bind(this);
  }

  handleChangeServico (servico) {
    this.setState({
      servico: servico
    });
  }

  render() {
    return (
    <div className="App">
      <Routes	handleChangeServico = { this.handleChangeServico } servico = { this.state.servico }/>
    </div>
    );
  }
}

export default App;
