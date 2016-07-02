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
this.getCellsInRange = child.fork('core/getCellsInRange.js');
this.calcViewBox = child.fork('core/calcViewBox.js');
}
killall() {
  this.getCellsInRange.kill();
  this.calcViewBox.kill();
  
}
getCellsInRange(cell,gameServer) {
  var result = {
    cells: [],
    config: gameServer.config,
    owner: {
      id: cell.owner.pID,
      recombineinstant: cell.owner.recombineinstant,
      team: cell.owner.team,
    },
    SquareSize: cell.getSquareSize(),
  };
  cell.owner.visibleNodes.forEach((check)=> {
    var a = {
    mass: check.mass,
    id: check.getId(),
    position: check.position,
    mass: check.mass,
    owner: {
      id: check.owner.pID,
      recombineinstant: check.owner.recombineinstant,
      team: check.owner.team,
    },
    SquareSize: check.getSquareSize(),
    type: check.cellType,
    EatingRange: check.getEatingRange(),
    };
    result.cells.push(a);
  });
  this.getCellsInRange.send(result);
  this.getCellsInRange.on('message' ,(m)=>{
      m.forEach((che)=> {
        var check = gameServer.getWorld().getNodes().get(che);
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
    
  });
  
}



}
