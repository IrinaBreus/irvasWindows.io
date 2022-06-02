import './slider';

import modals from './modules/modals';
// import {showModalByTime} from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';



'use strict';
document.addEventListener('DOMContentLoaded', () => {
    "useStrict";

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
    tabs('.no_click', '.tab_content', 'after_click');
    tabs('.glazing_block a', '.glazing_content', 'active');
    tabs('.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
    forms(modalState);
})