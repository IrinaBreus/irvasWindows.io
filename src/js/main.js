import './slider';

import modals from './modules/modals';
import tabs from './modules/tabs';

'use strict';


document.addEventListener('DOMContentLoaded', () => {
    modals();
    tabs('.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_item', '.tab_content', 'after_click');
});