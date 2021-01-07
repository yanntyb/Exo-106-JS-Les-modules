import * as utils from "./HTML.js";

document.getElementById("result").append(utils.createDiv("text"));
document.getElementById("result").append(utils.createLabel("email"));
document.getElementById("result").append(utils.createInput("email","email"))

document.getElementById("result").append(utils.createLabel("mdp"));
document.getElementById("result").append(utils.createInput("password","password"))