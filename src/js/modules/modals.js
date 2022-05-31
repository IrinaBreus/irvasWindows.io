let timerId;
const modals = (triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) => {
    const trigger = document.querySelectorAll(triggerSelector),
          modal = document.querySelector(modalSelector),
          btnClose = modal.querySelector(closeSelector),
          allModals = document.querySelectorAll('[data-modals]');


    trigger.forEach(btn => {
        btn.addEventListener('click', (e) => {
           closeAllModal();
           if (e.target) {
                e.preventDefault();
            };
            
            openModal();
            
        });
    });

    btnClose.addEventListener('click', () => {
        closeModal();
        closeAllModal();
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal && closeClickOverlay) {
            closeModal();
            closeAllModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.style.display == 'block') {
            closeModal();
            closeAllModal();
        }
    });

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }

    function openModal() {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        clearInterval(timerId);
    }

    function closeAllModal() {
        allModals.forEach(modal => modal.style.display = 'none')
    };

    
};

function showModalByTime(selector) {
    timerId = setTimeout(() => {
        document.querySelector(selector).style.display = 'block';
        document.body.style.overflow = 'hidden';
    }, 60000);
};

export {showModalByTime};
export default modals;