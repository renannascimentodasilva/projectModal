const btnOpen = document.querySelector('#btnOpen');
const btnClose = document.querySelector('#btnClose');

const container = document.querySelector('#container');

const modal = document.querySelector('#boxModal');


const openModal = () => {
    container.style.display = 'none'
    modal.style.display = 'inline-block'
}   

const closeModal = () => {
    container.style.display = 'flex'
    modal.style.display = 'none'
}   


btnClose.addEventListener('click', closeModal)
btnOpen.addEventListener('click', openModal)