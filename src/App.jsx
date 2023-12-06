import { Component } from 'react';
import Cronometro from './assets/cronometro.png';
import './style.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      numero: 0,
      botao: 'GO'
    };
    this.timer = null;
    this.go = this.go.bind(this);
    this.clean = this.clean.bind(this);
  }

  go() {
    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
      this.setState({
        botao: 'GO'
      });

    } else {
      if (!this.timer) {
        this.timer = setInterval(() => {
          this.setState({
            numero: this.state.numero + 0.1
          });
        }, 100);
        this.setState({
          botao: 'STOP'
        });
      }
    }
  }

  clean() {
    if (this.timer !== null) {
      clearInterval(this.timer)
      this.timer = null;
    }

    let state = this.state;
    state.numero = 0;
    state.botao = 'GO'
    this.setState(state)
  }

  render() {
    return (
      <div className='container'>
        <img src={Cronometro} className='img' alt='Imagem de um cronômetro' />
        <a className='time'>{this.state.numero.toFixed(1)}</a>
        <div className='areaBtn'>
          <a className='btn' onClick={this.go}>{this.state.botao}</a>
          <a className='btn' onClick={this.clean}>clean</a>
        </div>
      </div>
    );
  }
}

export default App;
