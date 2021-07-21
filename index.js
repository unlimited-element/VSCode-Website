'use strict'

const swap = document.querySelector('.btn');

const swapper = () => {
    document.body.classList.toggle('dark-theme')
    var className = document.body.className;
    if (className == "light-theme") {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }
    console.log('current class name: ' + className);
}

swap.addEventListener('click', swapper);