const tabs = (tabsSelector, tabsContentSelector, activeClass) => {

    const tabs = document.querySelectorAll(tabsSelector),
          tabContents = document.querySelectorAll(tabsContentSelector);

    hideTabs();
    showTabs();

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
        tabContents[i].style.display = 'block';
        tabs[i].classList.add(activeClass);
    }
}

export default tabs;