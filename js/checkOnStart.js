import { refs } from "./refs.js";
import { countNet } from "./countNet.js";
import { onRedClick } from "./onRedClick.js";

export function checkOnStart() {
  if (
    Array.from(refs.servers).filter((server) =>
      server.classList.contains("active")
    ).length > 3
  ) {

// refs.circlesEmpty.forEach(circle => circle.removeEventListener('click', onRedClick))
    countNet();
  }
}
