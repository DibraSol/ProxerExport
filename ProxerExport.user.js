// ==UserScript==
// @name        ProxerExport
// @version     1.0
// @description Export your Proxer-Lists.
// @author      PryosCode
// @namespace   https://github.com/PryosCode/ProxerExport
// @website     https://github.com/PryosCode/ProxerExport
// @supportURL  https://github.com/PryosCode/ProxerExport/issues
// @icon        https://github.com/PryosCode/ProxerExport/raw/master/images/logo.png
// @updateURL   https://github.com/PryosCode/ProxerExport/raw/master/ProxerAutoWatchlist.meta.js
// @downloadURL https://github.com/PryosCode/ProxerExport/raw/master/ProxerAutoWatchlist.user.js
// @license     AGPL-3.0
// @copyright   Copyright (C) 2020 PryosCode
// @run-at      document-end
// @match       https://proxer.me/*
// ==/UserScript==

setInterval(function () {
    if (document.getElementById("ProxerExport") == null) {
        main();
    }
}, 100);

function main() {
    if(location.href.includes("ucp?s=anime")) {
        addButton("animelist");
    } else if(location.href.includes("ucp?s=manga")) {
        addButton("mangalist");
    } else if(location.href.includes("ucp?s=novel")) {
        addButton("novellist");
    }
}

function addButton(listName) {
    const button = document.createElement("a");
    button.className = "menu accordion";
    button.style = "width:200px; margin:10px; cursor: pointer;";
    button.id = "ProxerExport";
    button.addEventListener("click", () => download(listName), false);
    const icon = document.createElement("i");
    icon.className = "fa fa-file-import";
    button.appendChild(icon);
    const text = document.createTextNode("ProxerExport");
    button.appendChild(text);
    const accordion = document.getElementById("accordion");
    accordion.insertBefore(button, document.getElementById("state0"));
}

function download(listName) {
    let json = {};
    const categories = document.querySelectorAll("#box-table-a");
    categories.forEach(function (category) {
        const part = category.children.item(0);
        const title = part.children.item(0).children.item(0).innerHTML.toLowerCase().replace(/ /g, "-");
        console.log(title);
        let list = [];
        for(let i = 2; i < part.children.length; i++) {
            if(part.children.item(i).id.length !== 0) {
                const entry = part.children.item(i);
                const name = entry.children.item(1).children.item(0).innerHTML;
                const url = entry.children.item(1).children.item(0).href;
                const type = entry.children.item(2).innerHTML.split("<br>")[0];
                const state = entry.children.item(4).children.item(0).innerHTML;
                const jsonEntry = {name: name, state: state, type: type, url: url};
                list.push(jsonEntry);
            }
        }
        json[title] = list;
        console.log(list);
    });

    const content = JSON.stringify(json, null, "\t");
    const file = new Blob([ content ], { type: "application/json" });
    const downloader = document.createElement("a");

    const date = new Date();
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    const hours = ("0" + date.getHours()).slice(-2);
    const minutes = ("0" + date.getMinutes()).slice(-2);
    const seconds = ("0" + date.getSeconds()).slice(-2);

    downloader.download = "[" + year + "-" + month + "-" + day + "_" + hours + "-" + minutes + "-" + seconds + "]-" + listName + ".json";
    downloader.href = URL.createObjectURL(file);
    document.body.appendChild(downloader);
    downloader.click();
    document.body.removeChild(downloader);
}