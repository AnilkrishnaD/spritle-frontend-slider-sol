import {Component} from 'react'
import './index.css'


class GameView extends Component {
    state = {order_of_matrix: '', order_present: false}


    onChangeOrder = event => {
        this.setState({order_of_matrix: event.target.value})

        if (event.target.value !== '') {
            this.setState({order_present: true})
        }
        
    }

    enterOrderOfMatrix = () => {
        const {order_present} = this.state
        return (
            <div className='inputMatrix-container'>
              <h1 className='heading'>Enter the value of n</h1>
              <input type="text" className='matrix-order' onChange={this.onChangeOrder}/>
            </div>
        )
    }

    render() {
        const {order_present} = this.state
        console.log(order_present)


        return (
            <div>
                {order_present ? null : this.enterOrderOfMatrix()}
                <p>wait</p>
            </div>
        )
    }
}


export default GameView