const images = () => {
    
    const imagePopup = document.createElement('div'),
          worksSection = document.querySelector('.works'),
          bigImage = document.createElement('img');

    imagePopup.classList.add('popup');
    worksSection.append(imagePopup);
    
    imagePopup.style.cssText = `
        justify-content: center;
        align-items: center;
        display: 'none'`;
    bigImage.style.cssText = `
        max-width: 85%;
        max-height: 90%`;
    
    imagePopup.append(bigImage);

    worksSection.addEventListener('click', (e) => {
        e.preventDefault();

        if (e.target && e.target.classList.contains('preview')) {
            let path = e.target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path);
            
            imagePopup.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        };
        
        if (e.target && e.target.matches('div.popup')) {
            imagePopup.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
}

export default images;