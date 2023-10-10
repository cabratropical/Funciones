
const divs = document.querySelectorAll('div');
divs.forEach(function(div) {
    div.addEventListener('click', function() {
        this.style.backgroundColor = 'black';
    });
});


let currentColor = null;


document.addEventListener('keydown', function(event) {
    if (event.key === 'a') {
        currentColor = 'pink';
    } else if (event.key === 's') {
        currentColor = 'orange';
    } else if (event.key === 'd') {
        currentColor = 'lightblue';
    }
    document.getElementById('key').style.backgroundColor = currentColor;
});


document.addEventListener('keydown', function(event) {
    if (event.key === 'q') {
        createNewDiv('purple');
    } else if (event.key === 'w') {
        createNewDiv('gray');
    } else if (event.key === 'e') {
        createNewDiv('brown');
    }
});


function createNewDiv(color) {
    const newDiv = document.createElement('div');
    newDiv.style.width = '200px';
    newDiv.style.height = '200px';
    newDiv.style.backgroundColor = color;
    document.body.appendChild(newDiv);
}
