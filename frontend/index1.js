
document.querySelector('.b_enter').addEventListener('click', async() => {
        window.location.href = './frontend/home.html'
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
       window.location.href = './frontend/home.html'
    }
});