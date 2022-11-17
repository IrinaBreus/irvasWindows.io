import calcScroll from "./calcScroll";

const modals = () => {
	const scrollWidth = calcScroll();

    const bindModal = (triggerSelector, modalSelector, closeSelector) => {
        const trigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector),
        close = modal.querySelector(closeSelector);   
		
        trigger.forEach(btn => {
            btn.addEventListener('click', (e) => {
				e.preventDefault();
                openModal();
                
            });
        });
        
        close.addEventListener('click', () => {
            closeModal();
        })
        
        document.addEventListener('keydown', (e) => {
			if (e.code == 'Escape' ) {
				closeModal();
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
    }
	
	// const modalTimerId = setTimeout(() => {
	// 	document.querySelector('.popup').style.display = 'block';
	// 	document.body.style.overflow = 'hidden';
	// 	document.body.style.marginRight = `${scrollWidth}px`;
	// }, 60000);
	
    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_close');
    bindModal('.phone_link', '.popup', '.popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
};

export default modals;