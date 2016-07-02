'use strict';
var UpdateNodes = require('../packet/UpdateNodes');
var heart;

heart = setTimeout(function() {
      process.exit();
    },5000);
process.on('message', (m) => {
  if (m == "j") {
    clearTimeout(heart)
    heart = setTimeout(function() {
      process.exit();
    },5000);
    return;
  }
  if (m.action == "updatenodes") {
var un = new UpdateNodes(m.destroyQueue,m.nodes,m.nonVisibleNodes, m.scrambleX, m.scrambleY, m.gameServer);   
    var send = {
processID: m.processID,
action: m.action,
buf = un.build(),

}
process.send(send);
return;
  } else {
  
  var collisionCheck2 = function (objectSquareSize, objectPosition,check) {
  // IF (O1O2 + r <= R) THEN collided. (O1O2: distance b/w 2 centers of cells)
  // (O1O2 + r)^2 <= R^2
  // approximately, remove 2*O1O2*r because it requires sqrt(): O1O2^2 + r^2 <= R^2

  var dx = check.position.x - objectPosition.x;
  var dy = check.position.y - objectPosition.y;
  if (m.config.playerRecombineTime == 0) {
    return (dx * dx + dy * dy + check.SquareSize <= objectSquareSize);
  } else {
    return (dx * dx + dy * dy <= objectSquareSize);
  }
};
   let list = [];
    let squareR = m.SquareSize; // Get cell squared radius

    // Loop through all cells that are visible to the cell. There is probably a more efficient way of doing this but whatever
    m.cells.forEach((check)=> {
      // exist?
      // if something already collided with this cell, don't check for other collisions
      // Can't eat itself
      if (!check || check.inRange || m.id === check.id) return;

      // Can't eat cells that have collision turned off
      if ((m.owner.id === check.owner.id) && (m.ignoreCollision)) return;

      // AABB Collision
      if (!collisionCheck2(squareR, m.position,check)) return;

      // Cell type check - Cell must be bigger than this number times the mass of the cell being eaten
      let multiplier = m.config.sizeMult;

      switch (check.type) {
        case 1: // Food cell
          list.push(check.id);
          check.inRange = true; // skip future collision checks for this food
          return;
        case 2: // Virus
          multiplier = m.config.VsizeMult;
          break;
        case 5: // Beacon
          // This cell cannot be destroyed
          return;
        case 0: // Players
          // Can't eat self if it's not time to recombine yet
          if (check.owner.id === m.owner.id) {
            if ((!m.shouldRecombine || !check.shouldRecombine) && !m.owner.recombineinstant) {
              return;
            }
            multiplier = 1.00;
          }
          // Can't eat team members
          if (m.haveTeams) {
            if (!check.owner && (check.owner !== m.owner) && (check.owner.team === m.owner.team)) {
              return;
            }
          }
          break;
        
      }

      // Make sure the cell is big enough to be eaten.
      if ((check.mass * multiplier) > m.mass) return;

      // Eating range
      let xs = Math.pow(check.position.x - m.position.x, 2);
      let ys = Math.pow(check.position.y - m.position.y, 2);
      let dist = Math.sqrt(xs + ys);

      let eatingRange = m.size - check.eatingRange; // Eating range = radius of eating cell + 40% of the radius of the cell being eaten

      // Not in eating range
      if (dist > eatingRange) return;

      // Add to list of cells nearby
      list.push(check.id);

      // Something is about to eat this cell; no need to check for other collisions with it
      check.inRange = true;
    });
var send = {
processID: m.processID,
action: m.action,
list: list,
}
   process.send(send);
  
  }
  
});

