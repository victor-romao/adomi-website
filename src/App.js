import React from 'react';
import Routes from './routes';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      serviço: 'serviço_presencial'
    }
    this.handleChangeServiço = this.handleChangeServiço.bind(this);
  }

  handleChangeServiço (serviço) {
    this.setState({
      serviço: serviço
    });
  }

  render() {
    return (
    <div className="App">
      <Routes	handleChangeServiço = { this.handleChangeServiço } serviço = { this.state.serviço }/>
    </div>
    );
  }
}

export default App;
