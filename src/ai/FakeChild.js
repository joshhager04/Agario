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

module.exports = class FakeChild {
  constructor(gameServer) {
this.gameServer = gameServer;
};
killall() {
 
  
}
feedNearestVirus(gameServer,cell) {
  var v = gameServer.getNearestVirus(cell);
    if (v) { // Feeds the virus if it exists
      v.feed(cell, gameServer);
      return true;
    }
}
getnextid() {
return this.lastid ++;
}
heartbeat() {
  this.child.send("j")
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
