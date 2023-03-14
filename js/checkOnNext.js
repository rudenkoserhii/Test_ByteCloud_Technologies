import { refs } from "./refs.js";
import { pointServer } from "./pointServer.js";

export function checkOnNext() {
  const continents = [
    ...new Set(
      Array.from(refs.devices)
        .filter((device) => device.classList.contains("active"))
        .map((device) => device.className.split(" ")[2])
    ),
  ];

  if (continents.length > 4) {
    pointServer();
  }
}
