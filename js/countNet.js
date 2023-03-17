import { refs } from "./refs.js";
import { distances } from "./distances.js";
import { countLatencyTime } from "./countLatencyTime.js";
import { onRedClick } from "./onRedClick.js";

export function countNet(value) {
  refs.circlesEmpty.forEach((circle) => {
    circle.classList.remove("active");
    circle.style.pointerEvents = "none";
    circle.removeEventListener("click", onRedClick);
  });

  let maxArray = [];

  refs.devices.forEach((device) => {
    if (device.classList.contains("active")) {
      maxArray.push(
        `arc_${
          Array.from(refs.servers)
            .filter((server) => server.classList.contains("red"))[0]
            .className.split(" ")[0]
        }_${device.className.split(" ")[2]}_${
          device.className.split(" ")[1].split("--")[1]
        }` +
          ", " +
          distances[
            `${
              Array.from(refs.servers)
                .filter((server) => server.classList.contains("red"))[0]
                .className.split(" ")[0]
            }_${device.className.split(" ")[2]}_${
              device.className.split(" ")[1].split("--")[1]
            }`
          ]
      );
    }
  });

  const minArray = [
    ...Array.from(refs.devices)
      .filter((device) => device.classList.contains("active"))
      .map(
        (device) =>
          (device = Array.from(refs.servers)
            .filter((server) => server.classList.contains("active"))
            .map(
              (server) =>
                (server =
                  `arc_${server.className.split(" ")[0]}_${
                    device.className.split(" ")[2]
                  }_${device.className.split(" ")[1].split("--")[1]}` +
                  ", " +
                  distances[
                    `${server.className.split(" ")[0]}_${
                      device.className.split(" ")[2]
                    }_${device.className.split(" ")[1].split("--")[1]}`
                  ])
            )
            .sort((a, b) => a.split(", ")[1] - b.split(", ")[1])[0])
      ),
  ];

  if (value === "first") {
    countLatencyTime("first", minArray);
  }

  if (value === "second") {
    countLatencyTime("second", maxArray);
  }

  if (value === "third") {
    countLatencyTime("third", []);
  }
}
