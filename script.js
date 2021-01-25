const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

let size = 10
let isPressed = false
let x 
let y

canvas.addEventListener('mousedown', function(e) {
    isPressed = true

    x = e.offsetX
    y = e.offsetY
})

canvas.addEventListener('mouseup', function(e) {
    isPressed = false

    x = undefined
    y = undefined
})

canvas.addEventListener('mousemove', function(e) {
    if(isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY
        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)
        x = x2
        y = y2
    }
})

function drawCircle(x, y) {
    ctx.beginPath()
    ctx.arc(x, y, size, 0, Math.PI * 2,)
    ctx.fillStyle = defaultColor
    ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = defaultColor
    ctx.lineWidth = size * 2
    ctx.stroke()
}

decrease.addEventListener('click', function() {
    if(size === 1) return
    size--
    const ss = document.getElementById('size')
    ss.innerText = size
}) 

increase.addEventListener('click', function() {
    if(size === 20) return
    size++
    const ss = document.getElementById('size')
    ss.innerText = size
}) 

clear.addEventListener('click', function() {
    ctx.clearRect(0, 0, 1000, 600)
}) 

var colorWell;
var defaultColor = "#0000ff";

window.addEventListener("load", startup, false);

function startup() {
    colorWell = document.querySelector("#colorWell");
    colorWell.value = defaultColor;
    colorWell.addEventListener("input", updateFirst, false);
}

function updateFirst(event) {
    defaultColor = event.target.value
}
