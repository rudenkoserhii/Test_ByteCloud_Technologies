import { refs } from "./refs.js";
import { onManClick } from "./onManClick.js";
import { onLinkClick } from "./onLinkClick.js";

export function onClose() {
  refs.linkModal.removeEventListener("click", onClose);
  refs.backdrop.classList.add("is-hidden");
  refs.men.forEach((man) => {
    man.classList.add("active");
    man.addEventListener("click", onManClick);
  });
  refs.title.classList.add("active");
  refs.title.textContent =
    "Where are your users? Choose the number for every region. ";
  refs.link.addEventListener("click", onLinkClick);
  refs.link.textContent = "Next";
  refs.link.style.pointerEvents = "auto";
  refs.link.style.color = "blue";
  refs.circlesEmpty.forEach((circle) => {
    circle.style.pointerEvents = "auto";
  });
  refs.servers.forEach((server) => {
    server.classList.remove("active", "blue");
    server.setAttribute("src", "./Elements_Old/server.png");
  });
  refs.infos.forEach((info) => {
    info.childNodes[0].textContent = "";
  });

  refs.infosValue.forEach((infoValue) => {
    infoValue.textContent = "";
  });
}
