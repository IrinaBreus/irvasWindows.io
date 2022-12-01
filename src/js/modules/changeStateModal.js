const changeStateModal = (state) => {
    const model = document.querySelectorAll('.balcon_icons_img'),
        width = document.querySelectorAll('#width'),
        height = document.querySelectorAll('#height'),
        type = document.querySelectorAll('#view_type'),
        profiles = document.querySelectorAll('.checkbox');

        const bindActionToElem = (elems, event, props) => {
            elems.forEach((elem, i) => {
                elem.addEventListener(event, () => {
                    switch(elem.nodeName) {
                        case 'SPAN' :
                            state[props] = i + 1;
                            break;
                        case 'INPUT': 
                            if (elem.getAttribute('type') == 'checkbox') {
                                i == 0 ? state[props] = 'Холодное' : state[props] = 'Теплое';
                                elems.forEach((radio, j) => {
                                    i == j ? radio.checked = true : radio.checked = false;
                                });
                            } else {
                                state[props] = elem.value;
                            }
                            break;
                        case 'SELECT' :
                            state[props] = elem.value;
                    }
                })
            });
        }

        bindActionToElem(model, 'click', 'model');
        bindActionToElem(width, 'input', 'width');
        bindActionToElem(height, 'input', 'height');
        bindActionToElem(profiles, 'click', 'profiles');
        bindActionToElem(type, 'change', 'type')

}

export default changeStateModal;