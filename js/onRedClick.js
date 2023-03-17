import { refs } from "./refs.js";
import { checkOnStart } from "./checkOnStart.js";

export function onRedClick(e) {
  refs.circlesEmpty.forEach((circle) => {
    if (circle.classList.contains(e.target.className.split(" ")[1])) {
      circle.classList.remove("active");
    }

  refs.circlesPushed.forEach((circle) => {
    if (circle.classList.contains(e.target.className.split(" ")[1])) {
      circle.classList.add("active");
    }
  });

setTimeout(() => {
  refs.circlesPushed.forEach((circle) => {
    if (circle.classList.contains(e.target.className.split(" ")[1])) {
      circle.classList.remove("active");
    }
  });
}, 200)

    refs.servers.forEach((server) => {
      if (server.classList.contains(e.target.className.split(" ")[1])) {
        server.classList.add("active");
      }
    });
    if (
      Array.from(refs.servers).filter((server) =>
        server.classList.contains("active")
      ).length > 2
    ) {
refs.title.disabled = false;
refs.title.style.pointerEvents = 'auto';
refs.title.style.opacity = '1';
    }
  });
}
