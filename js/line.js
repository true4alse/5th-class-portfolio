

function Line(selector,quantityX,quantityY){
    this.lineXTopList = []
    this.lineX = window.innerWidth / quantityX+1
    this.lineY = window.innerHeight / quantityY+1
    this.getCoordsLine = ()=>{
        for(let i=0 ; i<quantityX ; i++){
            this.lineXTopList.push({
                x1:this.lineX*(i),
                y1:0,
                x2:getVWidth()/2,
                y2:getVHeight()/2
            })
        }
        return  this.lineXTopList
    }
    this.createSvg = function(){
        let svgString=``
        let array = this.getCoordsLine();
        console.log(array)
        for(let i=0 ; i<quantityX ; i++){
            svgString+=`<line x1="${array[i].x1}" y1="${array[i].y1}" x2="${array[i].x2}" y2="${array[i].y2}" />`;
        }        
        return svgString;
    }
    this.drawing = ()=>{
        selector.innerHTML = this.createSvg()
    }
}