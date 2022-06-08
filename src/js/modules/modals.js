let timerId;
const modals = (triggerSelector, modalSelector, closeSelector, closeClickOverlay = true, state) => {
    const trigger = document.querySelectorAll(triggerSelector),
          modal = document.querySelector(modalSelector),
          btnClose = modal.querySelector(closeSelector),
          allModals = document.querySelectorAll('[data-modals]'),
          scroll = calcScrol();


    trigger.forEach(btn => {
       
        btn.addEventListener('click', function func(e) {
            
            if (modal.classList.contains('popup_calc_profile') ) {
                if (!state.width || !state.height) {
                    btn.removeAddEventListener('click', func);
                };
            };

            if (modal.classList.contains('popup_calc_end') ) {
                if (!state.profile) {
                    btn.removeAddEventListener('click', func);
                };
            };


           closeAllModal();
           if (e.target) {
                e.preventDefault();
            };
            openModal();
            console.log(state);
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
        document.body.style.marginRight = `0px`;
    }

    function openModal() {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${scroll}px`;
        clearInterval(timerId);
    }

    function closeAllModal() {
        allModals.forEach(modal => {
            modal.style.display = 'none';
            document.body.style.marginRight = `0px`;
        })
    };

    
};
function calcScrol() {
    const div = document.createElement('div');

    div.style.width = '50px';
    div.style.height = '50px'
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.append(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
}
function showModalByTime(selector) {
    timerId = setTimeout(() => {
        document.querySelector(selector).style.display = 'block';
        document.body.style.overflow = 'hidden';
    }, 60000);
};

export {showModalByTime};
export default modals;