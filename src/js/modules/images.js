const images = () => {
    const works = document.querySelector('.works');
    const modal = document.createElement('div');

    modal.classList.add('popup');

    works.append(modal);

    modal.style.cssText = `
        display: none;
        justify-content: center;
        align-items: center;
    `;

    let img = document.createElement('img');
    img.style.cssText = `
        max-width: 70%;
        max-height: 90%;
    `;
    
    modal.append(img);
    
    works.addEventListener('click', (e) => {
        e.preventDefault();
        
        if (e.target.classList.contains('preview')) {
            let path = e.target.parentNode.getAttribute('href');
            img.src = path;

            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }

        if (e.target.matches('.popup')) {
           closeModal();
        }
    });

    works.addEventListener('keydown', (e) => {
        if (e.code === 'Escape') {
            closeModal();
        }
    })

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
}

export default images;