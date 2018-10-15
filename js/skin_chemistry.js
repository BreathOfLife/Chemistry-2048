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
      inner.textContent = "Undiscovered Element w/ 128 protons";
      break;
    case 512:
      inner.textContent = "Undiscovered Element w/ 256 protons";
      break;
    case 1024:
      inner.textContent = "Undiscovered Element w/ 512 protons";
      break;
    case 2048:
      inner.textContent = "Undiscovered Element w/ 1024 protons";
      break;
    case 4096:
      inner.textContent = "Undiscovered Element w/ 2048 protons";
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
	var x = document.createElement("FORM");
    x.setAttribute("id","devInputForm");
    document.body.appendChild(x)
    var y = document.createElement("INPUT");
    y.setAttribute("type", "text");
    y.setAttribute("value", "");
    y.setAttribute("id","devInput");
    document.x.appendChild(y);
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
		  case addTile:
			  //code
			  break;
		  default:
			  responseP = "Unknown Command, sry man...";
	  }
  }
});
}
