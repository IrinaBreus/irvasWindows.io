const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
          windowWidth = document.querySelector('#width'),
          windowHeight = document.querySelector('#height'),
          windowType = document.querySelector('#view_type'),
          windowProfile = document.querySelectorAll('.checkbox');

    windowForm.forEach((form, i) => {
        form.addEventListener('click', () => {
            state.form = i + 1;
            console.log(state);
        });
    });

    windowWidth.addEventListener('input', () => {
        state.width = this.value;
        console.log(windowWidth);
    });
    
    
}

export default changeModalState;