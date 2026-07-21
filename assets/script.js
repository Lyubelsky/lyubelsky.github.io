document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', (event) => {
        const link = document.createElement('a')
        link.href = 'items/' + item.querySelector('h3').innerHTML.toLowerCase().replace(' ', '-') + '/index.html'
        link.click()
    })
})