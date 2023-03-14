import { refs } from "./refs.js";

export function clean(toclean) {
  toclean.forEach((clean) => {
    if (clean === "title") {
      refs[clean].classList.remove("active");
    } else {
      refs[clean].forEach((element) => element.classList.remove("active"));
    }
  });
}