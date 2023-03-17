import { refs } from "./refs.js";
import { onClose } from "./onClose.js";
import { onLinkClick } from "./onLinkClick.js";

export function modalTable(tableData) {
  refs.modalLeft.innerHTML = "";
  refs.modalRight.innerHTML = "";

  refs.backdrop.classList.remove("is-hidden");
  refs.title.removeEventListener("click", onLinkClick);
  refs.title.classList.remove("active");
  refs.title.style.opacity = "0";

  refs.btnClose.addEventListener("click", onClose);

  const qly1 = "4K/2160p Ultra HD";
  const qly2 = "1080p Full HD";
  const qly3 = "750p HD ready";
  const qly4 = "480p";
  const starFill =
    '<div><img class="star2" src="../images/files/star2.png" alt="Star filled yellow" width="12px" height="12px"/></div>';
  const starEmpty =
    '<div><img class="star1" src="../images/files/star1.png" alt="Star empty yellow" width="12px" height="12px"/></div>';
  tableData.forEach((table, index) => {
    Object.entries(table).forEach((el, i) => {
      const begin = `<p class="table__cell--head">${
        index === 0 ? "ByteCloud" : "Object Storage"
      }</p>`;
      const html = `<table class="table">
<thead class="table__header">
${i === 0 ? begin : ""}  
</thead>
<tbody class="table__body">
  <tr class="table__row">
    <td  class="table__cell--top" colspan="2">${el[0]}</td>
  </tr>
  <tr class="table__row">
    <td  class="table__cell--top table__cell--star" colspan="2"><div class="star">${
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
    }</div></td>
  </tr>
  <tr class="table__row">
    <td  class="table__cell">Latency: <span class="answer">${
      el[1]["Latency"]
    }</span></td>
    <td  class="table__cell">Download time: <span class="answer">${
      el[1]["Download time"]
    } sec</span></td>
  </tr>
  <tr class="table__row">
    <td  class="table__cell" colspan="2">Video streaming: <span class="answer">${
      el[1]["Latency"] <= 100
        ? qly1
        : el[1]["Latency"] >= 200
        ? qly3
        : el[1]["Latency"] >= 250
        ? qly2
        : qly1
    }</span></td>
  </tr>
</tbody>
</table>`;

      index === 0
        ? refs.modalLeft.insertAdjacentHTML("beforeend", html)
        : refs.modalRight.insertAdjacentHTML("beforeend", html);
    });
  });
}
