
document.querySelector('.b_enter').addEventListener('click', async() => {
        window.location.href = './frountend/home.html'
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
       window.location.href = './frountend/home.html'
    }
});