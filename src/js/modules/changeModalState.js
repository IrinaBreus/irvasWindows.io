import checkNumInputs from "./checkNumInputs";

const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
          windowWidth = document.querySelectorAll('#width'),
          windowHeight = document.querySelectorAll('#height'),
          windowType = document.querySelectorAll('#view_type'),
          windowProfile = document.querySelectorAll('.checkbox');

    checkNumInputs('#width');
    checkNumInputs('#height');

    getData(windowForm, 'click', 'form');
    getData(windowWidth, 'input', 'width');
    getData(windowHeight, 'input', 'height');
    getData(windowType, 'change', 'type');
    getData(windowProfile, 'change', 'profile');

    function getData(elems, event, prop) {
        elems.forEach((elem, i) => {
            elem.addEventListener(event, () => {
                switch(elem.nodeName) {
                    case 'SPAN':
                        state[prop] = i + 1;
                        break;
                    case 'INPUT':
                        if (elem.getAttribute('type') === 'checkbox') {
                            i == 0 ? state[prop] = 'cold' : state[prop] = 'warm';
                            elems.forEach((box, j) => {
                                box.checked = false;
                                if (j === i) {
                                    box.checked = true;
                                };
                            })
                        } else {
                            state[prop] = elem.value;
                        }
                        break;
                    case 'SELECT':
                        state[prop] = elem.value;
                        break;
                }
                console.log(state);
            })
        })
        
    }

    
    
    
}

export default changeModalState;