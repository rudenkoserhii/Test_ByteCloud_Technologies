import { refs } from "./refs.js";
import { onRedClick } from "./onRedClick.js";

export function pointServers() {
  refs.link.style.pointerEvents = "none";
  refs.link.style.color = "rgb(211, 211, 211, 0.7)";
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
  refs.title.innerText =
    "Choose minimum two additional spots for ByteCloud and press ";
}