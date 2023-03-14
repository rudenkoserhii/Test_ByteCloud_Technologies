import { refs } from "./refs.js";
import { onBlueClick } from "./onBlueClick.js";
import { onManClick } from "./onManClick.js";

export function pointServer() {
  refs.title.innerText =
    "Select servers";
refs.title.disabled = true;
refs.title.style.pointerEvents = 'none';
  refs.men.forEach((man) => {
    man.classList.remove("active");
    man.removeEventListener("click", onManClick);
  });
  refs.circlesEmpty.forEach((circle) => {
    circle.classList.add("active");
    circle.addEventListener("click", onBlueClick);
  });

}
