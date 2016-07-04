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
  let client = cell.owner;
      cell.calcMove(client.mouse.x, client.mouse.y, gameServer);

      // Check if cells nearby
      let list = gameServer.getCellsInRange(cell);
      list.forEach((check)=> {
        if (check.cellType === 0 && (client != check.owner) && (cell.mass < check.mass * gameServer.config.sizeMult) && gameServer.config.playerRecombineTime !== 0) { //extra check to make sure popsplit works by retslac
          check.inRange = false;
          return;
        }

        // Consume effect
        check.onConsume(cell, gameServer);

        // Remove cell
        check.setKiller(cell);
        gameServer.removeNode(check);
        
      });
  
}



}
