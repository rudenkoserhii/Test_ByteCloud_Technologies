import { refs } from "./refs.js";
import { onManClick } from "./onManClick.js";
import { onLinkClick } from "./onLinkClick.js";

export function onClose() {

refs.btnClose.removeEventListener('click', onClose);
  refs.backdrop.classList.add("is-hidden");
refs.title.classList.add("active");
refs.title.disabled = false;
refs.title.style.pointerEvents = 'auto';
refs.title.style.opacity = '1';

  refs.men.forEach((man) => {
    man.classList.add("active");
    man.addEventListener("click", onManClick);
  });
  refs.title.textContent =
    "Choose...";
  refs.circlesEmpty.forEach((circle) => {
    circle.style.pointerEvents = "auto";
  });
  refs.servers.forEach((server) => {
    server.classList.remove("active", "red");
    server.setAttribute("src", "../images/files/Servers_blue.png");
  });
  refs.infos.forEach((info) => {
    info.childNodes[0].textContent = "";
  });

  refs.infosValue.forEach((infoValue) => {
    infoValue.textContent = "";
  });
refs.title.addEventListener('click', onLinkClick);
}
