var enemyYPositions = [0, -50, -75, -120, -250, -280, -305, -330, -340, -400, -425, -450, -500, -520, -550];
var enemyXPositions = [250, 130, 300, 50, 190, 200, 220, 60, 100, 110, 30, 300, 150, 190, 90];
var avatarX = 0;
var avatarY = 0;
var avatarImage;
var enemyImage;
 
 
function setUpGame() {
    var gameCanvas = document.getElementById("gameCanvas");
    avatarImage = new Image();
    enemyImage = new Image();
    enemyImage.src = "img/defender.png";
    avatarImage.src = "img/player.png";
     
    gameCanvas.getContext("2d").drawImage(avatarImage, Math.random() * 100, Math.random() * 100);
     
    gameCanvas.addEventListener("mousemove", handleMouseMovement);
    setInterval(handleTick, 25);
}
 
function handleMouseMovement(mouseEvent) {
    avatarX = mouseEvent.offsetX;
    avatarY = mouseEvent.offsetY;
     
    if (mouseEvent.offsetX > 220 && mouseEvent.offsetX < 280 && mouseEvent.offsetY > 117 && mouseEvent.offsetY < 180) {
      alert("You hit the enemy!");
    }
}
 
function handleTick() {
    var gameCanvas = document.getElementById("gameCanvas");
    var currentEnemyNumber = 0;
    var numberOfEnemies = enemyXPositions.length;
 
    while (currentEnemyNumber < numberOfEnemies) {
        enemyYPositions[currentEnemyNumber] = enemyYPositions[currentEnemyNumber] + 1;
        currentEnemyNumber = currentEnemyNumber + 1;
    }
     
    gameCanvas.width = 400;     //this erases the contents of the canvas
    gameCanvas.getContext("2d").drawImage(avatarImage, avatarX, avatarY);
     
    currentEnemyNumber = 0;
    while (currentEnemyNumber < numberOfEnemies) {
        gameCanvas.getContext("2d").drawImage(enemyImage, enemyXPositions[currentEnemyNumber], enemyYPositions[currentEnemyNumber]);
        currentEnemyNumber = currentEnemyNumber + 1;
    }
	if ( ( (avatarX < enemyXPositions[0] && enemyXPositions[0] < avatarX + 30) || (enemyXPositions[0] < avatarX && avatarX < enemyXPositions[0] + 30) ) && ( (avatarY < enemyYPositions[0] && enemyYPositions[0] < avatarY + 33) || (enemyYPositions[0] < avatarY && avatarY < enemyYPositions[0] + 30) ) ) {
        alert("You hit the first enemy!");
    }
	currentEnemyNumber = 0;
while (currentEnemyNumber < numberOfEnemies) {
    if ( ( (avatarX < enemyXPositions[currentEnemyNumber] && enemyXPositions[currentEnemyNumber] < avatarX + 30) || (enemyXPositions[currentEnemyNumber] < avatarX && avatarX < enemyXPositions[currentEnemyNumber] + 30) ) && ( (avatarY < enemyYPositions[currentEnemyNumber] && enemyYPositions[currentEnemyNumber] < avatarY + 33) || (enemyYPositions[currentEnemyNumber] < avatarY && avatarY < enemyYPositions[currentEnemyNumber] + 30) ) ) {
        alert("You hit an enemy!");
    }
    currentEnemyNumber = currentEnemyNumber + 1;
}
}