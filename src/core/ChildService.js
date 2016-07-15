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
const FastMap = require("collections/fast-map");
module.exports = class ChildService {
  constructor(gameServer) {
    this.gameServer = gameServer;
this.child = child.fork('core/child.js');
this.count = 1;
this.onmsg();
this.lastid = 0;
this.idData = new FastMap();
};
killall() {
  this.child.kill();
  //this.calcViewBox.kill();
  
}
feedNearestVirus(gameServer,cell) {
  var id = this.getnextid();
  this.idData.set(id,cell);
  
  var tosend = {
    processID: id,
    action: "getnearestv",
    cell: {
      id: cell.getId(),
    position: cell.position,
    quadrant: cell.quadrant,
    },
    nodes: [],
  }
  gameServer.getWorld().getNodes('virus').forEach((node)=>{
   var a = {
    id: node.getId(),
    position: node.position,
    quadrant: node.quadrant,
   }
   tosend.nodes.push(a);
  });
  
  this.child.send(tosend);
}
getnextid() {
  var id = this.lastid ++;
  if (id > 100) this.lastid = 0;
return id
}
heartbeat() {
  this.child.send("j")
}
onmsg() {
this.child.on('message' ,(m)=>{
  var iddata = this.idData.get(m.processID);
  if (m.action == "getnearestv") {
    if (m.data) {
      var vnode = this.gameServer.getWorld().getNodes('virus').get(m.data)
      if (vnode) vnode.feed(iddata, this.gameServer);
    }
    
    
  } else 
  if (m.action == "updatenodes") {
    var player = iddata
    player.socket.sendPacket(m.buf,true);
    
    return;
  } else
if (m.action == "getcellsinrange") {
  var cell = iddata
  var client = cell.owner;
    m.list.forEach((che)=> {

        var check = this.gameServer.getWorld().getNodes().get(che);
if (!check) return;
        if (check.cellType === 0 && (client != check.owner) && (cell.mass < check.mass * this.gameServer.config.sizeMult) && this.gameServer.config.playerRecombineTime !== 0) { //extra check to make sure popsplit works by retslac
          check.inRange = false;
          return;
        }

        // Consume effect
        check.onConsume(cell, this.gameServer);

        // Remove cell
        check.setKiller(cell);
        this.gameServer.removeNode(check);
        
      });
    }
    this.idData.delete(m.processID);
  });
}
calcViewBox(player) {


};
updateNodes(destroyQueue, nodess, nonVisibleNodes, scrambleX, scrambleY, gameServer,player) {
var id = this.getnextid();
this.idData.set(id,player);

  var result = {
    processID: id,
    action: "updatenodes",
    destroyQueue: destroyQueue,
    nodes: nodess,
    nonVisibleNodes: nonVisibleNodes,
    scrambleX: scrambleX,
    scrambleY: scrambleY,
    gameServer: {
     config: gameServer.config,
      
    },
  };
  
  this.child.send(result);
}
getCellsInRange(cell,gameServer) {
var id = this.getnextid();
this.idData.set(id,cell);
var ncell = [];
cell.owner.visibleNodes.forEach((node)=>{ncell.push(node.getSimple())})
  var result = {
    cells: ncell,
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
 
  
this.child.send(result);
  
  
}



}
