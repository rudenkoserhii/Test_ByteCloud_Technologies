import { refs } from "./refs.js";
import { checkOnNext } from "./checkOnNext.js";

export function onManClick(e) {
  refs.title.innerText =
    "Next";
refs.title.disabled = false;
refs.title.style.pointerEvents = 'auto';
refs.title.style.opacity = '1';

  refs.men.forEach((man) => {
    if (
      "man__image--big" === e.target.className.split(" ")[1] &&
      man.className.split(" ")[2] === e.target.className.split(" ")[2]
    ) {
      refs.men.forEach((man) => {
        if (man.className.split(" ")[2] === e.target.className.split(" ")[2]) {
          man.classList.remove("active");
        }
      });
      refs.devices.forEach((device) => {
        if (
          man.className.split(" ")[2] === e.target.className.split(" ")[2] &&
          device.className.split(" ")[2] === e.target.className.split(" ")[2]
        ) {
          device.classList.add("active");
        }
      });
    }
    if (
      "man__image--medium" === e.target.className.split(" ")[1] &&
      man.className.split(" ")[2] === e.target.className.split(" ")[2]
    ) {
      refs.men.forEach((man) => {
        if (man.className.split(" ")[2] === e.target.className.split(" ")[2]) {
          man.classList.remove("active");
        }
      });
      refs.devices.forEach((device) => {
        if (
          man.className.split(" ")[2] === e.target.className.split(" ")[2] &&
          device.className.split(" ")[2] === e.target.className.split(" ")[2] &&
          !device.classList.contains("device__image--large")
        ) {
          device.classList.add("active");
        }
      });
    }
    if (
      "man__image--small" === e.target.className.split(" ")[1] &&
      man.className.split(" ")[2] === e.target.className.split(" ")[2]
    ) {
      refs.men.forEach((man) => {
        if (man.className.split(" ")[2] === e.target.className.split(" ")[2]) {
          man.classList.remove("active");
        }
      });
      refs.devices.forEach((device) => {
        if (
          man.className.split(" ")[2] === e.target.className.split(" ")[2] &&
          device.className.split(" ")[2] === e.target.className.split(" ")[2] &&
          device.classList.contains("device__image--small")
        ) {
          device.classList.add("active");
        }
      });
    }
  });

  checkOnNext();
}