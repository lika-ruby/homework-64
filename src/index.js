import { cars } from "./js/data.js";
import { createTemplate } from "./js/template.js";
const listElement = document.querySelector(".list");

let textList = "";
textList = createTemplate(textList, cars);
listElement.innerHTML = textList;
