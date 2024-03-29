import './slider';

import modals from './modules/modals';
import tabs from './modules/tabs';
import timer from './modules/timer';
import images from './modules/images';
import forms from './modules/forms';
import changeStateModal from './modules/changeStateModal';


document.addEventListener('DOMContentLoaded', () => {
    modals();
    'use strict';

    const stateModal = {};

    changeStateModal(stateModal);
    tabs('.glazing_slider ', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more');

    forms(stateModal);

    timer('.container1');

    images();
});