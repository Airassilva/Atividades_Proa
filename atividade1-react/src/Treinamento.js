import React from 'react'
class Treinamento extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: 'Treinamento'
        }
    }
        render () {
            return (
            <div>
                <p> {this.state.nome} </p>
                <button onClick={() => this.setState({nome:'React'})}>
                    Clique aqui para mudar
                </button>
            </div>
            )
        }
 }

 export default Treinamento;