

function lockWindowPos(){
    for (let index = 0; index < document.getElementsByClassName("topBar").length; index++) {
        const ReSelnt = document.getElementsByClassName("topBar")[index];
        ReSelnt.style.top = - ReSelnt.clientHeight - 8;
    }
}

function BringWindowOut(BarPeace){
    document.getElementsByClassName("topBar")[BarPeace].style.top = - document.getElementsByClassName("topBar")[BarPeace].clientHeight - 8;
}

function Start(){
    lockWindowPos();
}
Start();

for (let index = 0; index < document.getElementsByClassName("topBar").length; index++) {
    const element = document.getElementsByClassName("topBar")[index];
    //gets proceeding header. topBarheader peices come in the same order as the topbar meaning to reference a top and top header you only need the index for one as there in the same location in each array
    const element2 = document.getElementsByClassName("topBarHeader")[index];
    dragElement(element, element2);
}

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

function dragElement(item, headeritem) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (headeritem) {
    headeritem.onmousedown = dragMouseDown;
  } 
  else {
    item.onmousedown = dragMouseDown;
  }

  function dragMouseDown(Md) {
    Md = Md || window.event;
    Md.preventDefault();
    
    pos3 = Md.clientX; pos4 = Md.clientY;

    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(Md) {
    Md = Md || window.event;
    Md.preventDefault();

    pos1 = pos3 - Md.clientX; pos2 = pos4 - Md.clientY;

    pos3 = Md.clientX; pos4 = Md.clientY;

    item.style.top = clamp (item.offsetTop - pos2, 0, (document.documentElement.clientHeight - item.clientHeight - 52)) + "px";
    item.style.left = clamp (item.offsetLeft - pos1, 0 ,(document.documentElement.clientWidth - item.clientWidth - 2)) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function pressedisation(windowValue){
    console.log(windowValue);
    document.getElementsByClassName("topBar")[windowValue].style.top = 32;
        //BringWindowIn(document.getElementsByClassName("iconSe")[index]);
}

window.addEventListener('resize', lockWindowPos());