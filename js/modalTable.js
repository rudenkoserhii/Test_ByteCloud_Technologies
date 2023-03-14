import { refs } from "./refs.js";
import { onClose } from "./onClose.js";

export function modalTable(tableData) {
  refs.modalLeft.innerHTML = "";
  refs.modalRight.innerHTML = "";

  refs.backdrop.classList.remove("is-hidden");

  refs.linkModal.addEventListener("click", onClose);


  const qly1 = "4K/2160p Ultra HD";
  const qly2 = "10800p Full HD";
  const qly3 = "480p";
  const starFill = '<span class="starFill">&#9733</span>';
  const starEmpty = '<span class="starEmpty">&#9734</span>';

  Object.entries(tableData["0"]).forEach((el, i) => {
    const begin = `<tr class="table__firstRow">
    <th  class="table__cell--head" colspan="3">ByteCloud</th>
  </tr>`;
    const html = `<table class="table">
<thead class="table__header">
${i === 0 ? begin : ""}  
</thead>
<tbody class="table__body">
  <tr class="table__row">
    <td  class="table__cell--top" colspan="2">${el[0]}</td>
    <td  class="table__cell--top">${
      el[1]["Latency"] <= 80
        ? starFill + starFill + starFill + starFill + starFill
        : el[1]["Latency"] > 80 && el[1]["Latency"] <= 150
        ? starEmpty + starFill + starFill + starFill + starFill
        : el[1]["Latency"] > 150 && el[1]["Latency"] <= 220
        ? starEmpty + starEmpty + starFill + starFill + starFill
        : el[1]["Latency"] > 220 && el[1]["Latency"] <= 260
        ? starEmpty + starEmpty + starEmpty + starFill + starFill
        : el[1]["Latency"] > 260 && el[1]["Latency"] <= 300
        ? starEmpty + starEmpty + starEmpty + starEmpty + starFill
        : starEmpty + starEmpty + starEmpty + starEmpty + starEmpty
    }</td>
  </tr>
  <tr class="table__row">
    <td  class="table__cell">Latency</td>
    <td  class="table__cell">Download time</td>
    <td  class="table__cell">Video streaming</td>
  </tr>
  <tr class="table__row">
    <td  class="table__cell">${el[1]["Latency"]}</td>
    <td  class="table__cell">${el[1]["Download time"]} sec</td>
    <td  class="table__cell">${
      el[1]["Latency"] <= 100 ? qly1 : el[1]["Latency"] >= 200 ? qly3 : qly2
    }</td>
  </tr>
</tbody>
</table>`;
    refs.modalLeft.insertAdjacentHTML("beforeend", html);
  });

  Object.entries(tableData["1"]).forEach((el, i) => {
    const begin = `<tr class="table__firstRow">
    <th  class="table__cell--head" colspan="3">Object Storage</th>
  </tr>`;
    const html = `<table class="table">
<thead class="table__header">
${i === 0 ? begin : ""}  
</thead>
<tbody class="table__body">
  <tr class="table__row">
    <td  class="table__cell--top" colspan="2">${el[0]}</td>
    <td  class="table__cell--top">${
      el[1]["Latency"] <= 80
        ? starFill + starFill + starFill + starFill + starFill
        : el[1]["Latency"] > 80 && el[1]["Latency"] <= 150
        ? starEmpty + starFill + starFill + starFill + starFill
        : el[1]["Latency"] > 150 && el[1]["Latency"] <= 220
        ? starEmpty + starEmpty + starFill + starFill + starFill
        : el[1]["Latency"] > 220 && el[1]["Latency"] <= 260
        ? starEmpty + starEmpty + starEmpty + starFill + starFill
        : el[1]["Latency"] > 260 && el[1]["Latency"] <= 300
        ? starEmpty + starEmpty + starEmpty + starEmpty + starFill
        : starEmpty + starEmpty + starEmpty + starEmpty + starEmpty
    }</td>
  </tr>
  <tr class="table__row">
    <td  class="table__cell">Latency</td>
    <td  class="table__cell">Download time</td>
    <td  class="table__cell">Video streaming</td>
  </tr>
  <tr class="table__row">
    <td  class="table__cell">${el[1]["Latency"]}</td>
    <td  class="table__cell">${el[1]["Download time"]} sec</td>
    <td  class="table__cell">${
      el[1]["Latency"] <= 100 ? qly1 : el[1]["Latency"] >= 200 ? qly3 : qly2
    }</td>
  </tr>
</tbody>
</table>`;
    refs.modalRight.insertAdjacentHTML("beforeend", html);
  });
}