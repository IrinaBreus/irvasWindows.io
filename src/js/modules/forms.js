const forms = () => {
    
    const allForms = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input'),
          inputsPhone = document.querySelectorAll('input[name="user_phone"]');

    inputsPhone.forEach(input => {
        input.addEventListener('input', () => {
            input.value = input.value.replace(/\D/, '');
        });
    });

    
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
                    }, 3000);
                });
        });
    })
}

export default forms;