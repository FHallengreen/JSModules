console.log("In initP2()");
let sharedText = "";

export function initP2() {
  document.querySelector("#btn-save-text").onclick = readText;
    document.querySelector("#text").innertext = sharedText;
}

export function getText(){
  return sharedText;
}

function readText(){
  sharedText = document.querySelector("#input-text").value;
  document.querySelector("#text").innerText = sharedText;
}

