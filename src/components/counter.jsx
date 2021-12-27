import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0   
    };

    render() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count >0) ? "primary" : "warning";
        return (
                <div>
                    <button className="btn btn-secondary btn-sm" onClick={this.handleClick.bind(this)}>Enviar Email</button>
                    <span className={classes}>{this.emailEnviado()}</span>
                </div>
                );
    }

    saySomething(something) {
        console.log(something);
        
    }

    handleClick(e) {
        this.setState(prev => ({ count: prev.count + 1 }));
        this.saySomething("email enviado");
        
    }
    emailEnviado() {
        const {count} = this.state;
        return count !=0 ? " Email enviado" : null;
        
    }
    
}

export default Counter ;