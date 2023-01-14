function getViewBox(){
    return `0 0 ${window.innerWidth} ${window.innerHeight}`
}

function setViewBox(selector){
    selector.setAttribute("viewBox",getViewBox())
}

function getVWidth(){
    return window.innerWidth;
}

function getVHeight(){
    return window.innerHeight;
}