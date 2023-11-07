const board = document.querySelector('#board')
const colors = ['#ffe446', '#7ea600', '#105b03','#e3ebf6', '#60e48b', '#f8bbed', '#145c8c', '#ff6a5b']
const SQUARES_NUMBER = 1015

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 10px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    
    element.style.boxShadow = `0 0 2px #000`
    element.style.backgroundColor = '#2e7a88'
    
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}