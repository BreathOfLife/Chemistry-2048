window.requestAnimationFrame(function () {
  var game = new GameManager(4, KeyboardInputManager, HTMLActuator, LocalScoreManager);
  game.actuator.addTile = function (tile) {
    var self = this;
    var wrapper   = document.createElement("div");
    var inner     = document.createElement("div");
    var position  = tile.previousPosition || { x: tile.x, y: tile.y };
    positionClass = this.positionClass(position);
    var classes = ["tile", "tile-" + tile.value, positionClass];
    this.applyClasses(wrapper, classes);
    inner.classList.add("tile-inner");
    switch (tile.value) {
    case 2:
      inner.textContent = "H";
      break;
    case 4:
      inner.textContent = "He";
      break;
    case 8:
      inner.textContent = "Be";
      break;
    case 16:
      inner.textContent = "O";
      break;
    case 32:
      inner.textContent = "S";
      break;
    case 64:
      inner.textContent = "Ge";
      break;
    case 128:
      inner.textContent = "Gd";
      break;
    case 256:
      inner.textContent = "Undiscovered \n Element of \n 128 \n Protons";
      break;
    case 512:
      inner.textContent = "Undiscovered \n Element of \n 256 \n Protons";
      break;
    case 1024:
      inner.textContent = "Undiscovered \n Element of \n 512 \n Protons";
      break;
    case 2048:
      inner.textContent = "Undiscovered \n Element of \n 1024 \n Protons";
      break;
    case 4096:
      inner.textContent = "Undiscovered \n Element of \n 2048 \n Protons";
      break;
    }
    if (tile.previousPosition) {
      window.requestAnimationFrame(function () {
        classes[2] = self.positionClass({ x: tile.x, y: tile.y });
        self.applyClasses(wrapper, classes);
      });
    } else if (tile.mergedFrom) {
      classes.push("tile-merged");
      this.applyClasses(wrapper, classes);
      tile.mergedFrom.forEach(function (merged) {
        self.addTile(merged);
      });
    } else {
      classes.push("tile-new");
      this.applyClasses(wrapper, classes);
    }
    wrapper.appendChild(inner);
    this.tileContainer.appendChild(wrapper);
    };
    game.restart();
});
function developerConsoleOpen() {
	var devConsoleDiv = document.getElementById("devConsoleDiv");
	var addTileActive = false;
	devButton = document.getElementById("devOpenButton");
	devButton.style.color = "black";
	devButton.style.background = "teal";
	var x = document.createElement("FORM");
    x.setAttribute("id","devInputForm");
    devConsoleDiv.appendChild(x)
    var y = document.createElement("INPUT");
    y.setAttribute("type", "text");
    y.setAttribute("value", "");
    y.setAttribute("id","devInput");
    x.appendChild(y);
  y.addEventListener("keyup", function(event) {
  // Cancel the default action, if needed
  event.preventDefault();
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    var x2 = document.getElementId("devInput");
    var command = document.forms["devInputForm"]["devInput"].value;
    x2.setAttribute("value", "");
	  var responseP = document.getElementId("devConsoleResponse").innerText;
	  switch (command) {
		  case addTile: //initial addTile
			  addTileActive = true;
			  responseP = "Enter the tile value that you want to be added";
			  
			  
			  break;
		  default:
			  if (addTileActive) {
				  GameManager.prototype.addRandomTile = function () {
  if (this.grid.cellsAvailable()) {
    var value = command;
    var tile = new Tile(this.grid.randomAvailableCell(), value);

    this.grid.insertTile(tile);
  }
};
			  }
			  else {
				  responseP = "Unknown Command, sry man...";
			  }
	  }
  }
});
}
