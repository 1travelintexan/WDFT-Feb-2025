class GoodObstacle {
  constructor(gameScreen) {
    this.possibleImages = [
      "../images/gas.png",
      "../images/oil.png",
      "../images/gas.png",
    ];
    this.left = Math.floor(Math.random() * (500 - 20 + 1) + 20);
    this.top = -300;
    this.width = 75;
    this.height = 75;
    this.randomImageIndex = Math.floor(
      Math.random() * this.possibleImages.length
    );
    this.element = document.createElement("img");
    this.element.src = this.possibleImages[this.randomImageIndex];
    this.element.style.position = "absolute";
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    gameScreen.appendChild(this.element);
  }
  move() {
    this.top += 6;
    this.updatePosition();
  }
  updatePosition() {
    this.element.style.top = `${this.top}px`;
  }
}
