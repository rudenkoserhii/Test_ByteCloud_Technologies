import { refs } from "./refs.js";
import { pointServers } from "./pointServers.js";

export function onBlueClick(e) {
  refs.circlesEmpty.forEach((circle) => {
    circle.removeEventListener("click", onBlueClick);
  });
  refs.servers.forEach((server) => {
    if (server.classList.contains(e.target.className.split(" ")[1])) {
      server.classList.add("active", "blue");
      server.setAttribute("src", "./Elements_Old/server_blue.png");
    }
  });
  refs.circlesEmpty.forEach((circle) => {
    if (circle.classList.contains(e.target.className.split(" ")[1])) {
      circle.classList.remove("active");
    }
  });
  refs.link.classList.add("active");
  refs.link.innerText = "Start";
  pointServers();
}
