let isActive = false;

function toggleMenu() {
    isActive = !isActive;

    const menuBar = document.getElementById('menu');
    if (isActive) {
        menuBar.classList.add('h2');
        menuBar.classList.remove('h');
    } else {
        menuBar.classList.add('h');
        menuBar.classList.remove('h2');
    }
}

fetch('data.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('sobre-nos').textContent = data.sobre;
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });