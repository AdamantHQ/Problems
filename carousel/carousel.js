line("<h1>Carousel</h1>");

line("#1 Hide on click");

class DropDownList {
  constructor(settings) {

    this.blockName = settings.blockName;
    this.block = document.getElementsByClassName(settings.blockName)[0];
    this.elemTitle = this.block.getElementsByClassName("title")[0];
    this.elemList = this.block.getElementsByClassName(`${settings.blockName}__list`)[0];

    this.elemTitle.onclick = this.toggle.bind(this);
  }

  toggle() {
    this.elemTitle.classList.toggle("title--opened");
    this.elemList.classList.toggle(`${this.blockName}__list--opened`);
  }
}



class Carousel extends DropDownList {
  constructor(settings) {
    super(settings);
    this.inner = document.getElementsByClassName(`${settings.blockName}__inner`)[0];
    this.arrows = this.block.getElementsByClassName(`${settings.blockName}__arrow`);
    this.itemWidth = parseInt(getComputedStyle(this.elemList).blockSize);


    for (let arrow of this.arrows) {
      arrow.addEventListener("click", () => {
        this.move(
          arrow.classList.contains("carousel__arrow--big") ?
            3 :
            1,
          arrow.classList.contains("carousel__arrow--left") ?
            1 :
            -1
        )
      });
    }
  }

  toggle() {
    this.elemTitle.classList.toggle("title--opened");
    this.inner.classList.toggle(`${this.blockName}__inner--opened`);
  }

  move(steps, factor) {
    let leftNew = parseInt(getComputedStyle(this.elemList).left) + steps * factor * this.itemWidth;
    let leftMax = 0;
    let leftMin = - (this.elemList.children.length - 3) * this.itemWidth;

    if (leftNew >= leftMax) leftNew = leftMax;
    if (leftNew < leftMin) leftNew = leftMin;

    this.elemList.style.left = leftNew + "px";
  }


}

let menu = new DropDownList({
  blockName: "sweets"
});

let carousel = new Carousel({
  blockName: "carousel"
});


menu.toggle();
