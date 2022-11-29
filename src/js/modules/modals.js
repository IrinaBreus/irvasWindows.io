import calcScroll from "./calcScroll";

const modals = () => {
	const scrollWidth = calcScroll();

    const bindModal = (triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) => {
        const trigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector),
        close = modal.querySelector(closeSelector),
        windows = document.querySelectorAll('[data-modals]');   
		

        trigger.forEach(btn => {
            btn.addEventListener('click', (e) => {
				e.preventDefault();
                closeAllModals();
                openModal();
            });
        });
        

        close.addEventListener('click', () => {
            closeModal();
            closeAllModals();
        })
        
        modal.addEventListener('click', (e) => {
            if (e.target == modal && closeClickOverlay == true) {
                closeModal();
                closeAllModals();
            }
        })
        document.addEventListener('keydown', (e) => {
			if (e.code == 'Escape' ) {
				closeModal();
                closeAllModals();
            }
        })
		
        function openModal() {
			modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
			
            document.body.style.marginRight = `${scrollWidth}px`;
			// clearInterval(modalTimerId);
        }
		
        function closeModal() {
			modal.style.display = 'none';
            document.body.style.overflow = '';
            document.body.style.marginRight = '0px';
        }

        function closeAllModals() {
            windows.forEach(window => {
                window.style.display = 'none';
            })
        }
    }
	
	// const modalTimerId = setTimeout(() => {
	// 	document.querySelector('.popup').style.display = 'block';
	// 	document.body.style.overflow = 'hidden';
	// 	document.body.style.marginRight = `${scrollWidth}px`;
	// }, 60000);
	
    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_close');
    bindModal('.phone_link', '.popup', '.popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');

    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
};

export default modals;