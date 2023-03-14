import { refs } from "./refs.js";

export function continents(array) {
  return [
    ...new Set(
      Array.from(refs.devices)
        .map((device) => device.className.split(" ")[2])
        .filter((continent) =>
          array.some((name) => continent === name.split(", ")[0].split("_")[2])
        )
    ),
  ];
}