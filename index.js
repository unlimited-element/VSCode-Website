'use strict'

const swap = document.querySelector('.btn');

const swapper = () => {
    document.body.classList.toggle('dark-theme')
}

swap.addEventListener('click', swapper);