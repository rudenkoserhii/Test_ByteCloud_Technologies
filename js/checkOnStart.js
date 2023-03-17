import { refs } from "./refs.js";
import { countNet } from "./countNet.js";

export function checkOnStart() {
  if (
    Array.from(refs.servers).filter((server) =>
      server.classList.contains("active")
    ).length > 3
  ) {
    countNet();
  }
}
