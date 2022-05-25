import './slider';

import modals from './modules/modals';
// import {showModalByTime} from './modules/modals';
import tabs from './modules/tabs';

'use strict';
document.addEventListener('DOMContentLoaded', () => {

    modals('.popup_engineer_btn', '.popup_engineer', '.popup_close');
    modals('.phone_link', '.popup', '.popup_close');
    // showModalByTime('.popup');
    tabs('.no_click', '.tab_content', 'after_click');
    tabs('.glazing_block a', '.glazing_content', 'active');
})