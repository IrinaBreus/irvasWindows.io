import './slider';

import modals from './modules/modals';
// import {showModalByTime} from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';
import timer from './modules/timer';
import images from './modules/images';


'use strict';
document.addEventListener('DOMContentLoaded', () => {
    "useStrict";

    const deadline = '2022-12-20T00:00';
    let modalState = {
        form: 1,
        type: 'tree'
    };

    changeModalState(modalState);
    modals('.popup_engineer_btn', '.popup_engineer', '.popup_close');
    modals('.phone_link', '.popup', '.popup_close');
    modals('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    modals('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false, modalState);
    modals('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false, modalState);
    // showModalByTime('.popup');
    tabs('.decoration_slider', '.no_click', '.tab_content', 'after_click');
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
    
    forms(modalState);

    timer('.container1', deadline);

    images();
})