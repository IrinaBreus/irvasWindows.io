const tabs = (tabsSelector, contentSelector, activeClass) => {
    const tabs = document.querySelectorAll(tabsSelector),
          contents = document.querySelectorAll(contentSelector);
    
    tabs.forEach((tab, i) => {
        tab.addEventListener('click', () => {
            hiddenAll();
            showTabContent(i);
        })
    })

    function hiddenAll () {
        contents.forEach(item => {
            item.style.display = 'none';
        });
        tabs.forEach(tab => {
            tab.lastElementChild.classList.remove(activeClass);
        })
    }

    function showTabContent (i = 0) {
        tabs[i].lastElementChild.classList.add(activeClass);
        contents[i].style.display = 'block'; 
    }

};

export default tabs;