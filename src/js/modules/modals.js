let timerId;
const modals = (triggerSelector, modalSelector, closeSelector) => {
    const trigger = document.querySelectorAll(triggerSelector),
          modal = document.querySelector(modalSelector),
          btnClose = modal.querySelector(closeSelector);


    trigger.forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (e.target) {
                e.preventDefault();
            };
            openModal();
        });
    });

    btnClose.addEventListener('click', () => {
        closeModal();
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.style.display == 'block') {
            closeModal();
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

    

    
};
function showModalByTime(selector) {
    timerId = setTimeout(() => {
        document.querySelector(selector).style.display = 'block';
        document.body.style.overflow = 'hidden';
    }, 6000);
};

export {showModalByTime};
export default modals;