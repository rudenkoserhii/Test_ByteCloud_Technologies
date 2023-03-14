import { refs } from "./refs.js";
import { onRedClick } from "./onRedClick.js";

export function pointServers() {
  refs.circlesEmpty.forEach((circle) => {
    if (
      !circle.classList.contains(
        Array.from(refs.servers)
          .filter((server) => server.classList.contains("active"))[0]
          .className.split(" ")[0]
      )
    ) {
      circle.addEventListener("click", onRedClick);
    }
  });
}