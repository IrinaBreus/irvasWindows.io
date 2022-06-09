const tabs = (parentSelector, tabsSelector, tabsContentSelector, activeClass, display = 'block') => {

    const parent = document.querySelector(parentSelector),
          tabs = document.querySelectorAll(tabsSelector),
          tabContents = document.querySelectorAll(tabsContentSelector);

    hideTabs();
    showTabs();

    tabContents.forEach(elem => elem.classList.add('faded'));
    
    parent.addEventListener('click', (e) => {
        let classes = tabsSelector.replace(/\./, '');
        if (e.target.classList.contains(classes) || 
            e.target.parentNode.classList.contains(classes)) {
            tabs.forEach((elem, i) => {
                if (e.target == elem || e.target.parentNode === elem) {
                    hideTabs();
                    showTabs(i);
                }
            })
        }
    })
    

    function hideTabs() {
        tabContents.forEach(elem => elem.style.display = 'none');
        tabs.forEach(elem => elem.classList.remove(activeClass));
    }
    function showTabs(i = 0) {
        tabContents[i].style.display = display;
        tabs[i].classList.add(activeClass);
    }
}

export default tabs;