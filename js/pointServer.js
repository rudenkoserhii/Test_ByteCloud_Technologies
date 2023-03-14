import { refs } from "./refs.js";
import { onBlueClick } from "./onBlueClick.js";
import { onManClick } from "./onManClick.js";

export function pointServer() {
  refs.title.innerText =
    "Where is your data? Choose one spot for Object Storage system...";
  refs.link.innerText = "";

  refs.men.forEach((man) => {
    man.classList.remove("active");
    man.removeEventListener("click", onManClick);
  });
  refs.circlesEmpty.forEach((circle) => {
    circle.classList.add("active");
    circle.addEventListener("click", onBlueClick);
  });

}
