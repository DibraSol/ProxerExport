setInterval(function () {
  if (document.getElementById("ProxerExport") == null &&
      document.querySelectorAll("#box-table-a").length !== 0) {
    main();
  }
}, 100);

function main() {
  if (location.href.includes("ucp?s=anime") ||
      location.href.includes("ucp?s=manga") ||
      location.href.includes("ucp?s=novel")) {
    addButton();
  }
}

function addButton() {
  const accordion = document.getElementById("accordion");
  const button = <HTMLElement> accordion.firstChild.cloneNode();
  button.removeAttribute("onclick");
  button.id = "ProxerExport";
  button.innerText = "ProxerExport";
  button.style.width = "156px";
  button.addEventListener("click", download);
  accordion.insertBefore(button, accordion.children[4]);
}

function download() {
  const json = {};
  const categories = document.querySelectorAll("#box-table-a");
  categories.forEach((category) => {
    const part = category.children.item(0);
    const title = part.children.item(0).children.item(0).innerHTML.toLowerCase().replace(/ /g, "-");
    const list = [];
    for(let i = 2; i < part.children.length; i++) {
      if(part.children.item(i).id.length !== 0) {
        const entry = part.children.item(i);
        const name = entry.children.item(1).children.item(0).innerHTML;
        const medium = entry.children.item(2).innerHTML.split("<br>")[0];
        let bewertung = 0;
        for (const star of entry.children.item(3).children) {
          if (star instanceof HTMLImageElement &&
              star.src === `${location.protocol}//${location.hostname}/images/misc/stern.png`) {
            bewertung += 1;
          }
        }
        const stand = entry.children.item(4).children.item(0).innerHTML;
        const url = (<HTMLLinkElement> entry.children.item(1).children.item(0)).href.split("#")[0];
        list.push({ name, medium, bewertung, stand, url });
      }
    }
    json[title] = list;
  });

  const name = new URL(window.location.href).searchParams.get("s");
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

  downloader.download = `${name}-[${year}-${month}-${day}_${hours}-${minutes}-${seconds}].json`;
  downloader.href = URL.createObjectURL(file);
  document.body.appendChild(downloader);
  downloader.click();
  document.body.removeChild(downloader);
}