const nav = document.querySelector('nav');
nav.addEventListener('mouseover', function(event) {
    event.target.style.color = 'gold';
    setTimeout(function() {
        event.target.style.color = '';
    }, 500);
}, false);


const busImage = document.querySelector('.intro img');
document.addEventListener('keydown', function(event) {
    if (event.keyCode === 65) {
        busImage.style.borderColor = '#264653'
        busImage.style.borderWidth = '10px'
        busImage.style.borderStyle = 'double'
    }
})


document.addEventListener('keyup', function(event) {
    if (event.keyCode === 65) {
        busImage.style.borderStyle = 'none'
    }
})

document.addEventListener('wheel', function(event) {
    console.log(`You are scrolling using ${event}`)
})