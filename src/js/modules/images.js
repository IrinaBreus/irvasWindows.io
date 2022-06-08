const images = () => {
      const sectionWorks = document.querySelector('.works'),
            imgPopup = document.createElement('div'),
            bigImg = document.createElement('img');

    imgPopup.classList.add('popup');
    
    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    bigImg.style.cssText = `
        max-width: 90%;
        max-height: 90%;
    `
    sectionWorks.append(imgPopup);
    
    sectionWorks.addEventListener('click', (e) => {
        e.preventDefault();

        if (e.target && e.target.classList.contains('preview')) {
            let props = e.target.parentNode.getAttribute('href');
            bigImg.setAttribute('src', props);
            imgPopup.append(bigImg);
            imgPopup.style.display = 'flex';
            imgPopup.classList.add('faded');
        }

        if (e.target.matches('.popup')) {
            imgPopup.style.display = 'none';
        }
    })
}

export default images;