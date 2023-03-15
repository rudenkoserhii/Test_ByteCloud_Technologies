import { refs } from "./refs.js";
import { pointServer } from "./pointServer.js";
import { countNet } from "./countNet.js";
import { clean } from "./clean.js";
import { onClose } from "./onClose.js";

export function onLinkClick(e) {

  if (e.target.innerText === "Next") {

    pointServer();
  }
  if (
    e.target.innerText === "Start" &&
    Array.from(refs.servers).filter((server) =>
      server.classList.contains("active")
    ).length > 2
  ) {
refs.title.disabled = true;
refs.title.style.pointerEvents = 'none';
refs.title.style.opacity = '0.5';
    countNet('first');
  }

  if (
    e.target.innerText === "Check Default"
  ) {
      clean(["infos", "arrows", "devicesDisplay"]);
      refs.infos.forEach((info) => (info.childNodes[0].textContent = ""));
      refs.infosValue.forEach((infoValue) => (infoValue.textContent = ""));
refs.title.disabled = true;
refs.title.style.pointerEvents = 'none';
refs.title.style.opacity = '0.5';

    countNet('second');
  }
  if (
    e.target.innerText === "Get Results"
  ) {
      clean(["title", "infos", "arrows", "devicesDisplay", "devices", "servers"]);
    countNet('third');
  }



}
