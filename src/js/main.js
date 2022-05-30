import './slider';

import modals from './modules/modals';
// import {showModalByTime} from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';



'use strict';
document.addEventListener('DOMContentLoaded', () => {
    "useStrict";
    modals('.popup_engineer_btn', '.popup_engineer', '.popup_close');
    modals('.phone_link', '.popup', '.popup_close');
    // showModalByTime('.popup');
    tabs('.no_click', '.tab_content', 'after_click');
    tabs('.glazing_block a', '.glazing_content', 'active');
    forms();
})