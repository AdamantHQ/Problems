line("#1 Tooltip");

document.onmouseover = function(event) {

  if (event.target.dataset.tooltip) {

    let item = event.target;
    item.style.position = "relative";

    let tooltip = document.createElement("div");
    tooltip.innerHTML = item.dataset.tooltip;
    tooltip.className = "tooltip";

    // tooltip.style.visibility = "hidden";

    item.insertAdjacentElement("beforeEnd", tooltip);


    tooltip.style.minWidth = item.offsetWidth + "px";


    tooltip.style.top =
      item.getBoundingClientRect().top > tooltip.offsetHeight + 5 ?
      - tooltip.offsetHeight - 5 + "px" :
      item.offsetHeight + 5 + "px";

    tooltip.style.left =
      item.getBoundingClientRect().left < 0 ?
      window.pageXOffset - 5 + "px":
        "-5px";


    // tooltip.style.visibility = "";

    item.onmouseout = () => tooltip.remove();
  }
};