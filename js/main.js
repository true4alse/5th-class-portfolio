
window.onload = function(){
    const bgSvg = document.querySelector(".bgSvg")
    setViewBox(bgSvg)
    this.onresize = function(){
        setViewBox(bgSvg)
    }

    const lines = new Line(bgSvg,100,3)
    lines.drawing()
    // console.log(lines.drawing())


}