document.querySelectorAll('img').forEach(img => {
    img.addEventListener('contextmenu', (event) => {
        event.preventDefault()
    })
    img.addEventListener('mousedown', (event) => {
        event.preventDefault()
    })
})
document.addEventListener('contextmenu', (event) => {
    event.preventDefault()
})

document.querySelector('.purchase').addEventListener('click', () => {
    var link = document.createElement('a')
    link.href = 'https://lyubelsky.itch.io/' + document.querySelector('.title').innerHTML.toLowerCase().replace(' ', '-') + '/purchase'
    link.click()
})

let isDragStart = false, prevPageX, prevScrollLeft

const dragStart = (e) => {
    isDragStart = true
    prevPageX = e.pageX || e.touches[0].pageX
    prevScrollLeft = carousel.scrollLeft
}

const dragging = (e) => {
    if (!isDragStart) return
    e.preventDefault()
    let positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX
    carousel.scrollLeft = prevScrollLeft - positionDiff
}

const dragStop = () => {
    isDragStart = false
}

const carousel = document.querySelector('.carousel')
carousel.addEventListener('mousedown', dragStart)
carousel.addEventListener('touchstart', dragStart)
carousel.addEventListener('mousemove', dragging)
carousel.addEventListener('touchmove', dragging)
carousel.addEventListener('mouseup', dragStop)
carousel.addEventListener('touchend', dragStop)
