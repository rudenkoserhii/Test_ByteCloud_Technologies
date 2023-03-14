// import { distances } from "./distances.js";
import { refs } from "./refs.js";
import { onManClick } from "./onManClick.js";
// import { checkOnNext } from "./checkOnNext.js";
import { onLinkClick } from "./onLinkClick.js";
// import { pointServer } from "./pointServer.js";
// import { pointServers } from "./pointServers.js";
// import { checkOnStart } from "./checkOnStart.js";


refs.men.forEach((man) => man.addEventListener("click", onManClick));
refs.link.addEventListener("click", onLinkClick);
















