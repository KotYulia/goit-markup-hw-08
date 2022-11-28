// Show Modal
const openModalButton = document.getElementById('intro-button-modal');
const modalWindowOverlay = document.getElementById('modal-overlay');

const showModalWindow = () => {
    document.body.classList.add('modal-open');
};
openModalButton.addEventListener("click", showModalWindow);

// Hide Modal
const closeModalButton = document.getElementById('close-modal');

const hideModalWindow = () => {
    document.body.classList.remove('modal-open');
};

closeModalButton.addEventListener("click", hideModalWindow);


// Hide On Blur
const hideModalWindowOnBlur = (e) => {

    if(e.target === e.currentTarget) {
        hideModalWindow();
    }
};

modalWindowOverlay.addEventListener("click", hideModalWindowOnBlur);

