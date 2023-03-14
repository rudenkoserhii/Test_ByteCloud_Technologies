import { refs } from "./refs.js";
import { pointServer } from "./pointServer.js";
import { countNet } from "./countNet.js";

export function onLinkClick(e) {

console.log('click onLink')

  if (e.target.innerText === "Next") {
    pointServer();
    refs.link.classList.remove("active");
  }
  if (
    e.target.innerText === "Start" &&
    Array.from(refs.servers).filter((server) =>
      server.classList.contains("active")
    ).length > 2
  ) {
    countNet();
  }
}
