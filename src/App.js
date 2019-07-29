import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Player from './player'
import Addplayer from './addplayer'
class App extends Component {
    state={
      players:[
      {playername:'rohit',playerid:'45',EditMode: false},
      {playername :'virat',playerid:'18',EditMode:false},
      {playername :'dhawan',playerid:'30',EditMode:false},
      {playername: 'pant',playerid:'100',EditMode:false}]
    }
    
   deleteplayer =(id)=>{
   console.log("delete clicked")
   const newplayers =this.state.players.filter(eachplayer =>{
    return eachplayer.playerid !== id
   })
   this.setState({
     players: newplayers
   })
    }

    addplayer= (justadded) => {
       justadded.playerid = Math.random()
       justadded.EditMode = false
       if(justadded.text !== null){

       let all_players=[...this.state.players,justadded]
 
       this.setState({
         players: all_players
       })
      }
      else{
        alert("please enter a player name")
      }
    }
    changeEditmode =(e)=>{
      console.log(e)


        //onClick={()=>{changeMode(player.playerid)} //id 
       //onClick=changeMode() //event 
        //onClick=changeMode.bind(this, player.playerid) ///id, event  


      var players = this.state.players.map((item) => {  //for 100 players, we create 100 new objects 
        if (item.playerid===e) { 
          item.EditMode=!item.EditMode; 
        }
        return item;
      })
      this.setState({
        players: players
      })

    }

  updatePlayer =(e,value)=>{
      console.log(value)
      var players = this.state.players.map((item) => {   
        if (item.playerid===e) { 
          item.EditMode=!item.EditMode; 
          item.playername=value;
        }
        return item;
      })
      this.setState({
        players: players
      })
      console.log(this.state)
    }
    
  render() {
 
    return (
      <div className="App">
      <h1>Add Team Players</h1>
      <Player players={this.state.players}  deleteaplayer={this.deleteplayer} changeMode={this.changeEditmode} updatePlayer={this.updatePlayer}/>
      <Addplayer addPlayer={this.addplayer} />
      </div>
    );
  }
}

export default App;
