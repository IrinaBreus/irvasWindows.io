import checkNumInputs from "./checkNumInputs";

const forms = (state) => {
    
    const allForms = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input');

    
    checkNumInputs('input[name="user_phone"]');

    
    const message = {
        loading: 'Загрузка....',
        succes: 'Спасибо! Мы скоро с Вами свяжемся',
        failure: 'Упс... Что-то пошло не так...'
    };

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;

        const response = await fetch(url, {
            method: 'POST',
            body: data
        });

        return await response.text();
    }

    allForms.forEach(form => {
                
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            form.append(statusMessage);

            const formData = new FormData(form);
            if (form.getAttribute('data-calc') === 'end') {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }
            
            function clearState() {
                for (let key in state) {
                    state[key] = '';
                }
                state.form = 1;
                state.type = 'tree';
            }

            postData('assets/server.php', formData)
                .then(res => {
                    console.log(res);
                    statusMessage.textContent = message.succes;
                })
                .catch(() => statusMessage.textContent = message.failure)
                .finally(() => {
                    inputs.forEach(input => input.value = '');
                    setTimeout(() => {
                        statusMessage.remove();
                        form.closest('[data-modals]').style.display = 'none';
                        document.body.style.overflow = '';
                        clearState();
                    }, 3000);
                });
        });
    })
}

export default forms;