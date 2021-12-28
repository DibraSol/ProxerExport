setInterval(function () {
  if (document.getElementById("ProxerExport") == null && document.querySelectorAll("#box-table-a").length !== 0) {
    main();
  }
}, 100);

function main() {
  if(location.href.includes("ucp?s=anime")) {
    addButton("anime");
  } else if(location.href.includes("ucp?s=manga")) {
    addButton("manga");
  } else if(location.href.includes("ucp?s=novel")) {
    addButton("novel");
  }
}

function addButton(listName) {
  const accordion = document.getElementById("accordion");
  const button = accordion.firstChild.cloneNode(true);
  button.id = "ProxerExport";
  button.innerText = "ProxerExport";
  button.style.width = "156px";
  button.addEventListener("click", (event) => {
    event.preventDefault();
    download(listName)
  }, false);
  accordion.insertBefore(button, accordion.children[4]);
}

function download(listName) {
  let json = {};
  const categories = document.querySelectorAll("#box-table-a");
  categories.forEach(function (category) {
    const part = category.children.item(0);
    const title = part.children.item(0).children.item(0).innerHTML.toLowerCase().replace(/ /g, "-");
    let list = [];
    for(let i = 2; i < part.children.length; i++) {
      if(part.children.item(i).id.length !== 0) {
        const entry = part.children.item(i);
        const name = entry.children.item(1).children.item(0).innerHTML;
        const medium = entry.children.item(2).innerHTML.split("<br>")[0];
        let bewertung = 0;
        for (let i = 0; i < entry.children.item(3).children.length; i++) {
          if (entry.children.item(3).children[i].src === (location.protocol + "//" + location.hostname + "/images/misc/stern.png")) {
            bewertung += 1;
          }
        }
        const stand = entry.children.item(4).children.item(0).innerHTML;
        const url = entry.children.item(1).children.item(0).href.split("#")[0];
        const jsonEntry = { name, medium, bewertung, stand, url };
        list.push(jsonEntry);
      }
    }
  json[title] = list;
  });

  const content = JSON.stringify(json);
  const file = new Blob([ content ], { type: "application/json" });
  const downloader = document.createElement("a");

  const date = new Date();
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  const hours = ("0" + date.getHours()).slice(-2);
  const minutes = ("0" + date.getMinutes()).slice(-2);
  const seconds = ("0" + date.getSeconds()).slice(-2);

  downloader.download = listName + "-[" + year + "-" + month + "-" + day + "_" + hours + "-" + minutes + "-" + seconds + "]" + ".json";
  downloader.href = URL.createObjectURL(file);
  document.body.appendChild(downloader);
  downloader.click();
  document.body.removeChild(downloader);
}