'use strict';
/*
Proverbs 20:18:
   Bread obtained by falsehood is sweet to a man, But afterward his mouth will be filled with gravel.
We worked really hard for this project. Although we dont care if you enhance it and publish, we would care
if you copy it and claim our work as your own. Although it might feel good, to take the credit, you would ultimatly
regret it. But please feel free to change the files and publish putting your name up as well as ours.
We will also not get into legalities. but please dont take advantage that we dont use
legalities. Instead, treat us with respect like we treat you. 
Sincerely
The AJS Dev Team.
*/
const fs = require("fs");
const child = require('child_process');

module.exports = class ChildService {
  constructor() {
this.child = child.fork('core/child.js');
this.count = 1;
this.onmsg();
this.lastid = 0;
this.idData = [];
};
killall() {
  this.child.kill();
  //this.calcViewBox.kill();
  
}
getnextid() {
return this.lastid ++;
}
heartbeat() {
  this.child.send("j")
}
onmsg() {
this.child.on('message' ,(m)=>{
if (m.action == "getcellsinrange") {
  var cell = this.idData[m.processID];
    m.list.forEach((che)=> {

        var check = this.gameServer.getWorld().getNodes().get(che);
if (!check) return;

        if (check.cellType === 0 && (client != check.owner) && (cell.mass < check.mass * this.config.sizeMult) && this.config.playerRecombineTime !== 0) { //extra check to make sure popsplit works by retslac
          check.inRange = false;
          return;
        }

        // Consume effect
        check.onConsume(cell, gameServer);

        // Remove cell
        check.setKiller(cell);
        gameServer.removeNode(check);
        
      });
this.idData[m.processID] = null;
    }
  });
}
calcViewBox(player) {


};
updateNodes(destroyQueue, nodes, nonVisibleNodes, scrambleX, scrambleY, gameServer,player) {
var id = this.getnextid();
this.idData[id] = player;

  var result = {
    cells: [],
    processID: id,
    action: "getcellsinrange",
    destroyQueue: destroyQueue
    nodes: nodes
    nonVisibleNodes: nonVisibleNodes
    scrambleX: scrambleX
    scrambleY: scrambleY
    gameServer:
  };
}
getCellsInRange(cell,gameServer) {
var id = this.getnextid();
this.idData[id] = cell;
  var result = {
    cells: [],
    processID: id,
    action: "getcellsinrange",
    config: gameServer.config,
    mass: cell.mass,
    id: cell.getId(),
    haveTeams: gameServer.gameMode.haveTeams,
    position: cell.position,
    mass: cell.mass,
    SquareSize: cell.getSquareSize(),
    type: cell.cellType,
    EatingRange: cell.getEatingRange(),
    owner: {
      id: cell.owner.pID,
      recombineinstant: cell.owner.recombineinstant,
      team: cell.owner.team,
    },
    SquareSize: cell.getSquareSize(),
  };
  cell.owner.visibleNodes.forEach((check)=> {
if (!check) return;
    var a = {
    mass: check.mass,
    id: check.getId(),
    position: check.position,
    mass: check.mass,
    owner: [],
    SquareSize: check.getSquareSize(),
    type: check.cellType,
    EatingRange: check.getEatingRange(),
    };
    if (check.owner) {
      a.owner = {
      id: check.owner.pID,
      recombineinstant: check.owner.recombineinstant,
      team: check.owner.team,
      };
    }
    result.cells.push(a);
  });
  
this.child.send(result);
  
  
}



}
