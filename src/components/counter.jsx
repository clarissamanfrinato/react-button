import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0   
    };
    //HTTP POST XMLHttp​Request
    constructor() {
        super()
      }
      componentWillMount() {
        this.postData()
      }
    
      postData() {
        // create a new XMLHttpRequest
        var xhr = new XMLHttpRequest()
        // open the request with the verb and the url
        xhr.open('POST', 'http://localhost:3002')
        // send the request
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify({ nome: this.props.name , juros: this.props.juros, amortizacao: this.props.amortizacao,
          tai: this.props.tai, aniversario: this.props.aniversario, 
          valorNominalRemanescente: this.props.valorNominalRemanescente  } ))

      }

    render() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count >0) ? "primary" : "warning";
        return (
                <div>
                    <button 
                    className="btn btn-secondary btn-sm" 
                    onClick={this.handleClick.bind(this)}
                    >Enviar Email </button>
                    <span className={classes}>{this.emailEnviado()}</span>
                </div>
                );
    }


    handleClick(e) {
        this.setState(prev => ({ count: prev.count + 1 }));
        this.postData();
        console.log("email enviado");
        
    }
    emailEnviado() {
        const {count} = this.state;
        return count !==0 ? " Email enviado" : null;
        
    }
    
}

export default Counter ;