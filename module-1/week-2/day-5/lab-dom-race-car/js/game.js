class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameOverScreen = document.getElementById("game-end");
    this.scoreElement = document.getElementById("score");
    this.livesElement = document.getElementById("lives");
    this.highScoresListElement = document.getElementById("high-scores");
    this.nameInputElement = document.getElementById("name-input");
    this.playerName = this.nameInputElement.value;
    this.player = new Player(
      this.gameScreen,
      85,
      400,
      125,
      180,
      "/images/car.png"
    );
    this.playerSpeed = 2;
    this.height = 600;
    this.width = 500;
    this.obstacles = [];
    this.goodObstacles = [];
    this.projectiles = [];
    this.score = 1;
    this.lives = 1;
    this.gameIsOver = false;
    this.gameIntervalId = null;
    this.gameLoopFrequency = Math.round(1000 / 60);
    this.counter = 0;
  }

  start() {
    //set the height and width of the game screen
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;
    //hide the start screen and show the game screen
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";
    this.gameIntervalId = setInterval(() => {
      this.gameLoop();
    }, this.gameLoopFrequency);
  }
  gameLoop() {
    // console.log("game loop");
    //create a counter variable that increases on every frame
    this.counter++;
    if (this.counter % 160 === 0) {
      this.obstacles.push(new Obstacle(this.gameScreen));
    }
    if (this.counter % 200 === 0) {
      this.goodObstacles.push(new GoodObstacle(this.gameScreen));
    }

    this.update();

    //inside the game loop we check if the game is over
    if (this.gameIsOver) {
      this.gameOver();
    }
  }
  update() {
    //this moves the player car
    this.player.move();
    //this moves all of the obstacles inside the this.obstacles array
    for (let i = 0; i < this.obstacles.length; i++) {
      const currentObstacle = this.obstacles[i];
      currentObstacle.move();
      //check if the obstacle is colliding with the player
      if (this.player.didCollide(currentObstacle)) {
        //remove the red car from the array in JS
        this.obstacles.splice(i, 1);
        i--;
        //dont forget to remove the img element from the html
        currentObstacle.element.remove();
        this.lives--;
        this.livesElement.innerText = this.lives;
        //after we subtract one life, we check if its zero
        if (this.lives === 0) {
          this.gameIsOver = true;
        }
        //this plays the horn sound on collision
        this.player.horn.play();
        //this is testing the spin class
        this.player.element.classList.add("spin");
        setTimeout(() => {
          //remove class spin after one second
          this.player.element.classList.remove("spin");
        }, 750);
      }

      //check if the red passes the blue...
      //first we get a point
      //then we cut the red car out of array
      if (currentObstacle.top > 650) {
        this.score++;
        this.scoreElement.innerText = this.score;
        //remove the red car from the array in JS
        this.obstacles.splice(i, 1);
        i--;
        //dont forget to remove the img element from the html
        currentObstacle.element.remove();
      }

      //this is where we start with the projectiles
      for (let j = 0; j < this.projectiles.length; j++) {
        const currentProjectile = this.projectiles[j];
        //every projectile has the didCollide method
        if (currentProjectile.didCollide(currentObstacle)) {
          this.obstacles.splice(i, 1);
          i--;
          //dont forget to remove the img element from the html
          currentObstacle.element.remove();
          //remove all of the projectile stuff too
          this.projectiles.splice(j, 1);
          j--;
          currentProjectile.element.remove();
        }
      }
    }

    //this is for the 'good' obstacles
    for (let i = 0; i < this.goodObstacles.length; i++) {
      const currentGoodObstacle = this.goodObstacles[i];
      currentGoodObstacle.move();
      //check if the obstacle is colliding with the player
      if (this.player.didCollide(currentGoodObstacle)) {
        //remove the red car from the array in JS
        this.goodObstacles.splice(i, 1);
        i--;
        //dont forget to remove the img element from the html
        currentGoodObstacle.element.remove();
        this.playerSpeed = 10;
        setTimeout(() => {
          this.playerSpeed = 2;
        }, 2000);
      }
    }

    //this is a loop just to move the projectiles
    for (let k = 0; k < this.projectiles.length; k++) {
      const currentProjectile = this.projectiles[k];
      currentProjectile.move();
    }
  }
  gameOver() {
    //stop the loop from running
    clearInterval(this.gameIntervalId);
    //hide the game screen
    this.gameScreen.style.display = "none";
    //show the game over screen
    this.gameOverScreen.style.display = "block";

    //logic for the high scores
    //this is with just the scores
    // const scoresInStorage = JSON.parse(localStorage.getItem("high-scores"));
    // if (scoresInStorage) {
    //   scoresInStorage.push(this.score);
    //   const topThreeScores = scoresInStorage.sort((a, b) => b - a).slice(0, 3);
    //   localStorage.setItem("high-scores", JSON.stringify(topThreeScores));
    // } else {
    //   localStorage.setItem("high-scores", JSON.stringify([this.score]));
    // }
    // const updatedScoresInStorage = JSON.parse(
    //   localStorage.getItem("high-scores")
    // );
    // updatedScoresInStorage.forEach((oneScore) => {
    //   const ourLiElement = document.createElement("li");
    //   ourLiElement.innerText = oneScore;
    //   this.highScoresListElement.appendChild(ourLiElement);
    // });

    //this is with objects and names
    const scoresInStorage = JSON.parse(localStorage.getItem("high-scores"));
    if (scoresInStorage) {
      scoresInStorage.push({ name: this.playerName, score: this.score });
      const topThreeScores = scoresInStorage
        .sort((a, b) => b.score - a.score)
        .slice(0, 3);
      localStorage.setItem("high-scores", JSON.stringify(topThreeScores));
    } else {
      localStorage.setItem(
        "high-scores",
        JSON.stringify([{ name: this.playerName, score: this.score }])
      );
    }
    const updatedScoresInStorage = JSON.parse(
      localStorage.getItem("high-scores")
    );
    updatedScoresInStorage.forEach((oneScoreObject) => {
      const ourLiElement = document.createElement("li");
      ourLiElement.innerText = `${oneScoreObject.name} ${oneScoreObject.score}`;
      this.highScoresListElement.appendChild(ourLiElement);
    });
  }
}
