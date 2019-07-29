import React, { Component } from 'react'

const Player=({players,deleteaplayer,changeMode,currentMode,updatePlayer}) =>{
  let textInput = React.createRef();
  const playerslength =players.length
    const playerlist= players.map(player =>{
    if(playerslength>0){
      return(
        player.EditMode ?
        <div key={player.playerid}> <input type="text" ref={textInput} defaultValue={player.playername}/>
        <button onClick={()=>{changeMode(player.playerid)}}>X</button>
        <button onClick={()=>{updatePlayer(player.playerid,textInput.current.value)}}>update</button>
         </div>:
         <div>
         <div key={player.playerid} onClick={()=>{changeMode(player.playerid)}} >{player.playername}</div>
         <div><button onClick= {deleteaplayer.bind(this,player.playerid)} >Remove</button></div>
        </div>
      )
    }
  return player
})
    return (
      <div className="addplayer">
        <div className="header">
        <p>hello! Add your Team Players</p>{playerlist}
        </div>
      </div>
    )

}
export default Player