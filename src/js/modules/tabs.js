const tabs = (tabsSelector, tabsContentSelector, activeClass, display = 'block') => {

    const tabs = document.querySelectorAll(tabsSelector),
          tabContents = document.querySelectorAll(tabsContentSelector);

    hideTabs();
    showTabs();

    tabContents.forEach(elem => elem.classList.add('faded'));
    
    tabs.forEach((item, i) => {
        item.addEventListener('click', () => {
            hideTabs();
            showTabs(i);
        })
    });

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