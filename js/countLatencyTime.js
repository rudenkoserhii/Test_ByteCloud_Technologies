import { distances } from "./distances.js";
import { refs } from "./refs.js";
import { continents } from "./continents.js";
import { clean } from "./clean.js";
import { modalTable } from "./modalTable.js";

export function countLatencyTime(latencyArray, maxArray, table) {
  let tableData = table;
  maxArray
    ? (refs.title.innerText = "ByteCloud...")
    : (refs.title.innerText = "Object Storage...");

  let data = {};
  continents(latencyArray).forEach((continent) => {
    let count = 0;
    let sumLatency = 0;
    let averageLatency = 0;
    let time = [];
    latencyArray.forEach((name) => {
      if (continent === name.split(", ")[0].split("_")[2]) {
        count += 1;
        sumLatency += Number(name.split(", ")[1]);
        averageLatency = Math.floor(sumLatency / count);
        time.push(Math.floor(Number(name.split(", ")[1]) * 5));
      }
    });
    data[continent] = Object.fromEntries([
      ["Download time", Number(time.sort((a, b) => b - a)[0])],
      ["Latency", averageLatency],
    ]);
    refs.infos.forEach((info) => {
      if (info.classList.contains(continent)) {
        info.classList.add("active");
        info.childNodes[0].textContent = "Latency: ";
      }
    });
    refs.infosValue.forEach((infoValue) => {
      if (infoValue.classList.contains(continent)) {
        infoValue.textContent = averageLatency;
      }
    });
  });
  latencyArray.forEach((name) => {
    refs.devicesDisplay.forEach((display) => {
      if (
        display.className.split(" ")[2] === name.split(", ")[0].split("_")[2] &&
        display.className.split(" ")[1].split("--")[1] ===
          name.split(", ")[0].split("_")[3]
      ) {
        display.classList.add("active");
        const unit = Number(display.style.width.slice(0, -2));
        const realWidth = unit * 100;

        display.style.width = "0px";
        const width = Number(display.style.width.slice(0, -2) * 100);

        let interval = setInterval(
          (function (width) {
            return function () {
              width += unit;

              display.style.width = `${width / 100}px`;
              if (
                Number(display.style.width.slice(0, -2) * 100) === realWidth
              ) {
                if (
                  data[`${display.className.split(" ")[2]}`][
                    "Download time"
                  ] ===
                  Math.floor(distances[`${name.split(", ")[0].slice(4)}`] * 5)
                ) {
                  refs.infos.forEach((info) => {
                    if (
                      info.classList.contains(display.className.split(" ")[2])
                    ) {
                      info.childNodes[0].textContent = "Time: ";
                    }
                  });

                  refs.infosValue.forEach((infoValue) => {
                    if (
                      infoValue.className.split(" ")[1] ===
                      display.className.split(" ")[2]
                    ) {
                      infoValue.textContent =
                        data[`${display.className.split(" ")[2]}`][
                          "Download time"
                        ] + " sec";
                    }
                  });
                }
                clearInterval(interval);
              }
            };
          })(0),
          Math.floor((Number(name.split(", ")[1]) * 20) / 100)
        );
      }
    });
    refs.arrows.forEach((arrow) => {
      if (arrow.classList.contains(name.split(", ")[0].slice(4))) {
        arrow.classList.add("active");
      }
    });
  });
  tableData.push(data);
  if (maxArray) {
    setTimeout(() => {
      clean(["infos", "arrows", "devicesDisplay"]);
      refs.infos.forEach((info) => (info.childNodes[0].textContent = ""));
      refs.infosValue.forEach((infoValue) => (infoValue.textContent = ""));
      countLatencyTime(maxArray, null, tableData);
    }, latencyArray.map((el) => Number(el.split(", ")[1]) * 20).sort((a, b) => b - a)[0] + 200);
  } else {
    setTimeout(() => {
      clean(["title", "infos", "arrows", "devicesDisplay", "devices", "servers"]);
      modalTable(tableData);
      tableData = [];
    }, latencyArray.map((el) => Number(el.split(", ")[1]) * 20).sort((a, b) => b - a)[0] + 200);
  }
}