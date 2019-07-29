import React, {Component } from 'react'
class Addplayer extends Component{
    state={
        playername:''
    }
    enterplayer =(e) =>{
        this.setState({
            playername:e.target.value
        })
    }
    submitplayer =(e) =>{
        e.preventDefault()
        this.props.addPlayer(this.state)
        this.setState({
           playername:'' 
        })
    }
    render(){
        return(
            <div>
                <form onSubmit={this.submitplayer}>
                <input type="text" onChange={this.enterplayer} value={this.state.playername}/>
                </form>
                </div>
        )
    }
}
export default Addplayer