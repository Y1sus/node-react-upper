import React, { Component } from 'react';
import './App.css';
//la libreria de axios permite la comunicacion con la API
import axios from 'axios';
import FormUpper from './componentes/form';


//http://localhost:3030/api_prueba

class App extends Component {
  state = {
    upper:null
  }
  getText = (e) => {
    e.preventDefault();
    const textoMinus = e.target.elements.textMinus.value;
    if (textoMinus) {
      // console.log(textoMinus);
      e.target.elements.textMinus.value = "";
      axios.get(`http://172.16.100.78:3030/api/textUpper/${textoMinus}`)
      .then((res) => {
        const upper = res.data.upper;
        console.log(upper);
        this.setState({ upper });
      });
    }else{
      return;
    }
  }
  render(){
    return (
      <div className="App">
      <FormUpper getText={this.getText} />
      <h3 className="mb-0">{ this.state.upper }</h3>
      </div>
    );
  }
}
export default App;
