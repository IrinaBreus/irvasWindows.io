import './slider';

import modals from './modules/modals';
import tabs from './modules/tabs';
import timer from './modules/timer';
import images from './modules/images';

'use strict';


document.addEventListener('DOMContentLoaded', () => {
    modals();

    tabs('.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_item', '.tab_content', 'after_click');

    timer('.container1');

    images();
});