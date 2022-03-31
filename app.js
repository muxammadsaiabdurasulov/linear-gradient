const colors = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f'
]

function changingColor() {
    
function randomColor() {
    let color = '#'
    for(let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random() * colors.length)
        color += colors[random] 
    }
    return color
} 

const color1 = randomColor()
const color2 = randomColor()

console.log(color1, color2)

document.body.style.background = `linear-gradient(240deg, ${color1}, ${color2})`
}

changingColor
document.querySelector('button').addEventListener('click', changingColor)

