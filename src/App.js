import React from 'react';
import Routes from './routes';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info_busca: {
        servico: 'servico_presencial',
        localizacao: '',
        data_e_hora: '',
        numero_convidados: '',
      }
    }
    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
  }

  handleSearchInputChange(param, paramValue) {
    this.setState(prevState => ({
      info_busca: {
          ...prevState.info_busca,
          [param]: paramValue
      }
    }));
  }

  render() {
    return (
    <div className="App">
      <Routes handleSearchInputChange = { this.handleSearchInputChange } info_busca = { this.state.info_busca }/>
    </div>
    );
  }
}

export default App;
