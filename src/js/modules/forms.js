import checkNumInputs from './checkNumInputs';

const forms = (state) => {
    
    const formsAll = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input');

    checkNumInputs('input[name="user_phone"]');

    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Мы скоро с Вами свяжемся',
        failure: 'Что-то пошло не так...',
    }

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;

        const res = await fetch(url, {
            method: "POST",
            body: data
        });

        return await res.text();
    }

    const clearInputs = () => {
        inputs.forEach(input => {
            input.value = '';
        })
    }

    formsAll.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            form.append(statusMessage);

            const formData = new FormData(form);

            if (form.getAttribute('data-calc') == 'end') {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }

            postData('assets/server.php', formData)
                .then(res => {
                    console.log(res);
                    statusMessage.textContent = message.success;
                })
                .catch(() => statusMessage.textContent = message.failure)
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                        if (form.getAttribute('data-calc') == 'end') {
                            document.querySelector('.popup_calc_end').style.display = 'none';
                            document.body.style.overflow = '';
                            document.body.style.marginRight = 0;
                        }
                    }, 3000);
                })
        })
    })
}

export default forms;