import './slider';

import modals from './modules/modals';
import {showModalByTime} from './modules/modals';

'use strict';
document.addEventListener('DOMContentLoaded', () => {

    modals('.popup_engineer_btn', '.popup_engineer', '.popup_close');
    modals('.phone_link', '.popup', '.popup_close');
    showModalByTime('.popup');
})